import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './bottomTabNavigation'; // Your bottom tab navigator
import Code from './home'; // Your screens
import CustomDrawerContent from './CustomDrawerContent'; // Custom drawer content

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <More props />}
      screenOptions={{
        
      }}
    >
      <Drawer.Screen name="HomeTabs" component={BottomTab} />
      <Drawer.Screen name="Home" component={Code} />
      <Drawer.Screen name="Notifications" component={Code} />
      <Drawer.Screen name="Settings" component={Code} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
