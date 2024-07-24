const fs = require("fs");
const { trashMessage } = require("./functions");

function parseFileContent(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const regex = /(\d{1,2}\/\d{1,2}\/\d{2,4}, \d{2}:\d{2}) - /g;
  const lines = fileContent.split(regex).filter(Boolean);
  const arr = [];

  // for (let i = 0; i < lines.length; i+=2) {

  //     const date = lines[i];
  //     const messageContent = lines[i + 1];
  //     const regex = /([^:]+):\s*/;
  //     const match = messageContent.match(regex);

    

  //   if (match) {
  //     const sender = match[1];
  //     const message = messageContent.slice(match[0].length);

  //     if (trashMessage(message)) break;

  //     const isQuestion = sender !== 'הרב ברוך אפרתי, (טאטע)';

  //     arr.push({ date, sender, message, isQuestion });

  //   }
  // }

  // return arr;

  return lines.reduce((arr, _, i, arrRef) => {
    if (i % 2 === 0) {
      const date = arrRef[i];
      const messageContent = arrRef[i + 1];
      const regex = /([^:]+):\s*/;
      const match = messageContent.match(regex);
      if (match) {
        const sender = match[1];
        const message = messageContent.slice(match[0].length);

        if (trashMessage(message)) {
          return arr;
        }

        const isQuestion = sender !== 'הרב ברוך אפרתי, (טאטע)';
        arr.push({ date, sender, message, isQuestion });
      }
    }
    return arr;
  }, []);
}

const result = parseFileContent("test.txt");

console.log(result);



