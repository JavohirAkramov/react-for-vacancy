import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './PostList.module.css'
import PostList from './PostList'
import { getUsers, getUserPosts, getPostComments } from './../../redux/post-list-reducer'

class PostListContainer extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  onUserChanged = (userId) => {
    console.log("normal")
    this.props.getUserPosts(userId)
  }
  onPostSelected = (postId) => {
    this.props.getPostComments(postId)
  }
  render() {
    return (
      <div className={s.PostListContainer}>
        {
          this.props.isFetching
            ? <div>Loading...</div>
            : <PostList
              users={this.props.users}
              image={this.props.image}
              onUserChanged={() => this.onUserChanged}
              currentUser={this.props.currentUser}
              userPosts={this.props.userPosts}
              onPostSelected={() => this.onPostSelected}
              currentPost={this.props.currentPost}
              comments={this.props.comments}
            />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.postListPage.users,
  image: state.postListPage.image,
  isFetching: state.postListPage.isFetching,
  currentUser: state.postListPage.currentUser,
  userPosts: state.postListPage.userPosts,
  currentPost: state.postListPage.currentPost,
  comments: state.postListPage.commentsToPost

})

export default connect(mapStateToProps, { getUsers, getUserPosts, getPostComments })(PostListContainer)