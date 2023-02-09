import { describe, expect, it } from 'vitest'
import { name } from './app'

describe('app config', () => {
  it('defined', () => {
    expect(name).toBeDefined()
    expect(name).toBeTypeOf('string')
  })
})
