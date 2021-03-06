/**
 * For personal reference,
 * Actions in Redux are almost entirely similar to actions in Vuex.
 * In this file, we are just declaring the actions.
 */

// CANVAS
export function canvasInitialized(canvas) {
  return {
    type: 'CANVAS_INITIALIZED',
    canvas
  }
}

export function imagePushed(image) {
  return {
    type: 'IMAGE_PUSHED',
    image
  }
}

export function tshirtColorChanged(tshirtColor) {
  return {
    type: 'TSHIRT_COLOR_CHANGED',
    tshirtColor
  }
}