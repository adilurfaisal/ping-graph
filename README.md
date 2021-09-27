# What is ping-graph

It's a ping monitor package.

# Installation

`npm i ping-graph --save`

# Example

```
const ping_graph = require('ping-graph');

let ips = ['8.8.8.8', 'google.com', 'facebook.com'];

const options = {
    target: 1000 //default 2000
};

ping_graph.start(ips, options);

```

# Example Image

![Alt text](example-1.jpg?raw=true "Example 1")
