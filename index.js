var Ping = require('ping-wrapper');
const cliProgress = require('cli-progress');

Ping.configure();
const multibar = new cliProgress.MultiBar({
    clearOnComplete: false,
    hideCursor: true,
    barIncompleteChar: '.',
    fps: 5,
    stream: process.stdout,
    barsize: 90,
    position: 'center',
	format: '{ip} \t [{bar}] {value}ms'
}, cliProgress.Presets.shades_grey);

function ping_graph(ips, options){
	if(!options){
		options = {
			target: 2000,
		};
	}else{
		options.target = (options.target) ? options.target : 2000;
	}

	let ping_bar = {};
	let ping_log = {};

	Object.values(ips).forEach((ip, idx) => { 

		ping_bar[idx] = multibar.create(options.target, 0);
		ping_log[idx] = new Ping(ip);

		ping_log[idx].on('ping', function(data){
			ping_bar[idx].update(parseInt(data.time), {ip: ip});
		});
		
		ping_log[idx].on('fail', function(data){
			//console.log('Fail', data);
			ping_bar[idx].update(2000, {ip: ip});
		});

	}); 


}

module.exports.ping_graph = ping_graph;
