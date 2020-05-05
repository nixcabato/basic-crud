const client = require('../../config/elasticsearch');
const { responseHandler } = require('./methods');

module.exports.listSeller = (req, res) => {

	client.search({
		index: 'sellers',
		body: {
			query: {
				"match_all": {}
			}
		}
	}).then(response => {
		if(response.hits.total.value == 0) responseHandler(res, 200, 'No sellers at this time.', false)
		
		let dataArray = [];
		response.hits.hits.map(item => {
			dataArray.push(item._source);
		})

		responseHandler(res, 200, 'List of sellers', dataArray)
	});
}