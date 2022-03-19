import React, { useState } from 'react'
import AddCommentContainer from '../AddComment/AddCommentContainer'
import Comment from '../Comment/Comment'
import s from './Post.module.css'

function Post(props) {
  const [toggleAddComment, setToggleAddComment] = useState(false)
  return (
    <div onClick={() => { props.onPostSelected(props.post.id) }}>
      <div className={props.currentPost === props.post.id ? s.activePost : s.post}>
        <div>
          <span className={s.postId}>{props.post.id}</span>
          <span className={s.postName}>{props.post.title} </span>
        </div>
        {
          props.currentPost === props.post.id
          ? <div >
              <div className={s.userId}>user id: {props.post.userId}</div>
              <div>
                <span>post body: {props.post.body}</span>
              </div>
              <h3 className={s.commentsHeading}>Comments</h3>
              <Comment 
                comments={props.comments}
                setToggleAddComment={(param) => setToggleAddComment(param)}
               />
              {
                toggleAddComment
                  ? <AddCommentContainer
                    postId={props.post.id}
                    setToggleAddComment={ () => setToggleAddComment(!toggleAddComment)}
                  />
                  : <button onClick={() => { setToggleAddComment(true) }}>Add comment</button>
              }
            </div>
            : null
        }
      </div>
    </div>
  )
}

export default Post