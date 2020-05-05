let elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
        host: "https://pvozz8ux82:6l903r1plm@takehome-testing-8641314082.ap-southeast-2.bonsaisearch.net:443",
        log: 'trace',
        apiVersion: '7.1', 
    });

    client.ping({
        requestTimeout: 30000,
    }, function(error) {
        if (error) {
            console.error('Elasticsearch cluster is down!');
        } else {
            console.log('Everything is ok');
        }
    });

module.exports = client
