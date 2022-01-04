const printArea = document.getElementById('printarea');
const printBtn = document.getElementById('printbtn');

function getFromGitHub() {
    const userName = 'patarkf';
    const url = 'https://api.github.com/users';

    fetch(`${url}/${userName}/repos`)
        .then(reposResponse => {
            return reposResponse.json();
        })
        .then(userRepos => {
            console.log(userRepos)
        })
        .catch(err => {
            console.log(err);
        });
}
function returnPromise() {
    return navigator.clipboard.readText();
}

// printBtn.addEventListener('click', async () => {
//     let result = await returnPromise(); // get the result of promise
//     console.log(result)
//     render(printArea, result)
// })

printBtn.addEventListener('click', async () => {
    let result = await navigator.clipboard.readText(); // get the result of promise
    console.log(result)
    render(printArea, result)
})

function render(printArea, text) {
    printArea.textContent = text;
}

// Basic Syntax

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// Promise take one parameter, which is a function that takes two parameter
p.then((message) => { // take a method (single parameter) 
    console.log(`This is in the "then" ${message}`)
}).catch((message) => {
    console.log(`This is in the "catch" ${message}`)
})

// Promise is a cleaner way to do callback
// Good for long process => no need to wait


// References

// function getClipBoard() {
//     navigator.clipboard.readText()
//         .then(text => {
//             console.log(text);
//             return text;
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }

// function returnPromiseGitHub() {
//     const userName = 'patarkf';
//     const url = 'https://api.github.com/users';
//     return fetch(`${url}/${userName}/repos`);
// }

// printBtn.addEventListener('click', async () => {
//     let response_a = returnPromiseGitHub();
//     console.log(response_a); // return promise of response
//     let response_b = await returnPromiseGitHub();
//     console.log(response_b); // return the response
//     let result_a = response_b.json();
//     console.log(result_a) // return promise of array
//     let result = await response_b.json()
//     console.log(result) // return array
//     render(printArea, result)
// })