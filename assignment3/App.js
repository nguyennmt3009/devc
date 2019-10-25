import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image  } from 'react-native';

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
      uri:'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
    } 
  ];


export default function App() {
    const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
    const [userChoice, setUserChoice] = useState({});
    const [computerChoice, setComputerChoice] = useState({});

    this.state = {
      gamePrompt: 'Fire!',
      userChoice: {},
      computerChoice: {}
    }

    const getRoundOutcome = userChoice => {
      const computerChoice = randomComputerChoice().name;
      let result;

      if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
      }

      if (userChoice === computerChoice) result = 'Tie game!';
      return [result, computerChoice];
    };

    const randomComputerChoice = () =>
      CHOICES[Math.floor(Math.random() * CHOICES.length)];


    const onPress = playerChoice => {
          const [result, compChoice] = getRoundOutcome(playerChoice);
          const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
          const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);
          // alert(JSON.stringify(newUserChoice) + " " +JSON.stringify(newComputerChoice))

          setGamePrompt(result);
          setComputerChoice(newComputerChoice);
          setUserChoice(newUserChoice)
    };
    const getResultColor = () => {
      if (gamePrompt === 'Victory!') return 'green';
      if (gamePrompt === 'Defeat!') return 'red';
      return null;
    };
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, color:getResultColor()}}>{gamePrompt}</Text>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <View style={styles.choicesContainer}>
            <ChoiceCard player="Player" choice={userChoice} />
            <Text>vs</Text>
            <ChoiceCard player="Computer" choice={computerChoice} />
          </View>
        </View>
        <View>
          <FlatList 
          data={CHOICES}
          renderItem={(item)=> <CustomButton name={item.item.name} uri={item.item.uri} onPress={onPress}/>} 
          />
        </View>
      </View>
    );
}

class ChoiceCard extends React.Component {
  constructor(props){
    super(props);
  }


  render () 
  {
      const title = this.props.choice.name && this.props.choice.name.charAt(0).toUpperCase() + this.props.choice.name.slice(1);

    return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>{this.props.player}</Text>
      <Image source={{ uri:this.props.choice.uri}} resizeMode="contain" style={styles.choiceImage} />
      <Text style={styles.choiceCardTitle}>{title}</Text>
    </View>
    )
  }
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
      <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.onPress(this.props.name)}>
        <Text style={styles.buttonText}>
          {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
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
        alignItems:"center",
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