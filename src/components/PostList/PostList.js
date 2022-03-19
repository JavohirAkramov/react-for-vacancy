import React, { useState } from 'react'
import Post from './Post/Post'
import s from './PostList.module.css'
import User from './User/User.js'

function PostList(props) {
  return (
    <div className={s.content}>
      <h2 className={s.heading}>Users</h2>
      <div className={s.users}>
        {
          props.users.map(user => {
            return <User
              user={user}
              currentUser={props.currentUser}
              image={props.image}
              onUserChanged={props.onUserChanged()}
            />
          })
        }
      </div>
      <div className={s.currentUserPosts}>
        <h2 className={s.heading}>Posts</h2>
        {
          props.userPosts.map(post => {
            return <Post
              post={post}
              onPostSelected={props.onPostSelected()}
              comments={props.comments}
              currentPost={props.currentPost}
            />
          })
        }
      </div>
    </div>
  )
}

export default PostList