const responseHandler = (res, statusCode, message, data) => {
	if(data) {
		res
		.status(statusCode)
		.json({
			code: statusCode,
			message: message,
			data,
		});
	} else if(data == false){
		res
		.status(statusCode)
		.json({
			code: statusCode,
			message: message
		});
	}

}

module.exports = {
	responseHandler,
}