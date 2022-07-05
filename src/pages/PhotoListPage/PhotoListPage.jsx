import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../actions/photos';
import CircleButton from '../../components/CircleButton/CircleButton';
import PhotoListComponent from '../../components/PhotoListComponent/PhotoListComponent'
import { addPage } from '../../store/pageReducer';

const PhotoList = () => {
  const page = useSelector(state => state.page.page);
  const photosLen = useSelector(state => state.photos.photos.length);
  const dispatch = useDispatch();
  
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll)
      };
  }, []);

  const handleScroll = () => {
      if(window.scrollY > (window.document.body.scrollHeight - 1000)*0.9){
          dispatch(addPage(1));
      }
  };


  useEffect(() => {
    if(photosLen < page * 10){
      dispatch(getPhotos(page))
    }
  }, [page]);


  return (
    <div className="main__container">
        <PhotoListComponent />
        {page > 1
          ?
            <CircleButton style={{bottom: 10,right: 10}} callback={() => {window.scrollTo(0, 0)}}>&#9650;</CircleButton>
          :
            <></>
          }
    </div>
  )
}

export default PhotoList