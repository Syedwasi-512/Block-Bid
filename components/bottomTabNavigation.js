import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home';
import More from './more';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Browse') {
                iconName = focused ? 'search' : 'search-outline'; 
              } else if (route.name === 'Create Bid') {
                iconName = focused ? 'create' : 'add-circle-outline'; 
              } else if (route.name === 'Notification') {
                iconName = focused ? 'notifications' : 'notifications-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }
              else if (route.name === 'More') {
                iconName = focused ? 'menu' : 'menu-outline';
              }
    
  
              return <Ionicons name={iconName} size={size * 1} color={color} />;
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: { backgroundColor: '#000050' , height:60 , borderWidth:2 },
            headerShown: false,
            tabBarLabel: '',
            tabBarIconStyle: {
              alignSelf:'center',
              marginTop: 13,    // Example to add margin
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Browse" component={Home} />
          <Tab.Screen name="Create Bid" component={Home} />
          <Tab.Screen name="Notification" component={Home} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Profile" component={Home} />
          <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
      
        </NavigationContainer>
    )};

    export default BottomTab;