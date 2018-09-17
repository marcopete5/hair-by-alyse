import React from 'react';

const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: '45% 37%',
      height: '100vh',
      margin: '-8px',
    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
}

export default ImageSlide;