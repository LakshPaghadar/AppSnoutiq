import { Images } from '@src/assets';
import { BaseLayout } from '@src/components';
import AppButton from '@src/components/AppButton';
import AppInput from '@src/components/AppInput';
import BaseAppBar from '@src/components/BaseAppBar';
import CustomProgressBar from '@src/components/ProfileProgressBar';
import { useAppContext } from '@src/context';
import { Screen } from '@src/navigation/appNavigation.type';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const CreateProfile = () => {
  const { colors } = useFlagTheme();
  const { navigation } = useAppContext();
  return (
    <BaseLayout>
      <BaseAppBar title="Create Profile" isShow={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ ...Typography.paddingHorizontal20, alignItems: 'center', width: '100%' }}>
          <View style={{ height: scaleHeight(10) }} />
          <TouchableOpacity>
            <Image
              source={Images.ADD_PROFILE}
              style={{ width: scaleWidth(85), height: scaleHeight(85) }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              ...Typography.fontMedium,
              ...Typography.textSize14,
              marginTop: scaleHeight(15),
              color: colors.textColor,
            }}>
            Add profile photo
          </Text>
          <View style={{ height: scaleHeight(15) }} />
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              padding: scaleHeight(16),
              borderRadius: scaleHeight(10),
              shadowColor: colors.colorA1A5A72E,
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 3.84,
              elevation: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: scaleHeight(10),
              }}>
              <Image
                source={Images.PROFILE_CHECK}
                style={{
                  height: scaleHeight(20),
                  width: scaleWidth(20),
                  marginRight: scaleWidth(10),
                  tintColor: colors.buttonColor,
                }}
              />
              <Text
                style={{
                  ...Typography.fontSemiBold,
                  ...Typography.textSize16,
                  color: colors.textColor,
                }}>
                Verified Professional
              </Text>
            </View>
            <CustomProgressBar progress={0.7} />

            <Text
              style={{
                ...Typography.fontMedium,
                ...Typography.textSize14,
                marginTop: scaleHeight(10),
                color: colors.textColor,
              }}>
              Complete verification to show trust badge
            </Text>
          </View>
          <View style={{ height: scaleHeight(20) }} />
          <View style={{ width: '100%' }}>
            <AppInput title="Business/Profession Name" image={Images.B_NAME} />
            <AppInput title="License Number" image={Images.L_NAME} />
            <AppInput title="Groomer’s Name" image={Images.PERSON} />
            <AppInput title="Business Address" image={Images.B_ADDRESS} />
            <AppInput title="Service Type" rightImage={Images.DROP_DOWN} />
            <AppInput title="Working Since" image={Images.WORKING} />

            <AppInput
              title="Describe Your Serviced"
              numberOfLines={4}
              multiline
              textAlignVertical="top"
            />

            <AppInput title="Email" image={Images.EMAIL_ICON} />

            <AppInput title="Mobile Number" image={Images.CALL_ICON} />
            <View style={{ height: scaleHeight(20) }} />
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: scaleHeight(13),
                  borderWidth: 1,
                  borderColor: colors.buttonColor,
                  borderStyle: 'dashed',
                  borderRadius: 8,
                }}>
                <Image
                  source={Images.CAMERA}
                  style={{
                    width: scaleWidth(20),
                    height: scaleHeight(20),
                    tintColor: colors.buttonColor,
                    marginRight: scaleWidth(10),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    ...Typography.fontRegular,
                    ...Typography.textSize14,
                    color: colors.buttonColor,
                  }}>
                  Upload PDF OR JPG
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ height: scaleHeight(20) }} />
            <AppButton
              title="Publish Profile"
              onPress={() => {
                navigation.navigate(Screen.ADD_SERVICE);
              }}
            />
            <View style={{ height: scaleHeight(20) }} />
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default CreateProfile;
