var _config = {
    ipAddress: '',
    port: 0,
    timeout: 2000 // default = 2s
};

var _currentConnection = null;

exports.init = function(ipAddress, port, timeout) {
    _config.ipAddress = ipAddress;
    _config.port = port;
    _config.timeout = timeout;
    
    console.log('init: IP: ' + _config.ipAddress + ' / Port: ' + _config.port);
};

exports.openConnection = function(del) {
    debugger;
    var socket = new GCDAsyncSocket();    
    socket.initwithDelegate(del, null);
    
    console.log('connect to ' + _config.ipAddress);
    
    var error = new interop.Reference(); 
    var connected = socket.connectToHostOnPortWithTimeoutError(_config.ipAddress, _config.port, _config.timeout, error);
    console.log(connected);
    console.log('error: ' + error.value.localizedDescription().toString());
};

var _close = function() {
    // TODO: Close the connection
    _currentConnection = null;
}

exports.closeConnection = function(wait) {
    if (wait) {
        setTimeout(function() {
            _close();
        }, wait);
    }
    else {
        _close();
    }
};
