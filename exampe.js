const ping_graph = require('./index.js');

let ips = ['8.8.8.8', 'google.com', 'facebook.com'];

const options = {
    target: 1000 //default 2000
};

ping_graph.start(ips, options);
