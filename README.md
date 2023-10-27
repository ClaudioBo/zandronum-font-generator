# Zandronum Font Previewer/Generator
A tool for showing Doom font using special Zandronum's TEXTCOLOR using Javascript Canvas

[ZDoom Text Colors](https://zdoom.org/wiki/Print#Colors)  
[Zandronum Text Colors](https://zandronum.com/forum/viewtopic.php?p=46018#p46018)

## Demo example:
You can load **./src/index.html** into your browser.  
or go to [the live preview](https://www.claudiobo.com/zandronum-font/)

## Implementation example:
```java
/* First, after the closing </body> tag you need to import zanfont.js */
<script src="zanfont.js"></script>

/* Then you need to set a id to a img element where you want the font to be rendered */
<img id="zanfont-preview-1">
<img id="zanfont-preview-2"> 

/* Then you initialize a ZanFont class */
/* You can add a callback that gets executed when ZanFont is ready loading everything */
/* i.e. generating a default image */
const zanFontInstance = new ZanFont({
    // Initial text generation
    zanFontInstance.createPNG("zanfont-preview-1", "Wow some \c[x1]tests!", "bigfont");
    zanFontInstance.createPNG("zanfont-preview-2", "\c[x2]Very cool", "smallfont");
    // Maybe you can add to a element a "onInput" event to re-call the 'createPNG' function
})

/* Optionally, you can specify custom URLs with a dictionary so ZanFont fetchs the required data from other sources */
/* Just in case the default sites that are in the library doesn't work anymore */
const zanFontInstance = new ZanFont({ /*...*/ }, {
    bigFontURL: "https://www.claudiobo.com/zandronum-font/dbigfont.png",
    smallFontURL: "https://www.claudiobo.com/zandronum-font/dsmallfont.png",
    colorsJSONURL: "https://www.claudiobo.com/zandronum-font/colors.json",
    fontCoordsJSONURL: "https://www.claudiobo.com/zandronum-font/font-coords.json"
})

```

And boila, if you use bigfont you'll get:  
![Output Image 1](tools/output1.png)

And if you use smallfont:  
![Output Image 2](tools/output2.png)