export default function errorHandler(err, req, res, next) {
    console.log('inside errorHandler');
    const status = err.status || 500;
    const message = err.message || 'error';
    const error = err.error || 'Not Found';
    const timestamp = new Date();
    console.log(err);
    res.status(err.status).send({error, message, status, timestamp});
}
