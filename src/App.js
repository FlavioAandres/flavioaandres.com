import React from "react";
import "./App.css";
import Item from "./Components/PostItem";
import VideoItem from "./Components/VideoItem";
import Navbar from "./Components/Navbar.jsx";
import ProsentationHeader from "./Components/PresentationHeader.jsx";
import "./colors.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: "posts",
      hiddenBlogs: false,
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
  render() {
    const { contentType, hiddenBlogs, hiddenVideo } = this.state;
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
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        ): (
          <div 
          className={
            "content-videos " + `${hiddenVideo ? "hidden-content" : ""}`
          }>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
          </div>

        )}
      </div>
    );
  }
}

export default App;
