import type { Equal, Expect } from '@type-challenges/utils'

export type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]

export type Chunk<T extends unknown[], Amount extends number> = Chunker<T, Amount>;
type Chunker<
  Elements extends unknown[],
  Length extends number,
  Chunk extends unknown[] = []
> =
  Chunk["length"] extends Length
    ? [Chunk, ...Chunker<Elements, Length, []>]
    : Elements extends [infer Head, ...infer Tail]
      ? Chunker<Tail, Length, [...Chunk, Head]>
      : Chunk extends []
        ? Chunk
        : [Chunk]

