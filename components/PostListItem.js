import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PostListItem = ({ post, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.title} onPress={onPress}>
      {post.title}
    </Text>
    <Text style={styles.body}>{post.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#F3F3F3",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16
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

export default PostListItem;
