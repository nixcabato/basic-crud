const { responseHandler } = require('./methods');
const client = require('../../config/elasticsearch');

module.exports.updateProduct = (req, res) => {
    const productId = req.params.productId
    const { 
		item,
        description,
        quantity,
        price,
        sellerId,
    } = req.body
    
    if(productId && sellerId && item && 
        description && quantity && price) {

		client.update({
			id: productId,
            index: 'products',
            body: {
                doc: {
                    sellerId,
                    item,
                    description,
                    quantity,
                    price,
                }
            }
		}, (err, resp, status) => {
			if (err) responseHandler(res, status, 'Request incomplete. Try again.', false)
			responseHandler(res, status, 'Successfully updated a product.', false)
		});

	} else {
		responseHandler(res, 400, 'Missing params', false)
	}

}