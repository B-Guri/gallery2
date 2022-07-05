import React from 'react'
import { useNavigate } from 'react-router-dom'
import cl from "./MyImage.module.css"

const MyImage = ({photo}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/photo/${photo.id}`);
  }

  return (
    <div className={cl.image__content} onClick={handleClick}>
          <div className={cl.author__info}>
            <div className={cl.author__image}>
              <img src={photo.user.profile_image.small} alt="" />
            </div>
            <div className={cl.author__name}>
                <p>{photo.user.name}</p>
            </div>
          </div>
          <img src={photo.urls.small} alt={photo.alt_description?photo.alt_description:"default"} />
    </div>
  )
}

export default MyImage