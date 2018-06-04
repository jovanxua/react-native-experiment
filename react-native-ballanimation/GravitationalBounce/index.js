import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  Dimensions
} from 'react-native';

import styles from './styles';

const speed = 1000;
class GravitationalBounce extends Component {
  constructor(props) {
    super(props);
    const { height, width } = Dimensions.get('window');
    this.state = {
      xPos:  new Animated.Value((width/2)-25),
      yPos: new Animated.Value(0),
      dSpinValue: new Animated.Value(0),
      dAngleFrom: new Animated.Value(360),
      dAngleTo: new Animated.Value(0),
      imgSize: 50,
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    const { height, width } = Dimensions.get('window');
    const { 
      xPos,
      yPos,
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
          duration: speed,
        }),
        Animated.timing(yPos, {
          toValue: height * 0.3,
          duration: speed,
        }),
        Animated.timing(dSpinValue, {
          toValue: 0.5,
          duration: speed,
        }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.xPos, {
          toValue: 0,
          duration: speed,
        }),
        Animated.timing(yPos, {
          toValue: (height-100) - (imgSize*1.5),
          duration: speed,
        }),
        Animated.timing(dSpinValue, {
          toValue: 0,
          duration: speed,
        }),
      ]),
    ])).start()
  }

  render() {
    const { 
      xPos, 
      yPos,
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
              top: yPos
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

export default GravitationalBounce;
