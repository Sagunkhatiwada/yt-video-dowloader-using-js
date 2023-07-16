function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    var output = document.getElementById('output');

    // Check if the input is empty
    if (videoUrl === '') {
        output.innerHTML = 'Please enter a valid YouTube video URL.';
        return;
    }

    // Check if the URL is a valid YouTube video URL
    if (!isValidYouTubeUrl(videoUrl)) {
        output.innerHTML = 'Please enter a valid YouTube video URL.';
        return;
    }

    // Extract the video ID from the URL
    var videoId = extractVideoId(videoUrl);

    // Generate download links for 1080p and 4K resolutions
    var downloadUrl1080p = 'https://www.youtube.com/watch?v=' + videoId + '&quality=1080';
    var downloadUrl4K = 'https://www.youtube.com/watch?v=' + videoId + '&quality=4k';

    // Display the download links
    output.innerHTML = '<a href="' + downloadUrl1080p + '" target="_blank">Download 1080p</a><br>' +
                       '<a href="' + downloadUrl4K + '" target="_blank">Download 4K</a>';
}

function isValidYouTubeUrl(url) {
    // Regular expression to validate YouTube URL
    var pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|youtu\.be\/)([^&#?]+)/;
    return pattern.test(url);
}

function extractVideoId(url) {
    var match = url.match(/(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|youtu\.be\/)([^&#?]+)/);
    return match[1];
}
