import { parseFileToArr, createMessageObj, isSamesender} from './functions'



function parseFileContent(filePath) {
  const lines = parseFileToArr(filePath);
  const arr = [];
let duble=0;
  for (let i = 0; i < lines.length; i += 2) {
    const date = lines[i];
    const messageContent = lines[i + 1];
    let result = createMessageObj(date, messageContent)

    if (result){
      
      // console.log(result.isQuestion);
      if(isSamesender(result,lines[i+3])){
        duble++; 
        i+=2
        const date = lines[i];
         const messageContent = lines[i + 1];
         createMessageObj(date, messageContent,result)
         console.log("result",result);
        
      
       }
      
      
      arr.push(result);
    }

  }
  console.log(duble);
  return arr

}


const result = parseFileContent("bigTest.txt");

// console.log(result);



