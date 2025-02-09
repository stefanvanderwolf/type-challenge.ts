import type { Equal, Expect } from '@type-challenges/utils'
import type { Includes } from '../easy/includes';

type cases = [
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'z'>, true>>,
  Expect<Equal<IsAlphabet<'9'>, false>>,
  Expect<Equal<IsAlphabet<'!'>, false>>,
  Expect<Equal<IsAlphabet<'😂'>, false>>,
  Expect<Equal<IsAlphabet<''>, false>>,
]

// Fun solution in thread. Meaning a != A but UpperCase<1> and Lowercase<1> are
// the same so no alpabet letter.
// type IsAlphabet<S extends string> = Uppercase<S> extends Lowercase<S> ? false : true

export type IsAlphabet<S extends string> =
  Includes<[
    "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h",
    "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p",
    "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x",
    "Y", "y", "Z", "z"
  ], S>

