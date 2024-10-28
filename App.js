import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Button } from "react-native";
import Code from "./components/home"; // Ensure this is properly imported
import Ionicons from 'react-native-vector-icons/Ionicons';  // Correct Import
import BottomTab from "./components/bottomTabNavigation";
import DrawerNavigation from "./components/DrawerNavigation";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from './components/CustomDrawerContent';

const App = () => {
  return (
   
    
   // <GestureHandlerRootView style={{ flex: 1 }}>
   //   <NavigationContainer>
   //     <DrawerNavigation />
   //   </NavigationContainer>
//
   //   
   // </GestureHandlerRootView>
   <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomTab />
        </GestureHandlerRootView>
  

    
  )
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Text>Home Page is opened</Text>
      <Button title="Go to Browse" onPress={() => navigation.navigate('Browse')} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
