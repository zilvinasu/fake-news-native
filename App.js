import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation";
import { api } from "./services";
import PostList from "./components/PostList";
import Post from "./components/Post";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

const RootStack = createStackNavigator(
  {
    Home: PostList,
    Post: Post
  },
  { initialRouteName: "Home" }
);

const App = () => <RootStack />;

export default App;
