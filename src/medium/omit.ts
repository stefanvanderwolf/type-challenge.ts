import type { Equal, Expect } from '@type-challenges/utils'
import type { MyPick } from '../easy/pick'
import type { MyExclude } from '../easy/exclude'

export type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
  Expect<Equal<Expected3, MyOmit<Todo1, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

interface Expected3 {
  readonly title: string
}

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;
