
const AppComponent = Vue.component('app-component', {
   data () {
    return {
     }
   },
   mounted() {

    const BASE_URL = "http://127.0.0.1:5000";
    // test status
    axios.get(BASE_URL+"/status")
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });

    function upload(blob) {

        var host = 'http://127.0.0.1:5000';
        var serverUrl = '/upload';
        var formData = new FormData();
        formData.append('file', blob, blob.name);

        const config = {
            headers: {
              'content-type': 'multipart/form-data'
            }
        }
        console.log('upload recording ' + blob.name + ' to ' + serverUrl);

        //　*** fetchもaxiosも同じように動くよ。 ***

        // fetch(host+serverUrl, {
        //     method: 'POST',
        //     body: formData
        // }).then(
        //     success => console.log('upload recording complete.')
        // ).catch(
        //     error => console.error('an upload error occurred!')
        // );

        axios.post(host+serverUrl
            , formData
            , config)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    const videoJsOptions = {
        controls: true,
        bigPlayButton: false,
        width: 320,
        height: 240,
        fluid: false,
        plugins: {
            record: {
                audio: true,
                video: true,
                maxLength: 10,
                displayMilliseconds: false,
                debug: true
            }
        }
    };

    var player = videojs('myVideo', videoJsOptions, function() {
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

    // user completed recording and stream is available
    player.on('finishRecord', function() {
        // the blob object contains the recorded data that
        // can be downloaded by the user, stored on server etc.
        console.log('finished recording:', player.recordedData);

        // upload recorded data
        upload(player.recordedData);
    });

   },
   methods: {
   },
   template: '<video id="myVideo" class="video-js vjs-default-skin"></video>'
});
