import { Images } from '@src/assets';
import { BaseLayout } from '@src/components';
import AppButton from '@src/components/AppButton';
import AppInput from '@src/components/AppInput';
import BaseAppBar from '@src/components/BaseAppBar';
import { useAppContext } from '@src/context';
import { Screen } from '@src/navigation/appNavigation.type';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const { colors } = useFlagTheme();
  const [selectedTab, setSelectedTab] = useState<'email' | 'mobile'>('email');
  const { navigation } = useAppContext();

  return (
    <BaseLayout>
      <View style={{ flex: 1 }}>
        <BaseAppBar title="Sign In" isShow={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[Typography.paddingHorizontal20, { flex: 1 }]}>
            <View style={{ height: scaleHeight(20) }} />
            <Image
              source={Images.APP_LOGO}
              resizeMode="contain"
              style={{ width: scaleWidth(175), height: scaleHeight(54) }}
            />
            <View style={{ height: scaleHeight(8) }} />
            <Text style={[Typography.fontBold, Typography.textSize24, { color: colors.textColor }]}>
              Welcome Back!
            </Text>
            <View style={{ height: scaleHeight(5) }} />
            <Text
              style={[
                Typography.textSize16,
                Typography.fontRegular,
                { color: colors.color828282 },
              ]}>
              Sign in to your account
            </Text>
            <View style={{ height: scaleHeight(20) }} />

            {/* Tabbar View */}
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.colorFAFAFA,
                padding: scaledSize(4),
                borderRadius: scaledSize(10),
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                style={[
                  {
                    flex: 1,
                    paddingVertical: scaleHeight(12),
                    borderRadius: scaledSize(10),
                    alignItems: 'center',
                  },
                  selectedTab === 'email'
                    ? {
                      backgroundColor: colors.buttonColor,
                    }
                    : {
                      backgroundColor: colors.colorFAFAFA,
                    },
                ]}
                onPress={() => setSelectedTab('email')}>
                <Text
                  style={[
                    Typography.fontBold,
                    Typography.textSize14,
                    selectedTab === 'email'
                      ? {
                        color: colors.colorFFFFFF,
                      }
                      : {
                        color: colors.color828282,
                      },
                  ]}>
                  Email
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  {
                    flex: 1,
                    paddingVertical: scaleHeight(12),
                    borderRadius: scaledSize(10),
                    alignItems: 'center',
                  },
                  selectedTab === 'mobile'
                    ? {
                      backgroundColor: colors.buttonColor,
                    }
                    : {
                      backgroundColor: colors.colorFAFAFA,
                    },
                ]}
                onPress={() => setSelectedTab('mobile')}>
                <Text
                  style={[
                    Typography.fontBold,
                    Typography.textSize14,
                    selectedTab === 'mobile'
                      ? {
                        color: colors.colorFFFFFF,
                      }
                      : {
                        color: colors.color828282,
                      },
                  ]}>
                  Mobile Number
                </Text>
              </TouchableOpacity>
            </View>

            {selectedTab === 'email' ? (
              <AppInput title="Email" image={Images.EMAIL_ICON} />
            ) : (
              <AppInput title="Mobile Number" image={Images.CALL_ICON} />
            )}
            <AppInput title="Password" image={Images.PS_ICON} isPassword={true} />

            <Text
              style={[
                Typography.textSize14,
                Typography.fontRegular,
                { color: colors.buttonColor, textAlign: 'right' },
              ]}>
              Forgot Password?
            </Text>
            <View style={{ height: scaleHeight(20) }} />
            <AppButton title="Sign In" onPress={() => { }} />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: scaleHeight(15),
                paddingVertical: scaleHeight(15),
                borderWidth: 1,
                borderColor: colors.buttonColor,
                borderRadius: scaledSize(10),
              }}>
              <Text
                style={{
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                  color: colors.buttonColor,
                }}>
                Continue with guest
              </Text>
            </View>

            <Image
              source={Images.OR_ICON}
              style={{
                width: '70%',
                height: scaledSize(10),
                marginTop: scaleHeight(15),
                alignSelf: 'center',
              }}
            />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: scaleHeight(15),
                paddingVertical: scaleHeight(15),
                borderWidth: 1,
                borderColor: colors.buttonColor,
                borderRadius: scaledSize(10),
                flexDirection: 'row',
                gap: scaleWidth(10),
              }}>
              <Image
                source={Images.GOOGLE_ICON}
                style={{ width: scaledSize(20), height: scaledSize(20) }}
              />
              <Text
                style={{
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                  color: colors.textColor,
                }}>
                Continue with Google
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: scaleHeight(15),
                paddingVertical: scaleHeight(15),
                borderWidth: 1,
                borderColor: colors.buttonColor,
                borderRadius: scaledSize(10),
                flexDirection: 'row',
                gap: scaleWidth(10),
              }}>
              <Image
                source={Images.FACEBOOK_ICON}
                style={{ width: scaledSize(20), height: scaledSize(20) }}
              />
              <Text
                style={{
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                  color: colors.textColor,
                }}>
                Continue with Facebook
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate(Screen.SIGNUP)}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scaleHeight(40),
                  marginBottom: scaleHeight(32),
                }}>
                <Text
                  style={{
                    ...Typography.textSize14,
                    ...Typography.fontRegular,
                    color: colors.color828282,
                    textAlign: 'center',
                    marginTop: scaleHeight(15),
                    marginEnd: scaleWidth(5),
                  }}>
                  Don't have an account?
                </Text>
                <Text
                  style={{
                    ...Typography.textSize14,
                    ...Typography.fontBold,
                    color: colors.buttonColor,
                    textAlign: 'center',
                    marginTop: scaleHeight(15),
                  }}>
                  Sign up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};

export default LoginScreen;
function useAppNavigation(): { navigation: any } {
  throw new Error('Function not implemented.');
}
