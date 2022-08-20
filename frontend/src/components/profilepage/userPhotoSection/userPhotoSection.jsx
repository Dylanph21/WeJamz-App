import React, {useState} from 'react';
import { BioContainer,
  ProfileBg,
  VideoBg,
  BioContent,
  BioH1,
  BioP,
  BioBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './userPhotoSectionElements.jsx';
import ConcertBackground from '../profileResources/ConcertBackground.mp4';
import Button from '../profileComponents/buttonComponent.jsx';
import TJamzPhoto from '../profileResources/TJamzPhoto.png';

const PhotoSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <BioContainer>
      <ProfileBg>
        <VideoBg autoPlay loop muted src={ConcertBackground} type='video/mp4' />
      </ProfileBg>
      <BioContent>
        <BioH1>T-Jamz Profile Page</BioH1>
        <img src={TJamzPhoto || 'Image Not Available'}/>
        <BioP>
        Alwayz be Jammin' !
        </BioP>
        <BioBtnWrapper>
          <Button
          to='Direct Message'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          >
            Direct Message {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BioBtnWrapper>
        <BioBtnWrapper>
          <Button
          to='Request to Collaborate'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          >
            Request to Collaborate {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BioBtnWrapper>
      </BioContent>
    </BioContainer>
  )
};

export default PhotoSection;