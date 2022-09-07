enum log_level {
	LOG_NORM,
	LOG_INFO,
	LOG_WARN,
	LOG_ERR
};

const colors = ['',
				'background: #222; color: #bada55',
				"33m",
				"31m"
			];

function log(msg: string, type: string): void {
	let color: string = colors[log_level.LOG_NORM];
	switch (type.toLowerCase()) {
		case "err" :
			color = colors[log_level.LOG_ERR]; break;
		case "warn":
			color = colors[log_level.LOG_WARN]; break;
		case "info":
			color = colors[log_level.LOG_INFO]; break;
	}
	console.log("%c ", msg, color);
}

export { log };
