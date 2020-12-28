function palindrome(str) {
  let newStr = str.replace(/\W|_/g, "").toLowerCase();
  let reversedStr = newStr.split("").reverse().join("");

  if (newStr != reversedStr) {
    return false;
  }
  return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
