const fontImg = new Image();
fontImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtsAAAAMCAYAAAHE00GAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlBN0E3MTBBODI4MDExRUM4OTBDRUQ0M0Y1NEMzRjFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlBN0E3MTBCODI4MDExRUM4OTBDRUQ0M0Y1NEMzRjFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUE3QTcxMDg4MjgwMTFFQzg5MENFRDQzRjU0QzNGMUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUE3QTcxMDk4MjgwMTFFQzg5MENFRDQzRjU0QzNGMUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7M8hPOAAAbs0lEQVR42nxSIQ6FMAzt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";

let cached_gradient = [];
let current_color_char = null;
let width_index = 0;

const createPNG = (imgid, text) => {
    let canvas = document.createElement("canvas");
    canvas.width = 15 * 36;
    canvas.height = 12;
    drawLetters(canvas.getContext("2d"), text);

    let canvas_output = new Image();
    canvas_output.src = canvas.toDataURL()
    canvas_output.onload = () => {
        let cropped_canvas = document.createElement("canvas")
        cropped_canvas.width = width_index;
        cropped_canvas.height = 12;
        cropped_canvas.getContext("2d").drawImage(canvas_output, 0, 0, canvas_output.width, canvas_output.height);
        document.getElementById(imgid).src = cropped_canvas.toDataURL();

        canvas = null;
        canvas_output = null;
        cropped_canvas = null;
    }
}

const drawLetters = (ctx, text) => {
    width_index = 0;
    text = text.toLowerCase();
    let color_char = "c";
    for (var i = 0; i < text.length; i++) {
        let letter = text.charAt(i)
        if (letter == "\\") {
            if (text.charAt(i + 1) == "c") {
                let skip_index = 2;
                if (text.charAt(i + 2) == "[") {
                    skip_index += 3;
                    color_char = text.charAt(i + 3) + text.charAt(i + 4)
                } else {
                    color_char = text.charAt(i + 2)
                }
                i += skip_index;
                continue;
            }
        }
        const { x1, x2 } = font_coords[letter];
        const letter_width = (x2 - x1);
        ctx.drawImage(fontImg, x1, 0, letter_width, 15, width_index, 0, letter_width, 15);
        colorFont(ctx, color_char, width_index, letter_width);
        width_index += letter_width;
    }
}

const colorFont = (ctx, color, x, w) => {
    if (color != current_color_char) {
        current_color_char = color;
        if (!(color in font_colors))
            current_color_char = "c"
        cached_gradient = [];
        const gradients = font_colors[current_color_char]
        gradients.forEach(gradient => {
            const color1 = gradient[0]
            const color2 = gradient[1]
            const steps = gradient[3] - gradient[2]
            cached_gradient = [...cached_gradient, ...interpolateColors(color1, color2, steps)]
        });
    }

    let imgData = ctx.getImageData(x, 0, w, 15);
    for (let i = 0; i < imgData.data.length; i += 4) {
        let r = imgData.data[i];
        let g = imgData.data[i + 1];
        let b = imgData.data[i + 2];
        if (!!r) r = cached_gradient[r][0];
        if (!!g) g = cached_gradient[g][1];
        if (!!b) b = cached_gradient[b][2];
        imgData.data[i] = r;
        imgData.data[i + 1] = g
        imgData.data[i + 2] = b
    }
    ctx.putImageData(imgData, x, 0);
}

const hexToRGB = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
    ]
}

function interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) {
        factor = 0.5;
    }
    var result = color1.slice();
    for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
};

function interpolateColors(color1, color2, steps) {
    var stepFactor = 1 / (steps - 1),
        interpolatedColorArray = [];

    color1 = hexToRGB(color1)
    color1 = `${color1[0]},${color1[1]},${color1[2]}`
    color1 = color1.match(/\d+/g).map(Number);

    color2 = hexToRGB(color2)
    color2 = `${color2[0]},${color2[1]},${color2[2]}`
    color2 = color2.match(/\d+/g).map(Number);

    for (var i = 0; i < steps; i++) {
        interpolatedColorArray.push(interpolateColor(color1, color2, stepFactor * i));
    }

    return interpolatedColorArray;
}
