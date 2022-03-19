import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMyPost } from '../../redux/post-list-reducer'
import AddPost from './AddPost'
import c from './AddPost.module.css'

export class AddPostContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={c.container}>
        <AddPost 
          userId={this.props.userId}
          sendMyPost={this.props.sendMyPost}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.postListPage.currentUser
})

export default connect(mapStateToProps,{sendMyPost})(AddPostContainer)