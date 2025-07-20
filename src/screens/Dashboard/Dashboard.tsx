import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '@src/assets';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import AlertScreen from './AlertScreen';
import ClientScreen from './ClientScreen';
import ProfileScreen from './ProfileScreen';
import Font from '@src/utils/font';
import { scaledSize } from '@src/utils';

type TabParamList = {
  Home: undefined;
  Booking: undefined;
  Alert: undefined;
  Client: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

// Sample Screens

const DashboardScreen = () => {
  const { colors } = useFlagTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: any }) => ({
        headerShown: false,
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconSource;

          if (route?.name) {
            switch (route.name) {
              case 'Home':
                iconSource = Images.HOME_ICON;
                break;
              case 'Booking':
                iconSource = Images.BOOKING_ICON;
                break;
              case 'Alert':
                iconSource = Images.ALERT_ICON;
                break;
              case 'Client':
                iconSource = Images.CLIENT_ICON;
                break;
              case 'Profile':
                iconSource = Images.PROFILE_ICON;
                break;
              default:
                iconSource = Images.B_ADDRESS;
            }
          } else {
            iconSource = Images.B_ADDRESS;
          }

          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: colors.buttonColor,
        tabBarInactiveTintColor: colors.color828282,
        tabBarLabelStyle: { fontFamily: Font.Regular, fontSize: scaledSize(12) },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Alert" component={AlertScreen} />
      <Tab.Screen name="Client" component={ClientScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default DashboardScreen;

function useThemeColors() {
  throw new Error('Function not implemented.');
}
// export default HomeScreen;
