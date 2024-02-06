export type AnyFunc<T = any> = (...args: any[]) => T

export type PureObject<T = any> = Record<string | number | symbol, T>

export type PureListObject<T = any> = PureObject<T[]>