import type { Equal, Expect } from '@type-challenges/utils'

export type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
]

type error = If<null, 'a', 'b'>

export type If<C, T, F> = C extends true
  ? T
  : F;
