// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const cors = require('cors')
// const multer = require('multer')
// const upload = multer({ dest: './public/data/uploads/' })

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const projetsRouter = require('./routes/projet');
// const commentsRouter = require('./routes/comment.js');
// const searchRouter = require('./routes/search.js');
// const contributionRouter = require('./routes/contribution.js');

// const app = express();
// const db = require('./db')

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/projets', projetsRouter);
// app.use('/comment', commentsRouter);
// app.use('/search', searchRouter);
// app.use('/contribution', contributionRouter);


// app.use(express.static(path.join(__dirname, "ImageUpload")))
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



// module.exports = app;
