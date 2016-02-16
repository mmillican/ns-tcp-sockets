var _config = {
    ipAddress: '',
    port: 0
};

var _currentConnection = null;

exports.init = function(ipAddress, port) {
    _config.ipAddress = ipAddress;
    _config.port = port;
    
    console.log('init: IP: ' + _config.ipAddress + ' / Port: ' + _config.port);
};

exports.openConnection = function() {
    debugger;
    _currentConnection = new GCDAsyncSocket();
    
    console.log(_currentConnection);
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
