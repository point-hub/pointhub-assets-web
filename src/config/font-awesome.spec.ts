import { describe, expect, it } from 'vitest'
import { fontAwesomeKitUrl } from './font-awesome'

describe('font awesome config', () => {
  it('defined', () => {
    expect(fontAwesomeKitUrl).toBeDefined()
    expect(fontAwesomeKitUrl).toBeTypeOf('string')
  })
})
