import React from 'react'
import cl from "./SinglePhotoPage.module.css"
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';

const SinglePhotoPage = () => {
    const params = useParams();
    const photos = useSelector(state => state.photos.photos);
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fphoto = photos.find(el => el.id === params.id);
        if(fphoto){
            setPhoto(fphoto);  
        }
        else{
            navigate("/");
        }
    }, []);

  return (
    <div className="main__container">
        <CircleButton style={{top: 10, left: 10}} callback={() => {navigate(-1)}}>&#10094;</CircleButton>
        {photo
        ?
        <>
            <div className={cl.author__content}>
                <div className={cl.author__info}>
                    <img alt='author' src={photo.user.profile_image.small}/>
                    <p>{photo.user.name}</p>
                </div>
                <div className={cl.likes__info}>
                    <p className={cl.heart}>&#x2764;</p>
                    <p className={cl.likes__count}>{photo.likes}</p>
                </div>
            </div>
            <div className={cl.photo}>
                <img src={photo.urls.small} alt="" />
            </div>
        </>
        :
        <>
        </>
        }
    </div>
  )
}

export default SinglePhotoPage
