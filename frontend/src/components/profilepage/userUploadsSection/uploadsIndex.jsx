import React from 'react';
import {
  UploadsContainer,
  UploadsH1,
  UploadsWrapper,
  UploadsCard,
  UploadsIcon,
  UploadsH2,
  UploadsP
} from './uploadsElements.jsx';
import icon1 from '../profileResources/icon1.svg';

const Uploads = () => {
  return (
    <UploadsContainer id="uploads">
      <UploadsH1>Upload Title</UploadsH1>
      <UploadsWrapper>
        <UploadsCard>
          <UploadsIcon src={icon1} />
          <UploadsH2>Band For Upload</UploadsH2>
          <UploadsP>Description of the upload</UploadsP>
        </UploadsCard>
        <UploadsCard>
          <UploadsIcon src={icon1} />
          <UploadsH2>Band For Upload</UploadsH2>
          <UploadsP>Description of the upload</UploadsP>
        </UploadsCard>
        <UploadsCard>
          <UploadsIcon src={icon1} />
          <UploadsH2>Band For Upload</UploadsH2>
          <UploadsP>Description of the upload</UploadsP>
        </UploadsCard>
      </UploadsWrapper>
    </UploadsContainer>
  )
}

export default Uploads;