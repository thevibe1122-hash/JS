export const pi = 3.14159

export function getCircumference(radius) {
    return (2*pi*radius).toFixed(2)
}

export function getArea(radius) {
    return (pi*radius*radius).toFixed(2)
}

export function getVolume(radius) {
    return ((4/3)*pi*radius*radius*radius).toFixed(2)
}