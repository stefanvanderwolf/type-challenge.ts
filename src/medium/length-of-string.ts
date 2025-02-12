import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

type LengthOfString<S extends string, Len extends string[] = []> =
  S extends `${string}${infer Rest}`
    ? LengthOfString<Rest, [...Len, string]>
    : Len["length"]
