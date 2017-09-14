const env = process.env.NODE_ENV
switch(env) {
	case 'production':
		module.exports = require('./webpack-prod.config.js')
		break
	case 'development':
		module.exports = require('./webpack-dev.config.js')
		break
	default:
		break
}
