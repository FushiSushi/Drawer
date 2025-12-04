import React from 'react';
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
          backgroundColor: '#F8F9FA',
          width: 280,
        },
        drawerActiveTintColor: '#1976D2',
        drawerInactiveTintColor: '#666',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 2,
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: ' Accueil',
          drawerIcon: () => '🏠',
          headerTitleStyle: {
            color: '#1976D2',
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          title: 'Profil',
          drawerIcon: () => '👤',
          headerTitleStyle: {
            color: '#9C27B0',
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          title: 'Paramètres',
          drawerIcon: () => '⚙️',
          headerTitleStyle: {
            color: '#4CAF50',
            fontWeight: 'bold',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
