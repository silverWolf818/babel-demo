export function flatFn(array) {
    return array.flat()
}

export function flatMap(array) {
    return array.flatMap(x => [x * 2])
}