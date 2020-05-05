const { v4: uuidv4 } = require('uuid');
const { responseHandler } = require('./methods');
const client = require('../../config/elasticsearch');

module.exports.addProduct= (req, res) => {
    const sellerId = req.params.sellerId;
	const { 
        item,
        description,
        quantity,
        price,
	} = req.body

	if(item && description && quantity && price) {
		const productId = uuidv4();
		
		client.index({
			id: productId,
			index: 'products',
			body: {
				id: productId,
				sellerId,
				item,
                description,
                quantity,
                price,
			}
		}, (err, resp, status) => {
			if (err) responseHandler(res, status, err, false)
			responseHandler(res, status, 'Successfully added a product.', false)
		});

	} else {
		responseHandler(res, 400, 'Missing params', false)
	}
}