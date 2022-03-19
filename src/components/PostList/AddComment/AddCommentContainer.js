import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMyComment } from '../../../redux/post-list-reducer'
import AddComment from './AddComment'

export class AddCommentContainer extends Component {
  constructor(props) {
    super(props)
  }
  sendMyComment = ({ postId, email, name, body }) => {
    this.props.sendMyComment({ postId, email, name, body })
  }
  render() {
    return (
      <AddComment
        sendMyComment={this.sendMyComment}
        postId={this.props.postId}
        setToggleAddComment={()=>this.props.setCommentsToPost()}
      />
    )
  }
}

export default connect(null, { sendMyComment })(AddCommentContainer)