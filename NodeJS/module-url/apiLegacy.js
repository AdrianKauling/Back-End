const url = require('url')



let name = 'Adrian'
const pathName = '/'
const search = `?name=${name}`

const myUrl = url.parse(`http://localhost:8080${pathName}${search}`)

module.exports = myUrl