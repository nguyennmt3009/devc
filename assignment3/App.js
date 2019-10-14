import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList  } from 'react-native';

const CHOICES = [
    {
      name: 'rock',
      uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
    },
    {
      name: 'paper',
      uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
    },
    {
      name: 'scissors',
      uri:
        'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
    }
  ];


export default function App() {
    const [gamePromt, setGamePromt] = useState("Fire")
    return (
      <View style={styles.container}>
        <View>
          <Text>Please enter the value of the currency you want to convert!</Text>
          <FlatList 
          data={CHOICES}
          renderItem={(item)=> <CustomButton name={item.item.name} uri={item.item.uri}/>} 
          />
        </View>
      </View>
    );
}

class CustomButton extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render () 
  {
    return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    </View>
    )
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e9ebee'
      },
      buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
      },
      buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
      },
      choicesContainer: {
        margin: 10,
        borderWidth: 2,
        paddingTop: 100,
        shadowRadius: 5,
        paddingBottom: 100,
        borderColor: 'grey',
        shadowOpacity: 0.90,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { height: 5, width: 5 },
      },
      choiceContainer: {
        flex: 1,
        alignItems: 'center',
      },
      choiceDescription: {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
      },
      choiceCardTitle: {
        fontSize: 30,
        color: '#250902'
      },
      choiceImage: {
        width: 150,
        height: 150,
        padding: 10,
      }
});
