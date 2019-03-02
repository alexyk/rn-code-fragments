import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class TopBarTwoButtonsBody extends Component {
  
  renderButton(type) {
    switch (type) {
      case 'left':
        return (
          <View style={[
            {
              backgroundColor:'red', width:50,height:30,
              alignSelf:'center',   justifyContent:'space-around',
              alignItems:'center',    flexDirection:'row',
              borderWidth:1
            }
          ]}>
            <View style={{backgroundColor:'white',width:5,height:5}}/>
            <Text style={{color:'white',backgroundColor:'green'}}>Left</Text>
          </View>
        )
        
    case 'right':
      return (
          <View style={[
            {
              backgroundColor:'blue', width:70,height:30,
              alignSelf:'center',   justifyContent:'space-around',
              alignItems:'center',    flexDirection:'row',
              borderWidth:1
            }
          ]}>
            <View style={{backgroundColor:'pink',width:5,height:5}}/>         
            <Text style={{color:'white',backgroundColor:'green'}}>Right</Text>
          </View>
      )
    }
  }
  
  
  render() {
    return (
      <View style={{
          flex:1,
          flexDirection: 'column',
          backgroundColor:'#777',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <View style={{
              flex:0.2,width:'100%',
              flexDirection: 'row',
              backrgoundColor:'pink',
              justifyContent:'space-between'
            }}>
              {this.renderButton('left')}
              {this.renderButton('right')}
            </View>
        
        <View style={{
            flex:0.8,width:'100%',
            fexDirection:'column',
            backgroundColor:'grey'
        }}>
        </View>
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => TopBarTwoButtonsBody);
