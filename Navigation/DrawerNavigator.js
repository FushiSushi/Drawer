import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: 'white',
          width: 260,
        },
        drawerActiveTintColor: '#007AFF',
        drawerInactiveTintColor: '#8E8E93',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
          marginLeft: -20,
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        },
        headerTintColor: '#1a1a1a',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 17,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Accueil',
          drawerIcon: ({ color }) => <Text style={{color, fontSize: 16}}>🏠</Text>,
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          title: 'Profil',
          drawerIcon: ({ color }) => <Text style={{color, fontSize: 16}}>👤</Text>,
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          title: 'Réglages',
          drawerIcon: ({ color }) => <Text style={{color, fontSize: 16}}>⚙️</Text>,
        }}
      />
    </Drawer.Navigator>
  );
}
