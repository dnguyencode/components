navigator.clipboard.readText()
    .then(text => {
        console.log('Pasted content: ', text);
    })
    .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });