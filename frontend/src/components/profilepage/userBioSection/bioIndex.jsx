import React from 'react';
import {Button} from '../profileComponents/buttonComponent.jsx';
import {
  BioContainer,
  BioWrapper,
  BioRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrp,
  Column2,
  ImgWrp,
  Img,
} from './bioElements.jsx';
import profileObjOne from '../userBioSection/bioData.jsx';
const BioSection = (lightBg,
  id,
  imgStart,
  username,
  lightText,
  category,
  darkText,
  bio,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
  ) => {
  console.log('username: ', username)
  return (
    <>
      <BioContainer lightBg={'lightBg'} id={'id'}>
        <BioWrapper>
          <BioRow imgStart={'imgStart'}>
            <Column1>
              <TextWrapper>
                <TopLine>{profileObjOne['username']}</TopLine>
                <Heading lightText={'lightText'}>
                  {profileObjOne['category']}
                </Heading>
                <Subtitle darkText={'darkText'}>{profileObjOne['bio']}</Subtitle>
                  <BtnWrp>
                    <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}


                    >{buttonLabel}</Button>
                  </BtnWrp>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrp>
                <Img src={profileObjOne['avatar']} alt={alt}/>
              </ImgWrp>
            </Column2>
          </BioRow>
        </BioWrapper>
      </BioContainer>
    </>
  );
};

export default BioSection;