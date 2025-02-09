import type { Alike, Expect } from '@type-challenges/utils'
import type { MyOmit } from './omit';

export type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get()

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}

export type Chainable<O extends Record<PropertyKey, unknown> = {}> = {
  option<
    Key extends PropertyKey,
    Value,
  >(
    key: Key extends keyof O ? never : Key,
    value: Value
  ): Chainable<MyOmit<O, Key> & Record<Key, Value>>;

  get(): O;
}
