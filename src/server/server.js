import http    from 'http';
import express from 'express';
import path    from 'path';
const templateFile = path.join(process.cwd(), 'src/server/template.ejs');

const PROD = process.env.NODE_ENV === 'production';
const PORT = PROD ? 8080 : 3000;
const app = express();

app.use(express.static('build/client'));
app.get('/', (req, res) => {
  res.status(200).render(templateFile);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`${req.url} not Found`);
  err.status = 404;
  next(err);
});

// development error handler
if (!PROD) {
  app.use((err, req, res, next) => {
    console.error('error : ', err)
    res.status(err.status || 500);
  });
}

// production error handler
app.use((err, req, res, next) => {
  console.error('error : ', err.message)
  res.status(err.status || 500);
});

const server = http.createServer(app);

server.listen(PORT, function() {
   console.log(`Listening on localhost${PORT}`);
});
