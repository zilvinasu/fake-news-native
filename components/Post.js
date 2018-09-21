import React from "react";
import { Text, View, ScrollableView, StyleSheet } from "react-native";
import { api } from "../services";

export default class Post extends React.Component {
  static navigationOptions = {
    title: "💩 ~ Post ~ 💩"
  };

  constructor(props) {
    super(props);
    this.state = {
      post: null
    };

    this.loadPost = this.loadPost.bind(this);
  }
  componentDidMount() {
    const id = this.props.navigation.getParam("id", "NO-ID");
    this.loadPost(id);
  }

  async loadPost(id) {
    try {
      const post = await api.Posts.findOne(id);
      console.log("post => ", post);
      this.setState({ post });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    if (this.state.post) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.state.post.title}</Text>
          <Text style={styles.body}>{this.state.post.body}</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F3F3F3",
    backgroundColor: "#FFFFFF",
    padding: 16,
    margin: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10
  },
  body: {
    color: "#1d2129"
  }
});
