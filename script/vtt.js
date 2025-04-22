        // YouTube Iframe Player API setup
        function onYouTubeIframeAPIReady() {
            var player = new YT.Player('videoPlayer', {
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            event.target.loadModule('captions'); // Enable captions module
            event.target.setOption('captions', 'track', {
                languageCode: 'en', // Language code of the captions
                track: 'https://example.com/your-captions-file.vtt' // Your VTT file URL
            });
        }

        // Load the YouTube Player API script dynamically
        var script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);