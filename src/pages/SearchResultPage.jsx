import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";

class SearchResultPage extends Component {
  componentDidMount() {
    const searchQuery = this.props.match.params.searchQuery;
    console.log("i am getting mounted");
    this.props.fetchSearchVideos(searchQuery);
  }

  componentDidUpdate(prevProps) {
    const prevSearchQuery = prevProps.match.params.searchQuery;
    const newSearchQuery = this.props.match.params.searchQuery;
    if (prevSearchQuery === newSearchQuery) {
      console.log("Do not Update");
    } else {
      console.log(prevSearchQuery, newSearchQuery);
    }
  }

  render() {
    return this.props.videos ? (
      <Videos videos={this.props.videos.items} mode="search" />
    ) : (
      <h1>Loading...</h1>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    videos: storeState.videoState.videos,
  };
};

export default connect(mapStateToProps, { fetchSearchVideos })(
  SearchResultPage
);
