import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MoreScreen(props) {
  return (
    <View style={styles.container}>
      <Text>MoreScreen</Text>
    </View>
  );
}

MoreScreen.navigationOptions = {
  title: "More"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});
