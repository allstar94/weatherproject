import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';

export default class extends React.Component {
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      console.log(Response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    }catch(error){
        Alert.alert("can't find you.", "so sad");
    }
  }
  componentDidMount(){
    this.getLocation;s
  }
  render(){
    return <Loading/>;
  }
}