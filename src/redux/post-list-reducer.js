import { postListAPI } from '../API/API'
import avatar from './../assets/images/image.jpg'

const SET_USERS = 'SET-USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const SET_CURRENT_USER = 'SET-CURRENT-USER'
const SET_USER_POSTS = 'SET-USER-POSTS'
const SET_CURRENT_POST = 'SET-CURRENT-POST'
const SET_COMMENTS_TO_POST = 'SET-COMMENTS-TO-POST'
const SET_MY_COMMENT = 'SET-MY-COMMENT'
const SET_MY_POST = 'SET-MY-POST'

let initialState = {
  users: [{ id: 0, name: "Abdulloh" }],
  image: avatar,
  isFetching: true,
  currentUser: 1,
  userPosts: [],
  currentPost: null,
  commentsToPost: [],
}

export const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case SET_CURRENT_USER: {
      return { ...state, currentUser: action.currentUser }
    }
    case SET_USER_POSTS: {
      return { ...state, userPosts: action.userPosts }
    }
    case SET_CURRENT_POST: {
      return { ...state, currentPost: action.postId }
    }
    case SET_COMMENTS_TO_POST: {
      return { ...state, commentsToPost: action.comments }
    }
    case SET_MY_COMMENT: {
      return { ...state, commentsToPost: [...state.commentsToPost, action.myComment] }
    }
    case SET_MY_POST: {
      console.log(action)
      return { ...state, userPosts: [...state.userPosts, action.myPost] }
    }
    default:
      return state
  }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setCurrentUser = (userId) => ({ type: SET_CURRENT_USER, currentUser: userId })
export const setUserPosts = (posts) => ({ type: SET_USER_POSTS, userPosts: posts })
export const setCurrentPost = (postId) => ({ type: SET_CURRENT_POST, postId })
export const setCommentsToPost = (comments) => ({ type: SET_COMMENTS_TO_POST, comments })
export const setMyComment = (myComment) => ({ type: SET_MY_COMMENT, myComment })
export const setMyPost = (myPost) => ({ type: SET_MY_POST, myPost })



export const getUsers = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    postListAPI.getUsers()
      .then(result => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(result.data))
      })
  }
}
export const getUserPosts = (userId) => {
  return (dispatch) => {
    dispatch(setCurrentUser(userId))
    postListAPI.getUserPosts(userId)
      .then(result => {
        dispatch(setUserPosts(result.data))
      })
  }
}
export const getPostComments = (postId) => {
  return (dispatch) => {
    dispatch(setCurrentPost(postId))
    postListAPI.getPostComments(postId)
      .then(result => {
        dispatch(setCommentsToPost(result.data))
      })
  }
}
export const sendMyComment = ({ postId, email, name, body }) => {
  return (dispatch) => {
    postListAPI.sendComment({ postId, email, name, body })
      .then(result => {
        dispatch(setMyComment(result.data))
      })
  }
}
export const sendMyPost = ({ userId, title, body }) => {
  console.log({ userId, title, body })
  return (dispatch) => {
    postListAPI.sendPost({ userId, title, body })
      .then(result => {
        console.log(result)
        dispatch(setMyPost(result.data))
      })
  }
}