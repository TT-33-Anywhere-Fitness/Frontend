import axios from "axios";

export const ADD_CLASSES_START = 'ADD_CLASSES_START'
export const ADD_CLASSES_SUCCESS = 'ADD_CLASSES_SUCCESS'
export const ADD_CLASSES_FAILURE = 'ADD_CLASSES_FAILURE'
export const GET_CLASSES_START = 'GET_CLASSES_START';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS'
export const GET_CLASSES_FAILURE = 'GET_CLASSES_FAILURE'

export const getClasses = () => {
    return (dispatch) => {
        dispatch({type: GET_CLASSES_START})
        return (
            axios
            .get('https://tt-33-anywhere-fitness.herokuapp.com/api/classes')
            .then(res => {
                dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log({err})
            })
        )
    }
}

export const addClasses = (data) => {
    return (dispatch) => {  
        dispatch({
            type: ADD_CLASSES_START
        })

        axios
            .post("https://tt-33-anywhere-fitness.herokuapp.com/api/classes", data)
            .then(res => {
                dispatch({
                    type: ADD_CLASSES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
    }
}