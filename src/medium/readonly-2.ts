import type { Alike, Expect } from '@type-challenges/utils'
import type { MyReadonly } from '../easy/readonly'
import type { MyPick } from '../easy/pick';
import type { MyOmit } from './omit';

export type K = Readonly<Todo1>;
export type J = MyReadonly2<Todo1, "title">;

export type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

// Clever solution found in solution thread.
export type MyReadonly2<T, K extends keyof T = keyof T> =
  MyOmit<T, K> & MyReadonly<MyPick<T, K>>;
