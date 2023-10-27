class ZanFont {

    constructor(
        readyCallback, urlsDict = {
            bigFontURL: "https://raw.githubusercontent.com/ClaudioBo/zandronum_font_previewer/master/data/dbigfont.png",
            smallFontURL: "https://raw.githubusercontent.com/ClaudioBo/zandronum_font_previewer/master/data/dsmallfont.png",
            colorsJSONURL: "https://raw.githubusercontent.com/ClaudioBo/zandronum_font_previewer/master/data/font-coords.json",
            fontCoordsJSONURL: "https://raw.githubusercontent.com/ClaudioBo/zandronum_font_previewer/master/data/colors.json"
            // bigFontURL: "https://www.claudiobo.com/zandronum-font/dbigfont.png",
            // smallFontURL: "https://www.claudiobo.com/zandronum-font/dsmallfont.png",
            // colorsJSONURL: "https://www.claudiobo.com/zandronum-font/colors.json",
            // fontCoordsJSONURL: "https://www.claudiobo.com/zandronum-font/font-coords.json"
        }) {

        // URLs
        this.urlsDict = urlsDict

        // Data
        this.bigFontImg = undefined
        this.smallFontImg = undefined
        this.colorsDict = undefined
        this.fontCoordsDict = undefined

        // Runtime
        this.readyCallback = readyCallback
        this.cachedGradient = []
        this.currentColorChar = null
        this.widthIndex = 0

        this.initializeData()
    }

    loadImage = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.crossOrigin = 'Anonymous'
            img.src = url
            img.onload = () => resolve(img)
            img.onerror = e => {
                console.error(e)
                reject(undefined)
            }
        })
    }

    initializeData = async () => {
        if (!!this.bigFontImg && !!this.smallFontImg && !!this.colorsDict && !!this.fontCoordsDict) return
        if (!this.bigFontImg) {
            const response = await this.loadImage(this.urlsDict.bigFontURL)
            if (!response) return
            this.bigFontImg = response
        }
        if (!this.smallFontImg) {
            const response = await this.loadImage(this.urlsDict.smallFontURL)
            if (!response) return
            this.smallFontImg = response
        }
        if (!this.colorsDict) {
            const response = await fetch(this.urlsDict.colorsJSONURL)
            if (response.status !== 200) { console.error(`colors.json: Server returned a ${response.status}:`, await response.text()); return }
            this.colorsDict = await response.json()
        }
        if (!this.fontCoordsDict) {
            const response = await fetch(this.urlsDict.fontCoordsJSONURL)
            if (response.status !== 200) { console.error(`font-coords.json: Server returned a ${response.status}:`, await response.text()); return }
            this.fontCoordsDict = await response.json()
        }
        if (!!this.bigFontImg && !!this.smallFontImg && !!this.colorsDict && !!this.fontCoordsDict) this.readyCallback()
    }

    createPNG = (imageId, text, font) => {
        if (!this.bigFontImg || !this.smallFontImg || !this.colorsDict || !this.fontCoordsDict) {
            console.warn("Zanfont.js is not ready")
            return
        }

        const tempCanvas = document.createElement("canvas")
        tempCanvas.width = 15 * 36
        tempCanvas.height = 12
        this.drawLetters(tempCanvas.getContext("2d", { willReadFrequently: true }), text, font)

        const canvasOutput = new Image()
        canvasOutput.src = tempCanvas.toDataURL()
        canvasOutput.onload = () => {
            const croppedCanvas = document.createElement("canvas")
            croppedCanvas.width = this.widthIndex
            croppedCanvas.height = font == "bigfont" ? 15 : 7
            croppedCanvas.getContext("2d").drawImage(canvasOutput, 0, 0, canvasOutput.width, canvasOutput.height)
            document.getElementById(imageId).src = croppedCanvas.toDataURL()
        }
    }

    drawLetters = (canvasContext, text, font) => {
        this.widthIndex = 0
        text = text.toLowerCase()
        let colorChar = "c"
        let characterLength = 0
        for (var i = 0; i < text.length; i++) {
            if (characterLength > 31) break
            const letter = text.charAt(i)
            if (letter == "\\") {
                if (text.charAt(i + 1) == "c") {
                    let skipIndex = 2
                    if (text.charAt(i + 2) == "[") {
                        skipIndex += 3
                        colorChar = text.charAt(i + 3) + text.charAt(i + 4)
                    } else {
                        colorChar = text.charAt(i + 2)
                    }
                    i += skipIndex
                    continue
                }
            }
            if (!this.fontCoordsDict[font][letter]) continue
            const { x1, x2 } = this.fontCoordsDict[font][letter]
            const letterWidth = (x2 - x1)
            canvasContext.drawImage(font == "bigfont" ? this.bigFontImg : this.smallFontImg, x1, 0, letterWidth, 15, this.widthIndex, 0, letterWidth, 15)
            this.colorFont(canvasContext, colorChar, this.widthIndex, letterWidth)
            this.widthIndex += letterWidth
            characterLength++
        }
    }

    colorFont = (canvasContext, color, x, w) => {
        if (color != this.currentColorChar) {
            this.cachedGradient = []
            this.currentColorChar = color
            if (!(color in this.colorsDict))
                this.currentColorChar = "c"
            const gradients = this.colorsDict[this.currentColorChar]
            for (let i = 0; i < gradients.length; i++) {
                const color1 = gradients[i][0]
                const color2 = gradients[i][1]
                const step1 = gradients[i][2]
                const step2 = gradients[i][3]
                const steps = step2 - step1
                this.cachedGradient = [...this.cachedGradient, ...this.interpolateColors(color1, color2, steps)]
                //The last step doesnt end with 256? Fill with the last color
                if (i == gradients.length - 1) {
                    if (step2 != 256) {
                        const remaining = 256 - step2
                        const lastAddedColor = this.cachedGradient[this.cachedGradient.length - 1]
                        for (let j = 0; j < remaining; j++) {
                            this.cachedGradient.push(lastAddedColor)
                        }
                    }
                }
            }
        }

        const imgData = canvasContext.getImageData(x, 0, w, 15)
        for (let i = 0; i < imgData.data.length; i += 4) {
            let rValue = imgData.data[i]
            let gValue = imgData.data[i + 1]
            let bValue = imgData.data[i + 2]
            if (!!rValue) rValue = this.cachedGradient[rValue][0]
            if (!!gValue) gValue = this.cachedGradient[gValue][1]
            if (!!bValue) bValue = this.cachedGradient[bValue][2]
            imgData.data[i] = rValue
            imgData.data[i + 1] = gValue
            imgData.data[i + 2] = bValue
        }
        canvasContext.putImageData(imgData, x, 0)
    }

    hexToRGB = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ]
    }

    interpolateColor = (color1, color2, factor = 0.5) => {
        const result = color1.slice()
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result
    }

    interpolateColors = (color1, color2, steps) => {
        const stepFactor = 1 / (steps - 1)
        const interpolatedColorArray = []

        color1 = this.hexToRGB(color1)
        color1 = `${color1[0]},${color1[1]},${color1[2]}`
        color1 = color1.match(/\d+/g).map(Number)

        color2 = this.hexToRGB(color2)
        color2 = `${color2[0]},${color2[1]},${color2[2]}`
        color2 = color2.match(/\d+/g).map(Number)

        for (var i = 0; i < steps; i++) {
            interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i))
        }

        return interpolatedColorArray
    }
}
