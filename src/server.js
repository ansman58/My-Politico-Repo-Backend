const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv-safe');
const multer = require('multer');
const app = express();
const userRouter = require('./routers/userRouters');
const partyRouter = require('./routers/partyRouters');
const isAuth = require("./utils/isAuth");
const officeRouter = require('./routers/officeRouters');
const candidateRouter = require('./routers/candidateRouter');
const voteRouter = require('./routers/voteRouter');

// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/testdb')

dotenv.config();

const PORT = process.env.PORT || 3000;

const upload = multer({ dest: "upload/" });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/users', upload.single('file'), userRouter);
app.use('/party', upload.single('file'), isAuth, partyRouter);
app.use('/office', isAuth, officeRouter);
app.use('/candidate', isAuth, candidateRouter);
app.use('/vote', isAuth, voteRouter)

app.get('/', (req, res)  => {res.send(`Hello There`)})



app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});