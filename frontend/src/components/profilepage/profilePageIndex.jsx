
import React from 'react';
import axios from 'axios';
import Navbar from '../homepage/navbar.jsx';
import PhotoSection from './userPhotoSection/userPhotoSection.jsx';
import BioSection from './userBioSection/bioIndex.jsx';
import Uploads from './userUploadsSection/uploadsIndex.jsx';

const ProfileHome = (props) => {
  return (
    <>
    <Navbar goHome={props.goHome}/>
    <PhotoSection />
    <BioSection />
    <Uploads />
    </>
  )
};

export default ProfileHome;