const { parseFileToArr, createMessageObj } = require("./functions");



function parseFileContent(filePath) {
  const lines = parseFileToArr(filePath);
  const arr = [];

  for (let i = 0; i < lines.length; i += 2) {
    const date = lines[i];
    const messageContent = lines[i + 1];
    const result = createMessageObj(date, messageContent)

    if (result){
      arr.push(result);
    }
  }
  return arr

}


const result = parseFileContent("test.txt");

console.log(result);



