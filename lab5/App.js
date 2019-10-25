import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { CITIES, getWeatherBackgroundImage, getWeatherIcon } from "./utils";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";





export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: true,
      location: {
        name: "",
        main: { temp: "" },
        wind: { speed: "" },
        weather: [{ main: "", description: "" }]
      }
    };
  }

  componentDidMount() {
    getLocationAsync();
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }
  
    const location = await Location.getCurrentPositionAsync();
    getWeather(location.coords.latitude, location.coords.longitude);
  };
  
  getWeather = async (latitude, longitude, imgUrl = "") => {
    this.setState({
      loading : true
    })
    const API_KEY = "66360a0146ee4b625686466b173def00";
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  
    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      
      this.setState({
        location : { ...jsonData, imgUrl }
      })
    } catch (error) {
      this.setState({
        error: true
      })
    }
    this.setState({
      loading : false
    })
  };

  106.707954 = () => (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  );

  _renderWeatherCard = ({location, error, loading}) => {
    const temperatureC = (location.main.temp - 273.15).toFixed(2);
    const temperatureF = (((location.main.temp - 273.15) * 9) / 5 + 32).toFixed(
      2
    );
    const description = location.weather[0].description;
    const windSpeed = location.wind.speed;
    const icon = location.weather[0].main;
  
    const capitalizedDescription =
      description && description.charAt(0).toUpperCase() + description.slice(1);
  
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <Text>Error fetching weather!</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.weatherContainer}>
          {this.state.loading && <LoadingUI />}
          <View style={styles.row}>
            <MaterialIcons name="location-city" size={25} color="lightgrey" />
            <Text style={styles.locationText}>{location.name}</Text>
          </View>
          <View style={[styles.row, { marginTop: 10 }]}>
            <MaterialCommunityIcons
              size={25}
              color="lightgrey"
              name="speedometer"
            />
            <Text style={styles.text}>{windSpeed}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              size={25}
              color="lightgrey"
              name={getWeatherIcon(icon)}
            />
            <Text style={styles.text}>{capitalizedDescription}</Text>
          </View>
  
          <View style={styles.tempRow}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                size={25}
                color="lightgrey"
                name="temperature-fahrenheit"
              />
              <Text style={styles.text}>{temperatureF}</Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                size={25}
                color="lightgrey"
                name="temperature-celsius"
              />
              <Text style={styles.text}>{temperatureC}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  
  
  
  render () {
    const WeatherCard = (props) => this._renderWeatherCard(props);
    return (
      <View style={styles.bg}>
        <WeatherCard error={this.state.error} loading={this.state.loading} location={this.state.location} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  weatherContainer: {
    padding: 20,
    width: "90%",
    borderWidth: 1,
    maxWidth: "90%",
    minHeight: "20%",
    marginTop: "70%",
    borderRadius: 25,
    marginBottom: "2%",
    borderColor: "white",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold"
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  cityContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cityName: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  cityButton: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "25%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  tempRow: {
    alignSelf: "center",
    flexDirection: "row"
  },
  locationText: {
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  currentLocation: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "72.5%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20,33,61,0.6)"
  }
});
