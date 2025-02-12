import type { Equal, Expect } from '@type-challenges/utils'

type pop = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]

type push = [
  Expect<Equal<Push<[3, 2, 1], 0>, [3, 2, 1, 0]>>,
  Expect<Equal<Push<['a', 'b', 'c', 'd'], 'e'>, ['a', 'b', 'c', 'd', 'e']>>,
  Expect<Equal<Push<[], 1>, [1]>>,
]

type unshift = [
  Expect<Equal<Unshift<[3, 2, 1], 4>, [4, 3, 2, 1]>>,
  Expect<Equal<Unshift<['a', 'b', 'c', 'd'], '0'>, ['0', 'a', 'b', 'c', 'd']>>,
  Expect<Equal<Unshift<[], 1>, [1]>>,
]

type shift = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
  Expect<Equal<Shift<[]>, []>>,
]

export type Unshift<T extends unknown[], Element> =
  [Element, ...T]

export type Shift<T extends unknown[]> =
  T extends [unknown, ...infer Tail]
    ? Tail
    : []

export type Push<T extends unknown[], Element> =
  [...T, Element]

export type Pop<T extends unknown[]> =
  T extends [...infer Head, unknown]
    ? Head
    : []
