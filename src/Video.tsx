import * as React from 'react';

const Video = () => {
    const [YT, setYT] = React.useState(undefined)
    const _window = window as any
    React.useEffect(() => {
        if (!_window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
      
            // onYouTubeIframeAPIReady will load the video after the script is loaded
            _window.onYouTubeIframeAPIReady = () => setYT(_window.YT);
      
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
        } else {
            console.log(_window.YT)
        }
    }, [_window.YT])
    console.log(YT)
    return (<iframe id='existing-iframe-example'
    width='640' height='360'
    src='https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1'
    // frameborder='0'
    style={{ border: 'solid 4px #37474F' }}
    />)
}

export default Video