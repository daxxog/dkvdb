/* Dkvdb / cli.js
 * command line interface for Dkvdb
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var Dkvdb = require('./dkvdb.min.js'),
	express = require('express'),
	app = express();

app.use