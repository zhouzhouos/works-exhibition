from PIL import Image
import numpy as np

f = './temp/text1.jpg'
im = Image.open(f)
arr_rbg = np.array(im)
arr_rbga = np.zeros([arr_rbg.shape[0], arr_rbg.shape[1], 4], dtype=np.uint8)
print(arr_rbg.shape, arr_rbga.shape)

for i in range(arr_rbg.shape[0]):
    for j in range(arr_rbg.shape[1]):
        r, g, b = arr_rbg[i, j]
        # if r+g+b > 300:
        #     arr_rbga[i, j] = (0, 0, 0, 0)
        if r < 50 and b < 50 and g < 50:
            arr_rbga[i, j] = (223, 118, 59, 255)
        else:
            arr_rbga[i, j] = (0, 0, 0, 0)

im = Image.fromarray(arr_rbga)
# im.show()
target = f.rsplit('.',1)[0]+'.png'
print(target)
im.save(target)
