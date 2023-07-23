


import axios from 'axios';
import { CREATE_LOAD } from './types';
// import * as api from '../state/api'

// import {UPDATE} from './types'

export const createLoad = (loadData, navigate) => (dispatch) => {
  axios.post('/products', loadData)
    .then((res) => {
      dispatch({
        type: CREATE_LOAD,
        payload: res.data,
      });
      // Redirect to "/product" after successful creation
      navigate.push('/products');
    })
    .catch((err) => {
      console.log(err);
      // Handle error
    });
};




// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post)
    

//     dispatch({ type: "UPDATE", payload: data })
//   } catch (error) {
//     console.log(error)
//   }
// }



