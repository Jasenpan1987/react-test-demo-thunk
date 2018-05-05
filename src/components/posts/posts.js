import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "./actions";

class PostsComp extends Component {
  componentDidMount() {
    console.log("mounted")
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {this.props.posts.map(post => (<li key={post.id}>{post.title}</li>))}
        </ul>
      </div>
    );
  }
}

export const Posts = connect(
  state => ({ posts: state.posts }),
  dispatch => bindActionCreators({ fetchPosts }, dispatch)
)(PostsComp);
