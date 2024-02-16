// import axios from 'axios';

// const API_BASE_URL = 'https://localhost:5001/api/tasks';

// export const getTasks = () => axios.get(API_BASE_URL).then(response => {
//     return response.data
//  })
//  .then(data => {
//     console.log(data)
//  })
//  .catch(error => {
//     console.log(error.response.data.error)
//  });
// export const addTask = (task) => axios.post(API_BASE_URL, task).then(response => {
//     return response.data
//  })
//  .then(data => {
//     console.log(data)
//  })
//  .catch(error => {
//     console.log(error.response.data.error)
//  });
// export const updateTask = (id, task) => axios.put(`${API_BASE_URL}/${id}`, task).catch(error => {
//     console.log(error.response.data.error)
//  });

// //axios.interceptors.response.use(undefined, error=> {
//    // const {status, data, config}= error.response;
//    // if (status===404)
//    // {history.push('/not found');}
//    // if (status===400 && config.method === 'get' && data.errors.hasOwnProperty('id'))
//    // {history.push('/not found');}
//    // if (status===500)
//    // {toast.error('Server error-ref terminal for more info!');}
// //});

