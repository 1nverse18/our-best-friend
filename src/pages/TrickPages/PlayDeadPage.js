import { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post';
import CreatePost from '../../components/PostComments/CreatePostPlayDead';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class PlayDeadPage extends Component {
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
        <button
          onClick={this.updateTricks}
          type="button"
        />
        <CreatePost onPostCreate={this.fetchPosts}/>
        
        {this.state.posts.map(post => <Post key={post.post_id} post={post}/>)}
      </section>
    );
  }
  fetchPosts = () => {
    axios
      .get(`${SERVER_URL}/play-dead`, { withCredentials: true })
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
      .get(`${SERVER_URL}/tricks/2`)
      .then(tricks => {
        this.setState({
          tricks: tricks.data
        });
      })
      .catch(err => {
        console.log('Error fetching posts:', err);
      });
  }

  updateTricks = (e) => {
    axios.put(`${SERVER_URL}/tricks/2`)
    .then(tricks => {
      this.setState({
        quantity: tricks.data.quantity + 1 
      })
    })
    .catch(err => {
      console.log('Error updating post:', err);
    });
  }
}

export default PlayDeadPage;