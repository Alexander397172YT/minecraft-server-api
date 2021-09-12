const r = require('request')
const h = (ip, port = 25565, ebanistika) => {
    let url = `https://mcapi.us/server/status?ip=${ip}&port=${port}`
    r(url, {json: true}, (err, body) => {
        if(err) return ebanistika(err)
        return ebanistika(body)
    })
}
module.exports = h
//alexander39 top