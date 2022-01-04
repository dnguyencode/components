// Callback Overview

function makeUppercase(value) {
    console.log(value.toUpperCase())
}

function reverseString(value) {
    console.log(value.split('').reverse().join(''))
}

function handleName(name, cb) { // takes two param, the value and the callback function
    const fullName = `${name} smith`
    cb(fullName) // invoke callback function inside the function
    // more logic
}

handleName('peter', makeUppercase)
// handleName('peter', makeUppercase()) // Wrong syntax, should not invoke, only pass in reference
handleName('peter', reverseString)

// Passing in direct function
handleName('susan', function (value) { // does not invoke
    console.log(value)
})

// Different syntax
handleName('susan', (value) => { console.log(value) })

const printBtn = document.getElementById('printbtn');

printBtn.addEventListener('click', handleName)