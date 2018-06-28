
import { axios } from "axios";

// endpoint root
const root = "/product";

class HelloApi {

  static get() 
  {
    return axios.get(root); 
  }
  
  static edit(payload) 
  {
    return axios.put(`${root}/edit/payload.id`, payload); 
  
  }

  static add(payload) 
  {
    return axios.post(root, payload); 
  }

  static delete(payload) 
  {
    return axios.delete(`${root}/delete/${payload.id}`); 
  }

}

const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 },
  {name : 'akbar'}
]

export default getPeople =  () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 2000)
  })
}
