import { Box, NativeBaseProvider,Text,Avatar } from 'native-base';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';




  

  

const Inbox = () => {

  
  return (
    <NativeBaseProvider config={config}>
      <Box bg={{linearGradient: {
          colors: ['#e8ccff', '#912ed3'],
          start: [0, 0],
          end: [1, 0]
          }
        }} mt='20'w='90%'ml={5} h='30%'rounded="xl"_text={{fontSize: 'md',fontWeight: 'medium',color: 'warmGray.500',textAlign: 'center'}}>
        
        <Avatar bg="amber.500" ml={24} mt={-35} source={{uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} size="2xl">NB
           <Avatar.Badge bg="green.500" />
        </Avatar>
      </Box>
    </NativeBaseProvider>
  )
  
}
// const config = {
//   dependencies: {
//     'linear-gradient': LinearGradient
//   }
// };
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default Inbox;

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    
})