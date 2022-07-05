import { addPhotos } from "../store/photoListReducer";
import axios from "axios";

export const getPhotos = (page) => {
    return function(dispatch){
      axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      .then(responce => dispatch(addPhotos(responce.data)))
    }
}