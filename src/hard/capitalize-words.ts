import type { Equal, Expect } from '@type-challenges/utils'
import type { MyCapitalize } from '../medium/capitalize'
import type { IsAlphabet } from '../medium/is-alphabet'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]

type CapitalizeWords<S extends string> = _CapitalizeWords<S>
type _CapitalizeWords<
  S extends string,
  Word extends string = ''
> = 
  S extends `${infer Character}${infer Tail}`
    ? IsAlphabet<Character> extends true
      ? _CapitalizeWords<Tail, `${Word}${Character}`>
      : `${MyCapitalize<`${Word}${Character}`>}${_CapitalizeWords<Tail>}`
    : MyCapitalize<Word>
