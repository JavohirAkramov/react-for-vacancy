import React from 'react'
import s from './User.module.css'

const User = (props) => {

  return (
    <div className={props.user.id === props.currentUser ? s.userActive : s.user} onClick={() => { props.onUserChanged(props.user.id) }}>
      <img className={s.image} src={props.image} alt="user-avatar" width={30} height={30} />
      <div className={s.id}>{props.user.id}</div>
      <div className={s.name}>{props.user.name}</div>
    </div>
  )
}

export default User