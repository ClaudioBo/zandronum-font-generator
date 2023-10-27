# Zandronum Font Generator/Previewer
A tool for generating Doom's text using special ZDoom/Zandronum's TEXTCOLO using Javascript Canvas

[ZDoom TEXTCOLO](https://zdoom.org/wiki/TEXTCOLO)  
[ZDoom Text Colors](https://zdoom.org/wiki/Print#Colors)  
[Zandronum Text Colors](https://zandronum.com/forum/viewtopic.php?p=46018#p46018)

## To-Do list
- [x] Re-organize the images and JSON on a /data/ folder to fetch externally
- [x] Don't use Base64 images hardcoded in the code
- [x] Don't use .js files with dict to load the JSONs
- [x] Make the ZanFont class a little better to handle with a instance
- [x] Put `const` on variables instead of `var` or `let` where possible
- [x] Add to ZanFont the possibility to read custom URLs when initializing
- [ ] Rewrite/refactor `zanfont.js` to be less awful
- [ ] Allow to use your own fonts (only possible via custom URLs loading)
- [ ] Create your own `font-coords.json` via a Python script (I don't know how did I generated the default font-coords.json... 😶)

## Demo example
You can [check the live preview](https://www.claudiobo.com/zandronum-font/)  
or you can load **`./src/index.html`** into your browser.

## Implementation example
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