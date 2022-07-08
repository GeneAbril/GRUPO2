const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const indexRouter = require('./routes/index');


app.use(cors())
app.use(express.json());

app.use('/', indexRouter)

app.listen(port, () => {
    console.log("server on in port", port);
})