const printArea = document.getElementById('printarea');
const printBtn = document.getElementById('printbtn');

printBtn.addEventListener('click', async () => {
    let text = await navigator.clipboard.readText();
    console.log(text);
    printArea.textContent = text;
})

