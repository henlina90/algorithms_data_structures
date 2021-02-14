function telephoneCheck(str) {
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) return false;
  if (str.indexOf(")") - str.indexOf("(") >= 5) return false;
  if (str[0] === "-") return false;

  let newPhone = str.replace(/-| /g, "");

  if (newPhone.indexOf("(") < newPhone.indexOf(")")) {
    newPhone = newPhone.replace(/\(|\)/g, "");
  }

  if (newPhone.length === 10) {
    return true;
  } else if (newPhone.length === 11 && newPhone [0] === "1") {
    return true;
  }
  return false;
}

let result = telephoneCheck("555-555-5555");