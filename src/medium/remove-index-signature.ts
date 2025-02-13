import type { Equal, Expect } from '@type-challenges/utils'
import type { MyExclude } from '../easy/exclude'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void, 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void, baz: string }>>,
]

type AsIndexSignature<Key, U = PropertyKey> = U extends Key ? Key : never
type RemoveIndexSignature<T extends Record<PropertyKey, unknown>> = {
  [Key in keyof T as MyExclude<Key, AsIndexSignature<Key>>]: T[Key]
}
