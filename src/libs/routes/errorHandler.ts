export default function errorHandler(err, req, res, next) {
    console.log('inside errorHandler');
    const status = err[0].status || 500;
    const message = err[0].message || 'error';
    const error = err[0].error || 'Not Found';
    const timestamp = new Date();
    next(error);
}
