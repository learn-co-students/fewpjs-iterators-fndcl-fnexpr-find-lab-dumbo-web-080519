const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrOfDataObjs) {
  let foundDataObj = arrOfDataObjs.find(dataObj => dataObj.result === "W");
  return foundDataObj ? foundDataObj.year : undefined;
}
