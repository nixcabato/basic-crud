const { responseHandler } = require('./methods');
const client = require('../../config/elasticsearch');

module.exports.deleteProduct = (req, res) => {
	const productId = req.params.productId

	if(productId) {

		client.delete({
			id: productId,
			index: 'products'
		}, (err, resp, status) => {
			if (err) responseHandler(res, status, 'Request incomplete. Try again.', false)
			responseHandler(res, status, 'Successfully deleted a product.', false)
		});

	} else {
		responseHandler(res, 400, 'Missing params', false)
	}
}