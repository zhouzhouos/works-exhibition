from PIL import Image
import numpy as np


im = Image.open('./hanhan/firework-top.png')
arr = np.array(im)

red_color = (255, 79, 75,255)

for i in range(arr.shape[0]):
    for j in range(arr.shape[1]):
        r,g,b,a = arr[i,j]
        if a!=0:
            arr[i,j]=red_color


im = Image.fromarray(arr)
# im.show()
im.save('./hanhan/firework-top--all-red.png')