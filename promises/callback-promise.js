const userLeft = false
const userWatchingCatMeme = true

function watchTutorial(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'userLeft',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'user Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}
watchTutorial((message) => {
    console.log('Success ' + message)
},
    (err) => {
        console.log(err.name + ' ' + err.message)
    }
)
// 2 functions defined inline First take a string, second takes an object

const recordVideoOne = new Promise((resolve, reject) => {
    () => { // without arrow function definition code runs right away
        setTimeout(
            resolve('Video 1 Recorded'),
            3000
        )
    }
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})