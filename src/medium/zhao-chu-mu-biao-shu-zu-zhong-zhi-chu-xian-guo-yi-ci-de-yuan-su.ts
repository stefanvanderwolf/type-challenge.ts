import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<FindEles<[1, 2, number]>, [1, 2, number]>>,
  Expect<Equal<FindEles<[1, 2, number, number]>, [1, 2]>>,
]

type Count<List, Element, Elements extends unknown[] = []> = 
  List extends [infer Head, ...infer Tail]
    ? [Head] extends [Element]
      ? [Element] extends [Head]
        ? Count<Tail, Element, [...Elements, Element]>
        : Count<Tail, Element, Elements>
      : Count<Tail, Element, Elements>
    : Elements["length"]

export type FindEles<
  T extends unknown[],
  O extends unknown[] = T,
  Uniques extends unknown[] = []
> = 
  T extends [infer Head, ...infer Tail]
    ? Count<O, Head> extends 1
      ? FindEles<Tail, O, [...Uniques, Head]>
      : FindEles<Tail, O, Uniques>
    : Uniques


