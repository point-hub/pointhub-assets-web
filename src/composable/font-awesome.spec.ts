import { expect, it } from 'vitest'
import { useFontAwesome } from './font-awesome'

it('font awesome script is exists', () => {
  useFontAwesome()
  const scripts = document.getElementsByTagName('script')
  let isExists = false
  for (let i = scripts.length; i--; ) {
    if (scripts[i].src == 'https://kit.fontawesome.com/1234.js') {
      isExists = true
    }
  }
  expect(isExists).toBeTruthy()
})
