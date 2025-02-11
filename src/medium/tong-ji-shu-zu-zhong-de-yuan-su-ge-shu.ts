import type { Equal, Expect } from '@type-challenges/utils'
import type { IsNever } from './is-never'

type cases = [
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
    1: 1
    2: 1
    3: 1
    4: 1
    5: 1
  } >>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
    1: 2
    2: 2
    3: 2
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
    1: 3
    2: 3
    3: 2
    4: 3
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
    0: 1
    1: 1
    2: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
    'a': 1
    'b': 1
    'c': 1
    'd': 1
  }>>,
]

type Flatten<T> =
    T extends [infer Head, ...infer Rest]
      ? IsNever<Head> extends true
        ? Flatten<Rest>
        : Head extends unknown[]
          ? [...Flatten<Head>, ...Flatten<Rest>]
          : [Head, ...Flatten<Rest>]
      : T

type Count<List, Element, Elements extends unknown[] = []> = 
  List extends [infer Head, ...infer Tail]
    ? [Head] extends [Element]
      ? [Element] extends [Head]
        ? Count<Tail, Element, [...Elements, Element]>
        : Count<Tail, Element, Elements>
      : Count<Tail, Element, Elements>
    : Elements["length"]

type CountMap<T> = 
  T extends PropertyKey[]
    ?  { [P in T[number]]: Count<T, P> }
    : never

export type CountElementNumberToObject<T> = 
  T extends unknown[]
    ? CountMap<Flatten<T>>
    : never

