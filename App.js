import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class WeatherScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }
  getweather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=12.9716&lon=77.5946';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(Error => {
        console.error(Error);
      });
  };
  componentDidMount=()=>{
  this.getweather();
  }
  render(){
  if(this.state.weather === ''){
    return(
      <View style={styles.container}>
      <Text>Loading...</Text>
      
      </View>   
    );
  }
  else{
    return(
      <View style={styles.container}>
         <View style={styles.subContainer}>
        <Text style={styles.title}>Weather Forecast</Text>
        <Image style={styles.cloudImage} 
        source={require('./clouds.png')}/>
       <View style ={styles.textContainer}>
       <Text style={{fontSize:20}}>
       {this.state.weather.main.temp}&deg;C </Text> 
        <Text style={{ fontSize: 20, margin:10}}> 
        humidity : {this.state.weather.main.humidity} 
        </Text>
        <Text style={{fontSize: 20}}>
         {this.state.weather.weather[0].description}
       </Text>
       
       <Text style={{fontSize:20,marginLeft:6}}>Location: {this.state.weather.name}</Text>
        </View>        
        </View>
        </View>

    )
  }
  }
  }
const styles = StyleSheet.create({
 container:{
   flex:1
 },
subContainer:{
  borderWidth:1,
  alignItems:'center',
  flex:1
},
title:{
  marginTop:50,
  fontSize:20,
  fontWeight:'550'
},
cloudImage:{
width:200,
height:200,
marginTop:30
},
textContainer:{
flex:1,
alignItems:'center',
flexDirection:'column',
marginTop:10
}

})