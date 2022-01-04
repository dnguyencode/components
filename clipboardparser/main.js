const printArea = document.getElementById('printarea');
const printBtn = document.getElementById('printbtn');

// First Syntax using async / await
// printBtn.addEventListener('click', async () => {
//     let text = await navigator.clipboard.readText();
//     console.log(text);
//     printArea.textContent = text;
// })

// Second syntax using promises (doesn't need async kw)
printBtn.addEventListener('click', () => {
    navigator.clipboard.readText()
        .then((text) => {
            return (
                transformUpperCase(text)
            );
        }).then((text) => {
            return reverseString(text);
        }).then((text) => {
            return doubleAtRandom(text, 4, 10);
        }).then((text) => {
            return reverseAtSpace(text);
        }).then((text) => {
            return removeExtraSpace(text);
        }).then((text) => {
            return reverseAtBraces(text);
        }).then((text) => {
            return removeAtRandom(text, 3, 9);
        }).then((text) => {
            return reverseAtSpace(text);
        }).then((text) => {
            return removeExtraSpace(text);
        }).then((text) => {
            return reverseAtPt(text);
        }).then((text) => {
            return doubleAtRandom(text, 10, 20);
        }).then((text) => {
            return reverseAtSpace(text);
        }).then((text) => {
            return removeExtraSpace(text);
        }).then((text) => {
            return removeAtRandom(text, 3, 6);
        }).then((text) => {
            return reverseAtSpace(text);
        }).then((text) => {
            return removeExtraSpace(text);
        }).then((text) => {
            return reverseString(text);
        }).then((text) => {
            console.log(text.split(/\s/).join(''))
        })
})

const transformUpperCase = (text) => {
    return text.toUpperCase()
}

const reverseString = (text) => {
    return text.split('').reverse().join('')
}

const reverseAtSpace = (text) => {
    return text.split(' ').reverse().join(' ')
}

const reverseAtBraces = (text) => {
    return text.split('{').reverse().join('{')
}

const reverseAtPt = (text) => {
    return text.split(')').reverse().join(')')
}

const doubleAtRandom = (text, min, max) => {
    textArray = text.split('')
    for (i = 0; i < textArray.length; i++) {
        if (i % getRandomInt(min, max) == 0) {
            newText = textArray[i].concat(textArray[i]).concat('')
            textArray[i] = newText
        }
    } return textArray.join('');
}

const removeAtRandom = (text, min, max) => {
    textArray = text.split('')
    for (i = 0; i < textArray.length; i++) {
        if (i % getRandomInt(min, max) == 0) {
            textArray[i] = ' '
        }
    } return textArray.join('');
}

const removeExtraSpace = (text) => {
    return text.replace(/ +(?= )/g, '')
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
