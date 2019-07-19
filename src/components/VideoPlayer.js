import React from 'react'
import styled from 'styled-components'

const VideoContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    width: 100%;
    height: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

class VideoPlayer extends React.Component {
    render(){
        return(
            <VideoContainer>
            <iframe 
                width="560" 
                height="315" 
                //src="https://www.youtube-nocookie.com/embed/2w49_1a9X0Q" 
                src={"https://www.youtube-nocookie.com/embed/" + this.props.src}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope" 
                allowFullScreen>

            </iframe>
            </VideoContainer>
        )
    }
}

export default VideoPlayer