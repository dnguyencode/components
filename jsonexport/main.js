let MyArray = [1, 2, 3, 4, 6, 7];
let _myArray = JSON.stringify(MyArray, null, 4); //indentation in json format, human readable

function handleClick() {
    exportToJsonFile(_myArray);
}

function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}