function rot13(str) {
  let decodedResult = "";
  let alphabetEnd = 'ABCDEFGHIJKLM';
  let alphabetStart = 'NOPQRSTUVWXYZ';

  str.split("").forEach(function(letterToDecode, index) {
    let alphabetStartIndex = alphabetStart.indexOf(letterToDecode);
    let alphabetEndIndex = alphabetEnd.indexOf(letterToDecode);

    if (alphabetStartIndex >= 0) {
      decodedResult += alphabetEnd[alphabetStartIndex];
    } else if (alphabetEndIndex >= 0) {
      decodedResult += alphabetStart[alphabetEndIndex];
    } else {
      decodedResult += letterToDecode;
    }
  });
  return decodedResult;
}

let result = rot13("SERR PBQR PNZC");S