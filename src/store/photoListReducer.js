const defaultState = {
    photos: []
}

const ADD_PHOTOS = "ADD_PHOTOS";

export const photoListReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_PHOTOS:
            return {...state, photos: [...state.photos, ...action.payload]};
        default:
            return state;
    }
}

export const addPhotos = (payload) => ({type: ADD_PHOTOS, payload})