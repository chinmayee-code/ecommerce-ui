import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, { useCallback, useRef } from 'react';
import {
  TapGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { width: SIZE } = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image);

const Calender = () => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  // const rTextStyle = useAnimatedStyle(() => ({
  //   opacity: opacity.value,
  // }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  // const onSingleTap = useCallback(() => {
  //   opacity.value = withTiming(0, undefined, (isFinished) => {
  //     if (isFinished) {
  //       opacity.value = withDelay(500, withTiming(1));
  //     }
  //   });
  // }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={()=>{
        console.log('single tap');
      }}
      >
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}
        >
          <Animated.View>
            <ImageBackground
              source={require('../assets/images/image.png')}
              style={styles.image}
            >
              <AnimatedImage
                source={require('../assets/images/heart5.png')}
                style={[
                  styles.image,
                  {
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode={'center'}
              />
            </ImageBackground>
            {/* <Animated.Text style={[styles.turtles, rTextStyle]}>
              🐢🐢🐢🐢
            </Animated.Text> */}
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
    </GestureHandlerRootView>
  )
}

export default Calender;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
      width: SIZE,
      height: SIZE,
    },
})