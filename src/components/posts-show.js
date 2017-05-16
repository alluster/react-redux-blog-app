import React, { Component } from 'react';
import { fetchPost } from '..actions';
import { connect } from 'react-redux';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })PostsShow;
