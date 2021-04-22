import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#000C40", "#F0F2F0"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#2193b0", "#6dd5ed"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#141E30", "#26a0da"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#9796f0", "#fbc7d4"],
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#acb6e5", "#86fde8"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f8b500", "#fceabb"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["rgba(0,0,0,0.45)", "transparent"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#636FA4", "#E8CBC0"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#757F9A", "#D7DDE8"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // gradient : [ "top", "bottom" ]
      colors={weatherOptions["Atmosphere"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions["Atmosphere"].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

// data type 확인
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
