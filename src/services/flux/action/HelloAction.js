
const API_CALL_REQUEST2 = "API_CALL_REQUEST2";
const API_CALL_SUCCESS2 = "API_CALL_SUCCESS2";


//import getPeople from '../api/HelloApi'

export function fetchData() {
  return {
    type: API_CALL_REQUEST2
  }
}

export function fetchDone() {
    return {
      type: API_CALL_SUCCESS2,
      payload: [
        {name: "triadi", age: 25},
        {name: "witan", age: 21},
        {name: "dwi", age: 40}
      ]
    }
  }
  