const { v4: uuidv4 } = require('uuid');
const { responseHandler } = require('./methods');
const client = require('../../config/elasticsearch');

module.exports.addSeller = (req, res) => {
	const { 
		name, 
		productType, 
	} = req.body

	if(name && productType) {
		const sellerId = uuidv4();
		
		client.index({
			id: sellerId,
			index: 'sellers',
			body: {
				id: sellerId,
				name,
				productType,
			}
		}, (err, resp, status) => {
			if (err) responseHandler(res, status, err, false)
			responseHandler(res, status, 'Successfully added a seller.', false)
		});

	} else {
		responseHandler(res, 400, 'Missing params', false)
	}
}