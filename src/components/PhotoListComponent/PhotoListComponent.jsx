import React from 'react'
import {  useSelector } from 'react-redux'
import MyImage from '../MyImage/MyImage';
import cl from "./PhotoListComponent.module.css"

const PhotoListComponent = () => {
    const photos = useSelector(state => state.photos.photos);

  return (
    <div>
        {photos
        ?
            <div className={cl.photo__list}>
                {photos.map(photo =>
                    <MyImage key={photo.urls.small} photo={photo}/>
                )}
            </div>
        :
            "no data"}
    </div>
  )
}

export default PhotoListComponent