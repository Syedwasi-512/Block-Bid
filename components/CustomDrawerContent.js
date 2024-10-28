import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomDrawerContent = (props) => {
  const handleLogout = () => {
    // Implement your logout functionality here
    console.log('Logout button pressed');
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      {/* User Profile Section */}

      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
       
        </View>
        <Text style={styles.profileName}>Qasim Ali</Text>
        <Text style={styles.profileEmail}>qasim512@gmail.com</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerItems}>
        <DrawerItem
          label="Home"
          labelStyle={{color:'white'}}
          icon={({ color, size }) => <Ionicons name="home-outline" size={size} color='white' />}
          onPress={() => props.navigation.navigate('HomeTabs')}
        />
        <DrawerItem
          label="Notifications"
          labelStyle={{color:'white'}}
          icon={({ color, size }) => <Ionicons name="notifications-outline" size={size} color='white' />}
          onPress={() => props.navigation.navigate('Notifications')}
        />
        <DrawerItem
          label="Settings"
          labelStyle={{color:'white'}}
          icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color='white' />}
          onPress={() => props.navigation.navigate('Settings')}
        />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(53, 42, 121, 1)',
  },
  profileSection: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 0,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth:1,
    backgroundColor:'white',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
   
  },
  profileEmail: {
    fontSize: 14,
    color:'white',
    
  },
  drawerItems: {
    flex: 1,
    marginTop: 20,
    color:'white',
    
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    
  },
  logoutText: {
    fontSize: 18,
    marginLeft: 10,
     color:'white',
  },
});

export default CustomDrawerContent;
