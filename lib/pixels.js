export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0
  return rgb
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1] = 0
  return rgb
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb[2] = 0
  return rgb
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
  return rgb.map(colour => 255 - colour)
}

export function grayScale(rgb) {
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7]
  return rgb.fill(rgb.reduce((cum, next) => cum + next, 0) / rgb.length)
}

export function blackAndWhite(rgb) {
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255
  return (rgb.reduce((cum, next) => cum + next, 0) / rgb.length) < 255/2 ? rgb.fill(0) : rgb.fill(255)
}

export function colorChannel(rgb, color) {
  // TODO: get the color channel
  // if color is 'r', leave red alone and set green and blue to 0
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [0, 43, 0]

  // as a note, I'd probably throw a try > except in here for proper error handling, but wanted to get it on one line, so just returning null
  color === 'r' ? rgb.splice(1, 2, 0, 0) : (color === 'g' ? rgb.splice(0, 3, 0, rgb[1] ,0) : (color === 'b' ? rgb.splice(0, 3, 0, 0, rgb[2]) : null))
  return rgb
}

export function sepia(rgb) {
  // TODO: google "sepia tone rgb formula" and implement it
  const r = 0.393 * rgb[0] + 0.769 * rgb[1] + 0.189 * rgb[2] > 255 ? 255: 0.393 * rgb[0] + 0.769 * rgb[1] + 0.189 * rgb[2]
  const g = 0.349 * rgb[0] + 0.686 * rgb[1] + 0.168 * rgb[2] > 255 ? 255 : 0.349 * rgb[0] + 0.686 * rgb[1] + 0.168 * rgb[2]
  const b = 0.272 * rgb[0] + 0.534 * rgb[1] + 0.131 * rgb[2] > 255 ? 255 : 0.272 * rgb[0] + 0.534 * rgb[1] + 0.131 * rgb[2]
  return [r, g, b]  
}

export function adjustBrightness(rgb, brightness) {
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
  // const r = rgb[0] + brightness < 255 ? rgb[0] + brightness : 255
  // const g = rgb[1] + brightness < 255 ? rgb[1] + brightness : 255
  // const b = rgb[2] + brightness < 255 ? rgb[2] + brightness : 255
  let r = rgb[0] + brightness < 255 ? rgb[0] + brightness : 255
  let g = rgb[1] + brightness < 255 ? rgb[1] + brightness : 255
  let b = rgb[2] + brightness < 255 ? rgb[2] + brightness : 255
  return [r, g, b]
}
