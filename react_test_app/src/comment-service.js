import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const getComments = async() => (await axios.get(`${API_BASE_URL}/comments`)).data || [];

const createComment = async(comment) => axios.post(`${API_BASE_URL}/comments`, comment, {
    headers: {
        'Content-Type': 'application/json'
    }
})

const editComment = async(id, comment) => axios.put(`${API_BASE_URL}/comments/${id}`, comment, {
    headers: {
        'Content-Type': 'application/json'
    }
})

const deleteComment = async(id) => axios.delete(`${API_BASE_URL}/comments/${id}`)

export {
    getComments,
    createComment,
    editComment,
    deleteComment
};