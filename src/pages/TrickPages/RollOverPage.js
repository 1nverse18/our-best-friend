import { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post';
import CreatePost from '../../components/PostComments/CreatePostRollOver';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class RollOverPage extends Component {
  state = {
    posts: [],
    tricks: []
  }
  
  componentDidMount() {
    this.fetchPosts();
    this.fetchTricks();
  }

  render() {
    return (
      <section className="posts-page">
        <h1>{this.state.tricks.name}</h1>
        <p>{this.state.tricks.content}</p>
        <p>Number of Times Tricks Completed: {this.state.tricks.quantity}</p>
        <CreatePost onPostCreate={this.fetchPosts}/>
        {this.state.posts.map(post => <Post key={post.post_id} post={post}/>)}
      </section>
    );
  }
  fetchPosts = () => {
    axios
      .get(`${SERVER_URL}/roll-over`, { withCredentials: true })
      .then(posts => {
        this.setState({
          posts: posts.data
        });
      })
      .catch(err => {
        console.log('Error fetching posts:', err);
      });
  }

  fetchTricks = () => {
    axios
      .get(`${SERVER_URL}/tricks/3`)
      .then(tricks => {
        this.setState({
          tricks: tricks.data
        });
      })
      .catch(err => {
        console.log('Error fetching posts:', err);
      });
  }
}

export default RollOverPage;