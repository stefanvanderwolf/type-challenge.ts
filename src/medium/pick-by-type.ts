import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean, isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

export type PickByType<T extends object, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
};
