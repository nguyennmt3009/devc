import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Button } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function Item({ title, imageUrl, content, publishedAt }) {
  return (
    <View style={styles.container}>
      <Card 
        title={title} 
        image={{uri: imageUrl}}
      >
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>{title}</Text>
        </View>
        <Text >{content}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {publishedAt}
          </Text>
        </View>
        <Button title="Read more" backgroundColor="#03A9F4" />
              
      </Card>
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
    return (
      <SafeAreaView style={styles.containerFlex}>
          <FlatList
            data = {this.state.articles}
            renderItem={({ item }) => <Item 
              title={item.source.name} 
              imageUrl={item.urlToImage}
              content={item.content}
              publishedAt={item.publishedAt}
            />}
            keyExtractor={item => item.url}
          />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  }
});
