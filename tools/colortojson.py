import json

textcolor = open('defaultcolors.txt').readlines()
newtextcolor = open('newtextcolors.txt').readlines()

output = {}

current_color_colorcode = None
current_color_properties = None

ignore_until_bracket = False

for line in textcolor+newtextcolor:
    if "//" in line or "\n" == line or "{" in line:
        continue
    line = " ".join(line.replace("\t", "").split())

    splitted_props = line.split(" ")
    if current_color_colorcode == None:
        current_color_colorcode = splitted_props[0]
        current_color_properties = []
    else:
        if "Console:" in line or "Flat:" in line:
            ignore_until_bracket = True
        elif not ignore_until_bracket:
            min_place = 0
            max_place = 256
            if len(splitted_props) == 4:
                min_place = int(splitted_props[2])
                max_place = int(splitted_props[3])
            gradient_array = [splitted_props[0],
                              splitted_props[1], min_place, max_place]
            current_color_properties.append(gradient_array)
        elif "}" in line:
            output[current_color_colorcode] = current_color_properties
            ignore_until_bracket = False
            current_color_colorcode = None
            current_color_properties = None

output_f = open("font_colors.json", "w").writelines(json.dumps(output))

# [
#     "a1": [
#         ["#fff", "#eee", 0, 128],
#         ["#fff", "#eee", 129, 256]
#     ]
# ]
