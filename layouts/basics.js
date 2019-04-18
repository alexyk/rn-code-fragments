import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    // main toggles
    const direction = 'row'; // row|column
    const align1 = 'flex-start'; // flex-start|flex-end|center
    const align2 = 'flex-end'; // flex-start|flex-end|center
    const align2Self = 'flex-end'; // flex-start|flex-end|center

    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: direction,
        justifyContent: align1, alignItems: align2
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue',
                     alignSelf: align2Self}} />
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

