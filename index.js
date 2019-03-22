const express = require('express')
const Datastore = require('nedb')
const db = new Datastore({
        filename: 'mydb.db',
        autoload: true
      })
const app = express()
app.use('/',express.static('fe/dist'))
app.get(
    '/listall',
    (req, res) => {
        res.send('Hello World!')
    }
)

app.get(
    '/cica/:id',
    (req,res) => {
        db.insert({
            param: req.params.id
        })
        res.send('Rögzítve: ' + req.params.id)
    }
)

app.listen(3000)