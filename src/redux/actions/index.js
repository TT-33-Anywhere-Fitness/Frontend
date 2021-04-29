import axios from "axios";

export const ADD_CLASSES_START = 'ADD_CLASSES_START'
export const ADD_CLASSES_SUCCESS = 'ADD_CLASSES_SUCCESS'
export const ADD_CLASSES_FAILURE = 'ADD_CLASSES_FAILURE'

export const DELETE_CLASSES_START = 'DELETE_CLASSES_START'
export const DELETE_CLASSES_SUCCESS = 'DELETE_CLASSES_SUCCESS'
export const DELETE_CLASSES_FAILURE = 'DELETE_CLASSES_FAILURE'

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
                    console.log(res)
                    dispatch({type: GET_CLASSES_SUCCESS, payload: res.data})
                })
                .catch(err => {
                    console.log({err})
                })
        )
    }
}

export const getClassInfo = (id) => (dispatch) => {
    dispatch({type: GET_CLASSES_START})
    return (
        axios
            .get(`https://tt-33-anywhere-fitness.herokuapp.com/api/classes/${id}`)
            .then(res => {
                dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    )
}


export const addClasses = (newClass) => (dispatch) =>{
    dispatch({type: ADD_CLASSES_START})
    axios
    .post("https://tt-33-anywhere-fitness.herokuapp.com/api/classes", newClass)
            .then(res => {
                dispatch({
                    type: ADD_CLASSES_SUCCESS,
                    payload: res.data
                })

                console.log(res)
                dispatch({type: ADD_CLASSES_SUCCESS, payload: res.data})
            })
            .catch(err => console.log(err))
    }

export const deleteClasses = (item) => (dispatch) => {
        dispatch({type: DELETE_CLASSES_START})
        return (
            axios
                .delete(`https://tt-33-anywhere-fitness.herokuapp.com/api/classes/${item.id}`)
                .then(res => {
                    dispatch({ type: DELETE_CLASSES_SUCCESS, payload: res.data})
                })
                .catch(err => {
                    console.log(err)
                })
        )
    }