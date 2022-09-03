const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let array = [10, 4, 17, 26, 33, 16]
    let arr = shuffleArray(array)

    test('shuffleArray should not be equal to original array', () => {
        expect(shuffleArray(arr)).not.toEqual(array)
    })

    test('shuffleArray should have same length as original array', () => {
        expect(shuffleArray(arr).length).toEqual(array.length)
    })
})