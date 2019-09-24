export default function errorHandler(err, req, res, next) {
    console.log('inside errorHandler');
    const { error, status, message } = err;
    const timestamp: Date = new Date();
    res.status(status).send({
        error: error || 'Not Found',
        message: message || 'error',
        status: status || 500,
        timestamp,
    });
}
