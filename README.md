# request-array
A simple node module that returns with an array of the HTTP request's basic properties.

## Installation

    $ npm install request-array

## Examples

### HTTP

```js
var http = require('http')
var request_array = require('request-array');

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();

    console.log(request_array(req));

}).listen(8080);
```

### Express

```js
const express = require('express')
const app = express()
const port = 8080

var request_array = require('request-array');

app.get('/', function (req, res) {
    res.send('Hello World!')

    console.log(request_array(req));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

## License

[MIT](LICENSE)