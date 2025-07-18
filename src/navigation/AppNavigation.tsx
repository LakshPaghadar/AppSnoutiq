import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { isForceUpdate } from '@src/store';

import { NavStackParams, Screen } from './appNavigation.type';
import SplashScreen from '@src/screens/NewsList/SplashScreen';
import OnboardingScreen from '@src/screens/Onboarding/OnboardingScreen';
import SelectRoleScreen from '@src/screens/SelectRole/SelectRoleScreen';
import LoginScreen from '@src/screens/LoginScreen/LoginScreen';
import SignUpScreen from '@src/screens/Signup/SignupScreen';

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
        <Stack.Screen name={Screen.NEWS_LIST} component={SplashScreen} />
        <Stack.Screen name={Screen.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={Screen.SELECT_ROLE} component={SelectRoleScreen} />
        <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Screen.SIGNUP} component={SignUpScreen} />
      </Stack.Navigator>
    </>
  );
};
