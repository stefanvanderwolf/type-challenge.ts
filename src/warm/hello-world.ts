import type { Equal, Expect, NotAny } from '@type-challenges/utils'

export type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

export type HelloWorld = string
