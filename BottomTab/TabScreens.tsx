import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import Bookings from './Bookings';
import Calender from './Calender';
import Inbox from './Inbox';
import Profile from './Profile';
type screenType = {
  Home: undefined;
  Bookings: undefined;
  Calender: undefined;
  Inbox: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<screenType>();

const TabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#8E24AA',
        tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name='Bookings' component={Bookings} options={{tabBarIcon:({color,size})=>(<MaterialIcons name='library-books' color={color} size={size}/>),}}/> */}
      {/* <Tab.Screen name='Calender' component={Calender} options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name='calendar-month-outline' color={color} size={size}/>),}}/> */}
      {/* <Tab.Screen name='Inbox' component={Inbox} options={{tabBarIcon:({color,size})=>(<AntDesign name='message1' color={color} size={size}/>),}}/> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreens;
