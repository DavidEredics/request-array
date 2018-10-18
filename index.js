module.exports = function(request){

    var request_data = [];

    request_data['url'] = request.url;
    request_data['method'] = request.method;
    request_data['host'] = request.headers.host;
    request_data['connection'] = request.headers.connection;
    request_data['accept'] = request.headers.accept;
    request_data['cache_control'] = request.headers['cache-control'];
    request_data['user_agent'] = request.headers['user-agent'];
    request_data['accept_encoding'] = request.headers['accept-encoding'];
    request_data['accept_language'] = request.headers['accept-language'];
    request_data['referer'] = request.headers.referer;
    request_data['ip'] = (request.headers['x-forwarded-for'] || '').split(',').pop() || 
        request.connection.remoteAddress || 
        request.socket.remoteAddress || 
        request.connection.socket.remoteAddress;
    request_data['remoteFamily'] = request.connection.remoteFamily;
    request_data['http_version'] = request.httpVersion;

    return request_data;
};