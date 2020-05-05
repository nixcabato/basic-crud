const { responseHandler } = require('./methods');
const client = require('../../config/elasticsearch');

module.exports.deleteSeller = (req, res) => {
	const sellerId = req.params.sellerId

	if(sellerId) {

		client.delete({
			id: sellerId,
			index: 'sellers'
		}, (err, resp, status) => {
			if (err) responseHandler(res, status, 'Request incomplete. Try again.', false)
			responseHandler(res, status, 'Successfully deleted a seller.', false)
		});

	} else {
		responseHandler(res, 400, 'Missing params', false)
	}
}