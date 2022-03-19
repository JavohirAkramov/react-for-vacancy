import React from 'react'
import s from "./Sidebar.module.css"
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Link to='/'><button className={s.button}>Post list</button></Link>
      <Link to='/add'><button className={s.button}>Add post</button></Link>
    </div >
  )
}

export default Sidebar