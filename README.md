# Zandronum Font Previewer
A tool for showing Doom font using special Zandronum's TEXTCOLOR using Javascript Canvas

[ZDoom Text Colors](https://zdoom.org/wiki/Print#Colors)  
[Zandronum Text Colors](https://zandronum.com/forum/viewtopic.php?p=46018#p46018)

## Demo example:
You can load **./src/index.html** into your browser.

## Implementation example:
```javascript
/* First, after the closing </body> tag you need to import zanfont.js, zanfont_coords.js and zanfont_colors.js */
<script src="zanfont.js"></script>
<script src="zanfont_coords.js"></script>
<script src="zanfont_colors.js"></script>

/* Then you need to set a id to a img element where you want the font to be rendered */
<img id="place_text_here">

/* Then you call the function */
createPNG("place_text_here", "Wow some \c[x1]tests!");
```

And boila!