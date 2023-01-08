type Includes<T extends readonly any[], U> = T extends [infer K, ...infer L]
	? (<T>() => T extends K ? 0 : 1) extends <T>() => T extends U ? 0 : 1 ? true : Includes<L, U>
	: false