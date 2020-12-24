import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Jst don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#007ADF"],
        title: "",
        subtitle: ""
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89E7FE", "#66A6FF"],
        title: "",
        subtitle: ""
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00c6EB", "#005BEA"],
        title: "",
        subtitle: ""
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "",
        subtitle: ""
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "",
        subtitle: ""
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["89F7FE", "#66A6FF"],
        title: "",
        subtitle: ""
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FFF253", "#FF7300"],
        title: "clear",
        subtitle: "you should go outside"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "",
        subtitle: ""
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "",
        subtitle: ""
    }
}


export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={weatherOption[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOption[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOption[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm",
        "Drizzle", "Rain", "Snow", "Clouds", "Atmosphere", "Clear", "Mist", "Haze", "Dust",]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 52,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems: "flex-start"
    }
});