const { application } = require('express')
const express = require('express')
const server = express()
const PORT = 8080


server.use(express.static(__dirname + '/public/math'))


server.listen(PORT, () => {
    console.log('listning on 8080')
})           