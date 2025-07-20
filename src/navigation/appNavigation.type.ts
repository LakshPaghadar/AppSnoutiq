import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsResult } from '@src/services';

export enum Screen {
  FORCE_UPDATE_SCREEN = 'FORCE_UPDATE_SCREEN',
  NETWORK_CHECK = 'NETWORK_CHECK',
  NEWS_DETAIL = 'NEWS_DETAIL',
  NEWS_LIST = 'NEWS_LIST',
  SETTING = 'SETTING',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  ONBOARDING = 'ONBOARDING',
  SELECT_ROLE = 'SELECT_ROLE',
  CREATE_PROFILE = 'CREATE_PROFILE',
  ADD_SERVICE = 'ADD_SERVICE',
  SELECT_TIME = 'SELECT_TIME',
  DASHBOARD = 'DASHBOARD',
  APPOINTMENT = 'APPOINTMENT',
  BOOKING_REQUESTS = 'BOOKING_REQUESTS',
  APPOINTMENT_DETAILS = 'APPOINTMENT_DETAILS',
}

export type NavStackParams = {
  [Screen.FORCE_UPDATE_SCREEN]: undefined;
  [Screen.NETWORK_CHECK]: undefined;
  [Screen.NEWS_DETAIL]: NewsDetailParams;
  [Screen.NEWS_LIST]: undefined;
  [Screen.SETTING]: undefined;
  [Screen.LOGIN]: undefined;
  [Screen.SIGNUP]: undefined;
  [Screen.ONBOARDING]: undefined;
  [Screen.SELECT_ROLE]: undefined;
  [Screen.CREATE_PROFILE]: undefined;
  [Screen.ADD_SERVICE]: undefined;
  [Screen.SELECT_TIME]: undefined;
  [Screen.DASHBOARD]: undefined;
  [Screen.APPOINTMENT]: undefined;
  [Screen.BOOKING_REQUESTS]: undefined;
  [Screen.APPOINTMENT_DETAILS]: undefined;
};

export type NewsDetailParams = {
  item: NewsResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;

export type NewsDetailRoute = RouteProp<NavStackParams, Screen.NEWS_DETAIL>;
