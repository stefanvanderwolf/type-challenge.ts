import type { Equal, Expect } from '@type-challenges/utils'

export type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

const tuple = [1] as const

// @ts-expect-error
type error = Concat<null, undefined>

export type Concat<T extends readonly unknown[], U extends readonly unknown[]> =
  [...T, ...U]; 
