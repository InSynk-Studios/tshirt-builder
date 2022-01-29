/**
 * For personal reference,
 * (Reselect) Selectors, in React, are very much similar to getters in Vuex.
 * You can use these selectors to get data from the state,
 * and you can do any kind of filtering/modification of that data.
 */
 import { get } from 'lodash'
import { createSelector } from 'reselect'

const canvas = state => get(state, 'fabric.canvas')
export const canvasSelector = createSelector(canvas, c => c)

const images = state => get(state, 'fabric.images')
export const imagesSelector = createSelector(images, i => i)

const tshirtColor = state => get(state, 'fabric.tshirtColor')
export const tshirtColorSelector = createSelector(tshirtColor, c => c)