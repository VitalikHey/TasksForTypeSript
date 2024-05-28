// Задание 1

export type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// Задание 2

export type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

// Задание 3

// Пока что ещё в разработке
