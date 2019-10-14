import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

const ConversionTypeButton = props => {
  const backgroundColor =
    props.fromCurrency === props.from && props.toCurrency === props.to
      ? 'lightblue'
      : null;
  const buttonStyle = { backgroundColor: backgroundColor };
  
  return (
    <TouchableOpacity 
      style={[styles.button, buttonStyle]}
      onPress={() => props.setConversionCurrencies(props.from, props.to)}
    >
      <Text style={styles.buttonText}>
        {props.from} to {props.to}
      </Text>
    </TouchableOpacity>
  );
};

const FormattedCurrency = props => {
  const format = props.type === 'USD' ? 'us-US' : 'vi-VI';
  const currency = props.type === 'USD' ? 'USD' : 'VND';

  const formatter = new Intl.NumberFormat(format, {
    currency,
    style: 'currency'
  });

  return (
    <Text style={styles.currencyText}>
      {formatter.format(props.value)} 
    </Text>
  );
};

export default function App() {
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromCurrency, setFromCurrency] = useState('VND');
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);

  const convertCurrency = () => {
    let value;
    if (fromCurrency === 'VND') {
      value = currentCurrencyValue / 23000;
    } else {
      value = 23000 * currentCurrencyValue;
    }
    setConvertedValue(value);
  };

  useEffect(convertCurrency);

  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };

  return (
    <View style={styles.container}>
      <Text>Please enter the value of the currency you want to convert!</Text>
      <TextInput 
        autoFocus
        textAlign="center"
        placeholder="100,000,000 VND"
        selectionColor="red"
        keyboardType="number-pad"
        onChangeText={setFromCurrencyValue}
        style={{
          height: 60,
          padding: 5,
          width: 300,
          fontSize: 35,
          borderWidth: 1,
          borderColor: 'lightblue'
        }}
      />
      <ConversionTypeButton 
        to="USD" 
        from="VND"
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <ConversionTypeButton to="VND" from="USD" 
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />

      <Text>Current currency:</Text>
      <Text style={styles.currencyText}>
        {currentCurrencyValue}
      </Text>
      <Text>Conversion currenecy:</Text>
      <Text style={styles.currencyText}>{convertedCurrencyValue}</Text>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center'
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  }
});
