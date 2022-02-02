let name = 'Adrian'
const pathName = '/'
const search = `?name=${name}`

const myURL =
  new URL(`http://localhost:8080${pathName}${search}`);


module.exports = myURL