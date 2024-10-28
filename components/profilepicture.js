import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon
import { PermissionsAndroid } from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
// Function to request camera permission
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission",
        message: "App needs access to your camera",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      Alert.alert('Permission Denied', 'Camera permission is required to upload a profile picture.');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

const ProfilePicture = ({ containerSize = containerSize }) => {  // Default size is 160, you can adjust it
  const [imageUri, setImageUri] = useState(null);

  // Function to open the image picker
  const selectImage = async () => {
    const hasPermission = Platform.OS === 'android' ? await requestCameraPermission() : true;

    if (hasPermission) {
      const options = {
        mediaType: 'photo', // Only allow images (no videos)
        maxWidth: 300, // Resize image
        maxHeight: 300,
        quality: 1, // High-quality image
      };

      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else if (response.assets) {
          const selectedImage = response.assets[0].uri;
          setImageUri(selectedImage);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={selectImage} 
        style={[styles.imageContainer, { width: containerSize, height: containerSize, borderRadius: containerSize / 2 }]}
      >
        {imageUri ? (
          <Image 
            source={{ uri: imageUri }} 
            style={[styles.image, { width: containerSize, height: containerSize, borderRadius: containerSize / 2 }]} 
          />
        ) : (
          <Icon1 name="account-circle" size={containerSize * 0.4}  color="#888" />
        )}

        {/* Camera icon, positioned slightly outside the profile image */}
        <View style={[styles.cameraIcon, { bottom: -containerSize * 0.03, right: -containerSize * 0.0 }]}>
          <Icon name="camera-outline" size={containerSize * 0.15} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#f0f0f0', // Light background for better contrast
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#ddd', // Light border for subtle definition
    shadowColor: '#000', // Shadow for modern look
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // Elevation for Android shadow
  },
  image: {
    // No additional styling needed as width and height are dynamic
  },
  cameraIcon: {
    position: 'absolute',
    backgroundColor: '#007BFF', // Blue background for camera icon
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50, // Circular icon background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4, // Adjusted padding for smaller icon
  },
});

export default ProfilePicture;
