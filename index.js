
var options = {
    controls: true,
    bigPlayButton: false,
    width: 320,
    height: 240,
    fluid: false,
    plugins: {
        record: {
            audio: true,
            video: true,
            maxLength: 30,
            displayMilliseconds: false,
            debug: true,
            // fire the timestamp event every 5 seconds
            timeSlice: 5000
        }
    }
};

// apply some workarounds for opera browser
applyVideoWorkaround();

var startedRecord = false;
var player = videojs('myVideo', options, function() {
    // print version information at startup
    var msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
    videojs.log(msg);
});

// error handling
player.on('deviceError', function() {
    console.log('device error:', player.deviceErrorCode);
});

player.on('error', function(element, error) {
    console.error(error);
});

// user clicked the record button and started recording
player.on('startRecord', function() {
    console.log('started recording!');
});

// user completed recording
player.on('finishRecord', function() {
    console.log('finished recording');
});

// monitor stream data during recording
player.on('timestamp', function() {
    console.log('current timestamp: ', player.currentTimestamp);
    console.log('all timestamps (' + player.allTimestamps.length + '): ',
        player.allTimestamps);

    // stream data
    console.log('array of blobs: ', player.recordedData);
    console.log('---------------------------------------');
});
