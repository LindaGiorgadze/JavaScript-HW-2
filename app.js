
// Task 1

let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam']


// First Try
for ( let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
        // console.log(words[i].toUpperCase())
    } else {
        // console.log(words[i])
    }
}

// Second Try :/
function toUpper (value, index, array) {
    if (index % 2 !==0 ) {
        // console.log(value.toUpperCase())
    } else {
        // console.log(value)
    }
}

words.forEach(toUpper)

// Third Try (მესამე და სამართალი)
let newArray = words.reduce((acc, cur, currentIndex ) => {
    if (currentIndex % 2 !==0) {
        return acc.concat(cur.toUpperCase(), ' ')
    } else {
        return acc.concat(cur, ' ')
    }
},'')

// console.log(newArray)




// Task 2

let words2 = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']


// First Try
for ( let i = 0; i < words2.length; i++) {
    let word = words2[i];
    for ( let x = 0; x < word.length; x++) {
        if (word[x] == 'm' || word[x] == 'M') {
            // console.log(word)
        }
    }
} //ვიცი ამის ნაკლი, მასივად არ გამოაქვს

// Second Try
let containM = words2.filter ( (value) => {
    for (let i = 0; i < value.length; i++) {
        if (value[i] == 'm' || value[i] == 'M') {
            return true
        }
    }
})
// console.log(containM)



// Task 3

let containM3 = (array, letter) => array.filter (word => word.toLowerCase().indexOf(letter.toLowerCase()) !== -1)
// console.log(containM3(words2, 'M'))




// Task 4

let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing'];

let newArray2 = items.map( (item) => {
    if ( typeof(item) == "number") {
        return item * item;
    }
    else if ( typeof(item) == "string") {
        return item.toUpperCase()
    }
    else {
        return item
    }
});

// console.log(newArray2)




// Task 5

let users = [
    {name: 'giorgi', age: 16},
    {name: 'levani', age: 90},
    {name: 'nino', age: 30},
    {name: 'otari', age: 11},
    {name: 'mari', age: 28}
  ]

  let namesArray = users
    .filter ( (array) => {
        let { age } = array;
        return age > 18;
    })
    .map ( (array) => {
        let { name } = array;
        return name
    })

  console.log (namesArray)