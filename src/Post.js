import View from "./test";
import axios from "axios";
import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { Link} from "react-router-dom";



class Post extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userId: "",
      body: "",
      title: "",
    };
  }

  // get
  getPosts = async () => {
    try {
      const { data: posts } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({
        posts,
      });
      //   console.log(data);
    } catch (err) {
      console.log("error:", err);
    }
  };

  // post
  createPost = async () => {
    console.log(this.state);
    try {
      const { userId, title, body } = this.state;
      const { data: post } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId: userId,
          title: title,
          body: body,
        }
      );
      let posts = [...this.state.posts];
      posts.push(post);
      this.setState({ posts, userId: "", title: "", body: "" });
      console.log(post);
    } catch (err) {
      console.log("error:", err);
    }
  };

  // update
  updatePost = async () => {
    console.log(this.state);
    try {
      const { id, userId, title, body } = this.state;
      const { data: post } = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          userId: userId,
          title: title,
          body: body,
        }
      );

      let posts = [...this.state.posts];
      const index = posts.findIndex((post) => post.id === id);
      posts[index] = post;
      this.setState({ posts, userId: "", title: "", body: "" });
    } catch (err) {
      console.log("error:", err);
    }
  };

  // delete
  deletePost = async (postid) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postid}`
      );
      let posts = [...this.state.posts];
      posts = posts.filter((post) => post.id !== postid);
      //   console.log("post-id: ", `${postid} deleted`);
      this.setState({ posts });
    } catch (err) {
      console.log("error:", err);
    }
  };

  componentDidMount() {
    this.getPosts();
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.updatePost();
    } else {
      this.createPost();
    }
    // this.setState({});
  };

  selectPostToUpdate = (post) => {
    this.setState({
      ...post,
    });
    console.log(post);
  };

// viewpost = (ids) => {
// this.state({

// })
// console.log(ids)
// }


  render() {
    return (
      <>
        <h1>Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User ID: </label>
            <input
              name="userId"
              type="text"
              value={this.state.userId}
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
          </div>
          <div>
            <label>Title: </label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
          </div>
          <div>
            <label>Body: </label>
            <input
              name="body"
              type="text"
              value={this.state.body}
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
          </div>
          <div>
            <Button size="sm" type="submit">
              Post
            </Button>
          </div>
        </form>
        <br />

        <Table striped bordered hover size="sm" variant="dark" responsive>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.userId}</td>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.body}</td>
                  <td>
                    <Link to={`/post/${e.id}`}>
                  <Button
                      size="sm"
                      variant="info"
                      // onClick={() => this.viewpost()}
                    >
                      View
                    </Button>
                    </Link>
                    <br/>
                    <br/>
                    <Button
                      size="sm"
                      onClick={() => this.selectPostToUpdate(e)}
                    >
                      Update
                    </Button>
                    <br />
                    <br />
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => this.deletePost(e.id)}
                    >
                      Delete
                    </Button>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
       <View date="hi this is post component"/>
      </>
    );
  }
}

export default Post;
