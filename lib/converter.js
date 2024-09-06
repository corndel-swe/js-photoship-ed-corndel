import Jimp from 'jimp'
import { fileURLToPath } from 'url'

function getPath(filename) {
  const uri = new URL(`../img/${filename}`, import.meta.url)
  return fileURLToPath(uri)
}

async function getImgData(filename) {
  try {
    const img = await Jimp.read(getPath(filename))
    return img
  } catch (err) {
    console.error(err)
  }
}

export async function convertRGB(filename, converter) {
  const img = await getImgData(filename)
  const pixels = Array.from(img.bitmap.data)

  for (let i = 0; i <= pixels.length - 4; i += 4) {
    const [r, g, b] = converter(pixels.slice(i, i + 3))

    img.bitmap.data[i] = r
    img.bitmap.data[i + 1] = g
    img.bitmap.data[i + 2] = b
  }
  filename = `${filename.replace('.jpg', '')}-output.jpg`
  console.log(`Great! Output is saved in img/${filename}`)
  return await img.writeAsync(getPath(filename))
  // return await img.writeAsync(getPath(`${filename}-output.jpg`))
}
