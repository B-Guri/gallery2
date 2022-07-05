const defaultState = {
    page: 1
}

const ADD_PAGE = "ADD_PAGE";

export const pageReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_PAGE:
            return {...state, page: state.page + action.payload};
        default:
            return state;
    }
}

export const addPage = (payload) => ({type: ADD_PAGE, payload})