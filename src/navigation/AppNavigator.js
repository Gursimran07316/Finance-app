import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import {AntDesign,Ionicons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
  screenOptions={{ headerShown: false}}
  >
    <Tab.Screen name="Transactions" component={TransactionsStack} options={{
        tabBarActiveTintColor: '#add8e6',
        tabBarIcon:({focused})=>{
            const color= focused ?"#add8e6":"black"
         
          return   <Ionicons name="document-outline" size={24} color={color} />
          
          }
    }}/>
    <Tab.Screen name="Summary"  options={{
        headerShown: true,
      headerStyle: {
        backgroundColor: '#add8e6', // Light blue color
      },
      headerTintColor: '#fff', // White color for the text
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarActiveTintColor: '#add8e6', // Light blue color for the active tab
      tabBarIcon:({focused})=>{
        const color= focused ?"#add8e6":"black"
     
      return   <AntDesign name="info" size={24} color={color} />
      
      }
    }} >
        {()=><SummaryScreen/>}
        </Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
