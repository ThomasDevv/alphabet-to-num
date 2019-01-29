/*
  @param ${string} val
  Converts alphabetic letters to their corresponding indexes.
*/

const convert = (val) => {
    if(typeof val !== 'string') return console.log('You must pass an alphabetic letter.')

    let results = []

    for(const element of val.toString().split('')) {
      let index = 0
      results.push(element.toLowerCase().charCodeAt(index) - 96)

      index++
    }

    return results.join(', ')
}

console.log(convert('bcda')) // returns 2, 3, 4, 1
