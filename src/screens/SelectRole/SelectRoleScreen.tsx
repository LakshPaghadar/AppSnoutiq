import { Images } from '@src/assets';
import { BaseLayout } from '@src/components';
import AppButton from '@src/components/AppButton';
import BaseAppBar from '@src/components/BaseAppBar';
import { storage, StorageKeys, useAppContext } from '@src/context';
import { Screen } from '@src/navigation/appNavigation.type';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const SelectRoleScreen = () => {
  const { colors, setThemeFlag } = useFlagTheme();
  const { navigation } = useAppContext();
  const [selectedRole, setSelectedRole] = useState<number>(1);

  return (
    <BaseLayout>
      <View style={[Typography.flex1, Typography.paddingHorizontal20]}>
        <BaseAppBar title="I am a..." />
        <View style={[Typography.flex1]}>
          {/* PET_OWNER */}
          <TouchableOpacity
            onPress={() => {
              storage.setData(StorageKeys.SELECTED_ROLE, 1);
              setThemeFlag(1);
              setSelectedRole(1);
            }}>
            <View
              style={{
                borderRadius: 8,
                backgroundColor: colors.colorFAFAFA,
                borderColor: selectedRole === 1 ? colors.color2C9CDB : 'white',
                padding: 16,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 16,
              }}>
              <View
                style={{
                  width: scaleWidth(50),
                  height: scaleHeight(50),
                  backgroundColor: selectedRole === 1 ? colors.color2C9CDB : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  source={Images.PET_OWNER}
                  style={{
                    width: scaleWidth(25),
                    height: scaleHeight(25),
                  }}
                  tintColor={selectedRole === 1 ? 'white' : colors.color2C9CDB}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={[Typography.fontBold, Typography.textSize16, { color: colors.textColor }]}>
                  Pet Owner
                </Text>
                <View style={{ height: scaleHeight(8) }} />
                <Text
                  style={[
                    Typography.fontRegular,
                    Typography.textSize14,
                    { color: colors.textColor },
                  ]}>
                  Manage your pet’s care
                </Text>
              </View>
              <Image
                source={Images.NEXT_ICON}
                style={{ width: scaleWidth(24), height: scaleHeight(24) }}
              />
            </View>
          </TouchableOpacity>

          <View style={{ height: scaleHeight(16) }} />

          {/* VETE */}
          <TouchableOpacity
            onPress={() => {
              storage.setData(StorageKeys.SELECTED_ROLE, 2);
              setThemeFlag(2);
              setSelectedRole(2);
            }}>
            <View
              style={{
                borderRadius: scaleWidth(8),
                backgroundColor: colors.colorFAFAFA,
                borderColor: selectedRole === 2 ? colors.color2C9CDB : 'white',
                padding: scaledSize(16),
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: scaledSize(16),
              }}>
              <View
                style={{
                  width: scaleWidth(50),
                  height: scaleHeight(50),
                  backgroundColor: selectedRole === 2 ? colors.color2C9CDB : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  source={Images.VETE}
                  style={{
                    width: scaleWidth(25),
                    height: scaleHeight(25),
                  }}
                  tintColor={selectedRole === 2 ? 'white' : colors.color2C9CDB}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={[Typography.fontBold, Typography.textSize16, { color: colors.textColor }]}>
                  Veterinarian
                </Text>
                <View style={{ height: scaleHeight(8) }} />
                <Text
                  style={[
                    Typography.fontRegular,
                    Typography.textSize14,
                    { color: colors.textColor },
                  ]}>
                  Manage appointments & medical
                </Text>
              </View>
              <Image
                source={Images.NEXT_ICON}
                style={{ width: scaleWidth(24), height: scaleHeight(24) }}
              />
            </View>
          </TouchableOpacity>

          <View style={{ height: scaleHeight(16) }} />

          {/* GROOMER */}
          <TouchableOpacity
            onPress={() => {
              storage.setData(StorageKeys.SELECTED_ROLE, 3);
              setThemeFlag(3);
              setSelectedRole(3);
            }}>
            <View
              style={{
                borderRadius: scaleWidth(8),
                backgroundColor: colors.colorFAFAFA,
                borderColor: selectedRole === 3 ? colors.color2C9CDB : 'white',
                padding: scaledSize(16),
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 16,
              }}>
              <View
                style={{
                  width: scaleWidth(50),
                  height: scaleHeight(50),
                  backgroundColor: selectedRole === 3 ? colors.color2C9CDB : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  source={Images.GROOMER}
                  style={{
                    width: scaleWidth(25),
                    height: scaleHeight(25),
                  }}
                  tintColor={selectedRole === 3 ? 'white' : colors.color2C9CDB}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={[Typography.fontBold, Typography.textSize16, { color: colors.textColor }]}>
                  Groomer
                </Text>
                <View style={{ height: scaleHeight(8) }} />
                <Text
                  style={[
                    Typography.fontRegular,
                    Typography.textSize14,
                    { color: colors.textColor },
                  ]}>
                  Manage grooming slots & bookings
                </Text>
              </View>
              <Image
                source={Images.NEXT_ICON}
                style={{ width: scaleWidth(24), height: scaleHeight(24) }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <AppButton
          title="Continue"
          onPress={() => {
            navigation.navigate(Screen.LOGIN);
          }}
          buttonColor={colors.color2C9CDB}
        />
      </View>
    </BaseLayout>
  );
};

export default SelectRoleScreen;
