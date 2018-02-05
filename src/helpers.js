function convertToURI(str) {
  return str.split(" ").join("+")
}

module.exports = convertToURI
