import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MyHeader from "./components/MyHeader";

export default function App() {
  return (
    <View style={styles.container}>
      <MyHeader />
      <View style={styles.row}>

        <View style={styles.avatarWrapper} >
          <Image
            source={ require('./assets/image.jpg')}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50
            }}
            resizeMode="cover"
          />
          <Text style={styles.name}>CoderSchool</Text>
        </View>
        
      </View>
      <View style={styles.row}></View>
      <View style={styles.row}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "red",
    flexDirection: 'column',
    width: '100%',
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingStart: 20
  },
  name: {
    fontSize: 20,
  },
  postImage: {

  }
});
