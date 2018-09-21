import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { api } from "../services";
import PostListItem from "./PostListItem";
import AddPost from "./AddPost";

class PostList extends Component {
  static navigationOptions = {
    title: "💩 ~ Fake News ~ 💩"
  };

  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.loadPosts = this.loadPosts.bind(this);
    this.onAddPostSuccess = this.onAddPostSuccess.bind(this);
    this.onPressPost = this.onPressPost.bind(this);
  }

  componentDidMount() {
    this.loadPosts();
  }

  onAddPostSuccess(post) {
    this.setState({ posts: [post, ...this.state.posts] });
  }

  onPressPost(id) {
    this.props.navigation.navigate("Post", { id });
  }

  async loadPosts() {
    const posts = await api.Posts.all();
    this.setState({ posts }, () => {
      console.log("New State => ", JSON.stringify(this.state));
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <ScrollView style={styles.content}>
        <AddPost onSuccess={this.onAddPostSuccess} />
        {posts &&
          posts.map(post => (
            <PostListItem
              key={post.id}
              post={post}
              onPress={() => this.onPressPost(post.id)}
            />
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%"
  }
});

export default PostList;
