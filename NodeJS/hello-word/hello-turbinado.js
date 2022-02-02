const http = require('http')
const fs = require('fs')

const myUrlApiLegacy = require('../module-url/apiLegacy.js')
const myUrlApiWhatWG = require('../module-url/apiWhatWG.js')
console.log(myUrlApiLegacy.href)
console.log(myUrlApiWhatWG.href)

function callBackServer(req, res) {
    let name = require('url').parse(req.url,true).query.name
    console.log(req.url)

    if(name === undefined) name = 'Word'

    if(name === 'burningbird') {
        const file = 'phoenix5a.png'

        fs.stat(file, (err, stat) => {

            if(err) {
                console.error(err)
                res.writeHead(200, {'Content-type': 'text/plain'})
                res.end("Sorry, burningbird isn's around right now \n")

            }else {
                const img = fs.readFileSync(file)

                res.contentType = 'image/png'
                res.contentLength = stat.size

                res.end(img, 'binary')
            }

        })
    }else {
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end(`Hello ${name} \n`)
    }

}

http.createServer(callBackServer).listen(8080)

console.log('Server running at port 8080/');