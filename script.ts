// Задание 1

export type Pick<T extends object, K extends keyof T> = {
    [P in K]: T[P];
}

// Задание 2

export type Readonly<T extends object> = {
    readonly [P in keyof T]: T[P]
}

// Задание 3

export type push<T extends any[], U> = [...T, U]
