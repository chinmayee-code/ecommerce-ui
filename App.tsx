import React from "react";
import {View} from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import { CheckIcon, Icon,  } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import TabScreens from "./BottomTab/TabScreens";
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function App() {
  return (
    
      <NavigationContainer>
         <TabScreens/>
      </NavigationContainer>
    
  );
}