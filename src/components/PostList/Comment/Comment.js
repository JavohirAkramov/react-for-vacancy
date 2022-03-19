import React, { useState } from 'react'
import s from './Comment.module.css'

function Comment(props) {
  const [commentBody, setCommentBody] = useState(null)
  return (
    <div>
      {
        props.comments.map((comment) => {
          return <div 
                    className={s.comment} 
                    onClick={() => {
                      setCommentBody(comment.id)
                      props.setToggleAddComment(false)
                    }}>
            <span className={commentBody === comment.id ? s.activeComment : null}>{comment.name}</span>
            {
              commentBody === comment.id
              ? <div>{comment.body}</div>
              : null
            }
            <div className={s.commentInfo}>comment <span>{comment.id}</span>, by: {comment.email}</div>
          </div>
        })
      }
    </div>
  )
}

export default Comment