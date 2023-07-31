

export type ErrorMessages<T> = { [K in keyof T]: string[] }