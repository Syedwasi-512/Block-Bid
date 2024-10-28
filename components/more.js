import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfilePicture from './profilepicture';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const More = () => {
  const [showSettingsOptions, setShowSettingsOptions] = useState(false);
  const [showHelpOptions, setShowHelpOptions] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <ProfilePicture containerSize={width * 0.3} /> 
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>John@gmail.com</Text>
      </View>

     
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="account-balance-wallet" size={24} color="#000" />
        <Text style={styles.menuItemText}>Wallet</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
         style={styles.menuItemContainer}
         onPress={() => setShowSettingsOptions(!showSettingsOptions)}
        >
         <View style={[styles.menuItem, showSettingsOptions && styles.menuItemExpanded]}>
           <Icon name="settings" size={24} color="#000" />
           <Text style={styles.menuItemText}>Settings</Text>
           <Icon name={showSettingsOptions ? 'expand-less' : 'expand-more'} size={24} color="#000" />
         </View>

         
         {showSettingsOptions && (
           <View style={styles.subMenu}>
             <TouchableOpacity style={styles.subMenuItem}>
               <Icon name="person" size={20} color="#000" />
               <Text style={styles.subMenuItemText}>Profile Settings</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.subMenuItem}>
               <Icon name="language" size={20} color="#000" />
               <Text style={styles.subMenuItemText}>Language</Text>
             </TouchableOpacity>
           </View>
         )}
      </TouchableOpacity>

    
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setShowHelpOptions(!showHelpOptions)}
      >
        <Icon name="help-outline" size={24} color="#000" />
        <Text style={styles.menuItemText}>Help & Support</Text>
        <Icon name={showHelpOptions ? 'expand-less' : 'expand-more'} size={24} color="#000" />
      </TouchableOpacity>

    
      {showHelpOptions && (
        <View style={styles.subMenu}>
          <TouchableOpacity style={styles.subMenuItem}>
            <Text style={styles.subMenuItemText}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subMenuItem}>
            <Icon name="support-agent" size={20} color="#000" />
            <Text style={styles.subMenuItemText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      )}

      
      <TouchableOpacity style={styles.logoutButton} onPress={() => {/* Handle Log Out */}}>
        <Icon name="exit-to-app" size={24} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    padding: width * 0.04,
    marginTop: height * 0.05,
  },
  profileName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
  },
  profileEmail: {
    color: '#007bff',
    marginTop: 4,
    fontSize: width * 0.04,
  },
  menuItemContainer: {
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  menuItemExpanded: {
    borderBottomWidth: 0, // Remove the bottom border when expanded to merge with the submenu
  },
  menuItem: {
    flexDirection: 'row',
   alignItems: 'center',
    padding: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
   // justifyContent: 'space-between',
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: width * 0.04,
  },
  subMenu: {
    paddingLeft: width * 0.04,
   // backgroundColor: '#000050',
    padding: width * 0.04,
    backgroundColor:'white',
  },
  subMenuItem: {
    paddingVertical: 14,
    flexDirection: 'row',
    borderWidth: 2,
    margin: 5,
    borderRadius: 8,
   // backgroundColor: '#000030',
   backgroundColor:'white',
  },
  subMenuItemText: {
    fontSize: width * 0.035,
    color: '#555',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: width * 0.04,
    borderRadius: 8,
    backgroundColor: '#d9534f', // Using preferred red color
    margin: width * 0.02,
    marginTop: height * 0.1,
    elevation: 2, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoutText: {
    marginLeft: 12,
    fontSize: width * 0.04,
    color: '#fff', // White text for contrast
    fontWeight: 'bold',
  },
});

export default More;
