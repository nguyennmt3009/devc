import React from "react";
import { StyleSheet,SafeAreaView, Text, View, Image, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

export default class MyHeader extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.item}></View>
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.item}>
          <Feather name="inbox" size={27} color="black" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 25
  },
  item: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10
  },
  logo: {
    flex: 1,
    height: 70
  }
});
