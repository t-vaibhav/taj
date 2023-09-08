// SingleGif.tsx
import React, { useEffect, useRef, useState } from 'react';

import VisibilitySensor from 'react-visibility-sensor';


const Video = (props) => {
  const videoRef = useRef(null);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    if (isVisible) {
      videoRef.current?.play();
    } else {
      if (videoRef.current?.play) {
        videoRef.current?.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className='mx-auto w-full'>
    {isSSR? null : (
   <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
   <video autoPlay muted playsInline loop controls ref={videoRef}>
     <source src={props.url} type='video/mp4' />
   </video>
 </VisibilitySensor>

    )}
 
    </div>
  );
};

export default Video;
