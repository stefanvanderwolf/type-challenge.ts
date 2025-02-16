import type { Equal, Expect } from '@type-challenges/utils'
import type { MyAwaited } from '../easy/awaited'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

export type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]

declare function PromiseAll<const T extends unknown[]>(values: T): Promise<{
  [K in keyof T]: MyAwaited<T[K]>
}>
