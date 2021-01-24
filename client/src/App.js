import React from "react";
import Axios from "axios";
import Navbar from "./Components/Navbar.jsx";
import AboutMe from "./Containers/AboutMe";
import ContentPosts from "./Containers/content-posts";
import { URL_FLAVIOAANDRES_API, REACT_ENV } from "./constants";
import ProsentationHeader from "./Components/PresentationHeader.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./colors.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: "posts",
      hiddenBlogs: false,
      posts: [],
      videos: [],
    };
  }
  handleContentType = (type) => {
    this.setState({
      hiddenBlogs: type === "video",
      hiddenVideo: type === "posts",
    });
    setTimeout(
      () =>
        this.setState({
          contentType: type,
        }),
      120
    );
  };

  componentDidMount() {
    this.requestBlogs();
  }

  requestBlogs = async () => {
    try {
      const { data } = await Axios.get(
        URL_FLAVIOAANDRES_API + `/${REACT_ENV}/posts`
      );
      const videos = [],
        posts = [];
      data.forEach((post) => {
        if (post.category === "VIDEO") videos.push(post);
        if (post.category === "POSTS") posts.push(post);
      });
      this.setState({
        posts: posts.slice(0, 6),
        videos: videos,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { contentType, hiddenBlogs, posts, hiddenVideo, videos } = this.state;
    return (
      <div className="App">
        <Router path="/">
          <Navbar/>
          <ProsentationHeader />
          <Route
            path="/"
            exact
            render={() => (
              <ContentPosts
                {...{
                  contentType,
                  hiddenBlogs,
                  posts,
                  hiddenVideo,
                  videos,
                  hiddenBlogs,
                  handleContentType: this.handleContentType,
                }}
              />
            )}
          />
          <Route exact path="/about" render={() => <AboutMe/>} />
        </Router>
      </div>
    );
  }
}

export default App;
