export default function errorHandler(err, req, res, next) {
    console.log('inside errorHandler');
    const { status, message, error} = err;
    const timestamp: Date = new Date();
    res.status(status).send({
        error: error || 'Not Found',
        message: message || 'Bad Request',
        status: status || 400,
        timestamp,
    });
}
