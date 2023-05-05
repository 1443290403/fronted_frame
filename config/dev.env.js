'use strict'
const { merge } = require('webpack-merge')
const prodEnv = require('./prod.env')
//开发环境配置
module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',

	// BASE_API: '" http://192.168.0.182:9000/api/1.0"',
	// BASE_URL: '" http://192.168.0.182:9000"',

	// BASE_API: '" http://124.70.188.151:9000/api/1.0"',
	// BASE_URL: '" http://124.70.188.151:9000"',

	BASE_API: '" http://192.168.0.28:9000/api/1.0"',
	BASE_URL: '" http://192.168.0.28:9000"',

	WS_URL: '"ws://localhost:9000"'
})

