import React from 'react'
import Lottie from 'react-lottie';

function Icon({ title }) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      title === 'Clouds' || title === 'Rain' || title === 'Clear' ?
        require(`../../assets/${title}.json`) : require(`../../assets/Clouds.json`),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions}
      />
    </div>
  )
}

export default Icon
