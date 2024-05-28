// Задание 1

export type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// Задание 2

export type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

// Задание 3

// Честно говоря не особо понимаю концепцию push в типах, тоесть у нас есть какой-то тип м применяем к нему push,
// и у типа появляются новые свойства? Я сделал вот это вот, но по факту оно просто добавит к каждому типу | P и всё,
// уверен что это не то, что нужно

export type push<V, U extends V> = {
    [P in keyof V]: [V | U]
}
