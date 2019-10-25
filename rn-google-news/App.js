import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { resolveUri } from 'expo-asset/build/AssetSources';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      articles: []
    };
    
  }

  componentDidMount() {
    this.getNews()
  }
// api key : 27ecf13f43ae413c9b1fb4365f7c977a
  getNews = async () => {
    let result = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=27ecf13f43ae413c9b1fb4365f7c977a')
    let data = await result.json()
    this.setState({
      loading: false,
      articles: data.articles
    })

  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}> 
          <Text>Loading...</Text>
        </View>
      )
    } else {
      console.log(this.state.articles[0].author) 
      return (
        
      );
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
