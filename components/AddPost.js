import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { some, isEmpty } from "lodash";
import { api } from "../services";
import Input from "./Input";
import Button from "./Button";

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, text) {
    this.setState({ [name]: text });
  }

  async handleSubmit() {
    if (some(this.state, isEmpty)) {
      console.log("The form is not valid");
      return;
    }

    try {
      const post = await api.Posts.add({ ...this.state });
      this.props.onSuccess(post);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Fake the title"
          value={this.state.title}
          onChange={text => this.handleChange("title", text)}
        />
        <Input
          placeholder="What's on your mind?"
          value={this.state.body}
          onChange={text => this.handleChange("body", text)}
          style={styles.body}
          multiline={true}
        />
        <Button
          onPress={this.handleSubmit}
          style={styles.submit}
          title="Add Post"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  body: {
    minHeight: 80,
    maxHeight: 80
  }
});
