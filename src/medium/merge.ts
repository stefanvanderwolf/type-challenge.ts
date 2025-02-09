import type { Equal, Expect } from '@type-challenges/utils'
import type { MyOmit } from './omit'

export type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]

type Foo = {
  a: number
  b: string
}

type Bar = {
  b: number
  c: boolean
}

type Flatten<A> = {
  [P in keyof A]: A[P]
};

export type Merge<
  A extends Record<PropertyKey, unknown>, 
  B extends Record<PropertyKey, unknown>
> = Flatten<MyOmit<A, keyof B> & B>;
