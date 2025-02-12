import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]

type Union<U> = U extends unknown[] ? U : [U]

export type Without<T, U> = 
  T extends [infer First, ...infer Tail]
    ? First extends Union<U>[number]
      ? Without<Tail, U>
      : [First, ...Without<Tail, U>]
    : T
