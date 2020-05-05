const { responseHandler } = require('./methods');
const client = require('../../config/elasticsearch');

module.exports.updateSeller = (req, res) => {
    const sellerId = req.params.sellerId
    const { 
		name, 
		productType 
    } = req.body
    
	if(sellerId && name && productType) {

		client.update({
			id: sellerId,
            index: 'sellers',
            body: {
                doc: {
                    name,
                    productType,
                }
            }
		}, (err, resp, status) => {
			if (err) responseHandler(res, status, 'Request incomplete. Try again.', false)
			responseHandler(res, status, 'Successfully updated a seller.', false)
		});

	} else {
		responseHandler(res, 400, 'Missing params', false)
	}

}