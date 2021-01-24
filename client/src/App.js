import React from "react";
import "./App.css";
import Item from "./Components/PostItem";
import VideoItem from "./Components/VideoItem";
import Navbar from "./Components/Navbar.jsx";
import ProsentationHeader from "./Components/PresentationHeader.jsx";
import "./colors.css";
import { URL_FLAVIOAANDRES_API, REACT_ENV } from "./constants";
import Axios from "axios";

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

  requestBlogs = async () =>{
    try {
      const response = await Axios.get(URL_FLAVIOAANDRES_API + `/${REACT_ENV}/posts`)
      this.setState({
        posts: response.data,
      });
    } catch (error) {
      console.error(error)      
    }
  }

  render() {
    const { contentType, hiddenBlogs, posts, hiddenVideo } = this.state;
    return (
      <div className="App">
        <Navbar />
        <ProsentationHeader />
        <div className="content-type-container">
          <button
            onClick={() => this.handleContentType("posts")}
            className={contentType === "posts" && "selected"}
          >
            Posts
          </button>
          <button
            onClick={() => this.handleContentType("video")}
            className={contentType === "video" && "selected"}
          >
            Videos
          </button>
        </div>
        {contentType === "posts" ? (
          <div
            className={
              "content-blogs " + `${hiddenBlogs ? "hidden-content" : ""}`
            }
          >
            {posts.map((pub, idx) => (
              <Item key={pub._id + idx} {...pub} />
            ))}
          </div>
        ) : (
          <div
            className={
              "content-videos " + `${hiddenVideo ? "hidden-content" : ""}`
            }
          >
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </div>
        )}
      </div>
    );
  }
}

export default App;
