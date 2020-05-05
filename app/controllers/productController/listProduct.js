const client = require('../../config/elasticsearch');
const { responseHandler } = require('./methods');

module.exports.listProduct = (req, res) => {
	const sellerId = req.params.sellerId;
	
	if(sellerId) {
		client.search({
			index: 'products', 
			q: sellerId,
		}).then(response => {
			if(response.hits.total.value == 0) responseHandler(res, 200, 'No products at this time.', false)
			
			let dataArray = [];
			response.hits.hits.map(item => {
				dataArray.push(item._source);
			})

			responseHandler(res, 200, 'List of products', dataArray)
		});
	} else {
		responseHandler(res, 400, 'Missing params', false)
	}
}