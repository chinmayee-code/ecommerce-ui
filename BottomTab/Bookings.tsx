// import { StyleSheet,SafeAreaView, Text,View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// // import Animated from 'react-native-reanimated';
// import { TouchableOpacity,  } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
//   withRepeat,
//   useAnimatedGestureHandler,
// } from 'react-native-reanimated';


  
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native'; 



const Bookings = () => {
  // const value=useState(new Animated.ValueXY({x:0,y:0}))[0]
  const progress = useRef(new Animated.Value(0.5)).current; // useSharedValue(0)
  const scale = useRef(new Animated.Value(1)).current;
  const SIZE = 100.0;

  useEffect(() => {
    // withTiming, withSpring

    // withRepeat
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
          Animated.spring(progress, { toValue: 0.5, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
          Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
        ]),
      ]),
      { iterations: 3 }
    ).start();
  }, []);

  
  
  // function moveBall() {
  //   Animated.timing(value,{
  //     toValue:{x:100, y:100},
  //     duration:1000,
  //     useNativeDriver:false
  //   }).start()
  // }
  return (
    <GestureHandlerRootView>
      {/* <Animated.View style={value.getLayout()}>
        <View style={{width:100,height:100,borderRadius:100/2,backgroundColor:'red'}} />
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Hey click me!</Text>
      </TouchableOpacity> */}
      <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: /* progress.value * SIZE / 2 */ progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
            // borderRadius: Animated.multiply(progress, SIZE / 2),
            opacity: progress,
            transform: [
              { scale },
              {
                rotate: /* progress.value * 2 * Math.PI */ progress.interpolate(
                  {
                    inputRange: [0.5, 1],
                    // outputRange: [Math.PI, 2 * Math.PI],
                    outputRange: ['180deg', '360deg'],
                  }
                ),
              },
              // {
              //   rotate: Animated.multiply(progress, 2 * Math.PI),
              // },
            ],
          },
        ]}
      />
    </View>

    </GestureHandlerRootView>
  )
}


export default Bookings;
const SIZE = 100.0;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        marginTop:290
        
    },
    square: {
      width: SIZE,
      height: SIZE,
      backgroundColor: 'rgba(0,0,256,0.5)',
    },
})