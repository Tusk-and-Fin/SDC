import React from 'react';
import styled from 'styled-components';
import { sampleProduct, sampleStyles } from './sampleData.js';
import {BigImage} from './BigImage.jsx';

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  overflow: hidden;
`

const ImageGallery = ({ selectedThumbnail }) => {
  const [enlargeImage, setEnlargeImage] = React.useState(false);
  const [coords, setCoords] = React.useState({x: 0, y: 0});
  if (enlargeImage) {
    return <BigImage style={{backgroundPosition: `${coords.x * 100}% ${coords.y * 100}%`}} selectedThumbnail={selectedThumbnail} setEnlargeImage={setEnlargeImage} coords={coords} setCoords={setCoords}/>
  }
  return(
    <StyledImg onClick={(e) => {console.log('image clicked')
  setEnlargeImage(true)}} src={sampleStyles.results[0].photos[selectedThumbnail].url} />
)
}

export { ImageGallery };