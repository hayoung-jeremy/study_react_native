import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#000C40", "#F0F2F0"],
    title: "Thunderstorm",
    subTitle: "Who drilled a hole in the sky? 🧜‍♂️",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#2193b0", "#6dd5ed"],
    title: "Drizzle",
    subTitle: "",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#141E30", "#26a0da"],
    title: "Rain",
    subTitle: "Listen to the sound",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#9796f0", "#fbc7d4"],
    title: "Snow",
    subTitle: "Do you want to build a snowman? 🎅",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#acb6e5", "#86fde8"],
    title: "Atmosphere",
    subTitle: "",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f8b500", "#fceabb"],
    title: "Clear",
    subTitle: "Let's go for a picnic! 🐕",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["rgba(0,0,0,0.45)", "transparent"],
    title: "Clouds",
    subTitle: "not so happy ☁",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#636FA4", "#E8CBC0"],
    title: "Haze",
    subTitle: "If I were you, I wouldn't go out",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Mist",
    subTitle: "It's like you have no glasses on",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Dust",
    subTitle: "Thank you China 🤬",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // gradient : [ "top", "bottom" ]
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={{ ...styles.temp, ...styles.textColorWhite }}>
          {temp}℃
        </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={{ ...styles.title, ...styles.textColorWhite }}>
          {weatherOptions[condition].title}
        </Text>
        <Text style={{ ...styles.subTitle, ...styles.textColorWhite }}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
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
  textColorWhite: {
    color: "white",
    textShadowColor: "rgba(0,0,0,.15)",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  temp: {
    fontSize: 32,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
