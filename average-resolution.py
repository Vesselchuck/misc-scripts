import os
import PIL
from PIL import Image

widths = []
heights = []

dir_path = r"D:\YandexDisk\Boosty\Pathfinder\Ползучая смерть\1. Deskew" # Adding 'r' to make the string a raw string

for img_name in os.listdir(dir_path):
    if img_name.endswith(".jpg") or img_name.endswith(".png") or img_name.endswith(".jpeg") or img_name.endswith(".bmp"):
        img_path = os.path.join(dir_path, img_name) # Adding img_name to the path
        im = Image.open(img_path)
        widths.append(im.size[0])
        heights.append(im.size[1])

AVG_WIDTH = round(sum(widths)/len(widths))
AVG_HEIGHT = round(sum(heights)/len(heights))

print(f"Average Width: {AVG_WIDTH}")
print(f"Average Height: {AVG_HEIGHT}")