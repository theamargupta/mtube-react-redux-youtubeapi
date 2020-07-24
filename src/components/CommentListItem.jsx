import React, { Component } from "react";
import { Button, Collapse } from "reactstrap";
import Replies from "./Replies";

class CommentListItem extends Component {
  state = {
    isOpen: false,
  };

  render() {
    const {
      snippet: { topLevelComment },
      replies,
    } = this.props.comment;

    return (
      <div
        style={{
          textAlign: "left",
          padding: "2rem",
          fontWeight: "lighter",
          fontSize: "18px",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            width: 30,
            height: 30,
          }}
          src={topLevelComment.snippet.authorProfileImageUrl}
          alt="Author"
        />
        <p>User: {topLevelComment.snippet.authorDisplayName}</p>
        <p>Comment: {topLevelComment.snippet.textOriginal}</p>
        {replies !== undefined ? (
          <>
            <Button
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              {this.state.isOpen ? "Close Replies" : "Show Replies"}
            </Button>
            <Collapse isOpen={this.state.isOpen}>
              <Replies replies={[]} />
            </Collapse>
          </>
        ) : null}
      </div>
    );
  }
}
export default CommentListItem;
