import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { NavStackParams, Screen } from './appNavigation.type';
import SplashScreen from '@src/screens/NewsList/SplashScreen';
import OnboardingScreen from '@src/screens/Onboarding/OnboardingScreen';
import SelectRoleScreen from '@src/screens/SelectRole/SelectRoleScreen';
import LoginScreen from '@src/screens/LoginScreen/LoginScreen';
import SignUpScreen from '@src/screens/Signup/SignupScreen';
import CreateProfile from '@src/screens/CreateProfile/CreateProfile';
import AddServiceScreen from '@src/screens/AddService/AddServiceScreen';
import SelectTimeScreen from '@src/screens/SelectTime/SelectTime';
import DashboardScreen from '@src/screens/Dashboard/Dashboard';
import AppointmentScreen from '@src/screens/Appointment/AppointmentScreen';
import BookingRequestsScreen from '@src/screens/BookingRequests/BookingRequestsScreen';

export const navigationRef = React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const AppNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        {/* <Stack.Screen name={Screen.DASHBOARD} component={DashboardScreen} /> */}
        <Stack.Screen name={Screen.NEWS_LIST} component={SplashScreen} />
        <Stack.Screen name={Screen.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={Screen.SELECT_ROLE} component={SelectRoleScreen} />
        <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Screen.SIGNUP} component={SignUpScreen} />
        <Stack.Screen name={Screen.CREATE_PROFILE} component={CreateProfile} />
        <Stack.Screen name={Screen.ADD_SERVICE} component={AddServiceScreen} />
        <Stack.Screen name={Screen.SELECT_TIME} component={SelectTimeScreen} />
        <Stack.Screen name={Screen.DASHBOARD} component={DashboardScreen} />
        <Stack.Screen name={Screen.APPOINTMENT} component={AppointmentScreen} />
        <Stack.Screen name={Screen.BOOKING_REQUESTS} component={BookingRequestsScreen} />
      </Stack.Navigator>
    </>
  );
};
