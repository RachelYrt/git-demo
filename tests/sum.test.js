import { describe, it, expect } from 'vitest'
import { sum } from '../src/sum.js'
describe('sum', () => {
  it('adds', () => { expect(sum(1,2)).toBe(3) })
})
