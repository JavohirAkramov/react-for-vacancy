import axios from "axios"

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const postListAPI = {
  getUsers: () => {
    return instance.get('users')
      .then(response => response)
  },
  getUserPosts: (userId) => {
    return instance.get(`posts?userId=${userId}`)
      .then(response => response)
  },
  getPostComments: (postId) => {
    return instance.get(`comments?postId=${postId}`)
      .then(response => response)
  },
  sendComment: ({ postId, email, name, body }) => {
    return instance.post(`comments?postId=${postId}`, { postId, name, body, email })
      .then(response => response)
  },
  sendPost: ({ userId, title, body }) => {
    return instance.post('posts', { userId, title, body })
      .then(response => response)
  }
}