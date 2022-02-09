function captilize(str){
  let char = str[0]
  // console.log(char)
  let newChar = char.toUpperCase()
  // console.log(newChar)
  let newStr = str.slice(1)
  return newChar + newStr
}

function allCaps(str){
  let newStr = ""
  for(i in str){
    newStr = newStr + str[i].toUpperCase()
  }
  return newStr
}

function captilizeWords(str){
  let newStr = ""
  strArr = str.split(" ")
  for(i in strArr){
    newStr = newStr + strArr[i][0].toUpperCase() + strArr[i].slice(1) + " "
  }
  return newStr
}

function removeExtraSpace(str){
  let newStr = ""
  strArr = str.split(" ")
  // console.log((strArr))
  strArr = strArr.filter(function(str) {
    return /\S/.test(str);
  });
  newStr = strArr.join(" ")
  return newStr
}

function snakeCase(str){
  let newStr = ""
  str  = str.toLowerCase()
  str = removeExtraSpace(str)
  strArr = str.split(" ")
  newStr = strArr.join("_")
  return newStr
}

function camelCase(str){
  let newStr = ""
  str = removeExtraSpace(str)
  str = captilizeWords(str)
  strArr = str.split(" ")
  newStr = strArr.join("")
  let char = newStr[0]
  let newChar = char.toLowerCase()
  let camelcaseStr = newStr.slice(1)
  return newChar + camelcaseStr
}

function shift(str) {
  let newStr = str.slice(1)
  return newStr + str[0]
}

function makeHashTag(str){
  let newStr = ""
  str = str.toLowerCase()
  strArr = str.split(" ")
  for(i in strArr){
    strArr[i] = "#" + strArr[i]
  }
  if(strArr.length > 3){
    strArr = strArr.slice(0,2)
  }
  return strArr
}

function isEmpty(str){
  str.trim()
  for(i in str){
    if(str[i] != null){
      return true
    }
  }
  return false
}


// let printStr = captilize("hello")
// let printStr1 = allCaps("hello")
// let printStr2 = captilizeWords("hello world")
// let printStr3 = removeExtraSpace("   Hello    world!   ")
// let printStr4 = snakeCase(" what the heck ")
// let printStr5 = camelCase(" Camel Case")
// let printStr6 = shift("foo bar")
// let printStr7 = makeHashTag("Amazing bongo drums for sale")
// let printStr8 = isEmpty(" ")
// let printStr9 = isEmpty("dns")

// console.log(printStr)
// console.log(printStr1)
// console.log(printStr2)
// console.log(printStr3)
// console.log(printStr4)
// console.log(printStr5)
// console.log(printStr6)
// console.log(printStr7)
// console.log(printStr8)
// console.log(printStr9)