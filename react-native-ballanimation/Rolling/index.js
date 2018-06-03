import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  Dimensions
} from 'react-native';

import styles from './styles';

class Rolling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xPos:  new Animated.Value(0),
      dSpinValue: new Animated.Value(0),
      dAngleFrom: new Animated.Value(360),
      dAngleTo: new Animated.Value(0),
      imgSize: 100,
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    const { height, width } = Dimensions.get('window');
    const { 
      xPos,
      imgSize,
      dSpinValue,
      dAngleFrom,
      dAngleTo
    } = this.state;

    Animated.loop(Animated.sequence([
      Animated.timing(dAngleFrom, {
        toValue: 0,
        duration: 1,
      }),
      Animated.parallel([
        Animated.timing(xPos, {
          toValue: width - imgSize,
          duration: 5000,
        }),
        Animated.timing(dSpinValue, {
          toValue: 1,
          duration: 5000,
        }),
      ]),
      Animated.timing(dAngleTo, {
        toValue: 0,
        duration: 1,
      }),
      Animated.parallel([
        Animated.timing(this.state.xPos, {
          toValue: 0,
          duration: 5000,
        }),
        Animated.timing(dSpinValue, {
          toValue: 0,
          duration: 5000,
        }),
      ]),
    ])).start()
  }

  render() {
    const { 
      xPos, 
      imgSize, 
      dSpinValue,
      dAngleFrom,
      dAngleTo,
    } = this.state;
    const spin = dSpinValue.interpolate({
      inputRange: [0, 0.5],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <View style={styles.contBounceArea}>
          <Animated.Image
            resizeMethod='resize'
            style={{
              transform: [{rotate: spin}],
              height: imgSize, 
              width: imgSize,
              position: 'absolute',
              left: xPos,
              bottom: 0
            }}
            source={require('../assets/images/soccerball.png')}
          />
        </View>
        <View style={styles.contFloorArea}>
          <Image
            style={styles.imgGround}
            source={require('../assets/images/ground.png')}
            resizeMode='stretch'
          />
        </View>
      </View>
    );
  }
}

export default Rolling;
