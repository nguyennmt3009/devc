import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TimelineScreen(props) {
  return (
    <View style={styles.container}>
      <Text>MessagesScreen</Text>
    </View>
  );
}

TimelineScreen.navigationOptions = {
  title: "Timeline"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});
