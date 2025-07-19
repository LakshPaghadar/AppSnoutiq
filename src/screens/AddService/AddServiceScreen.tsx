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
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const AddServiceScreen = () => {
  const { colors } = useFlagTheme();
  const { navigation } = useAppContext();
  return (
    <BaseLayout>
      <View style={{ flex: 1 }}>
        <BaseAppBar title="Add Services" isShow={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[Typography.paddingHorizontal20, { flex: 1 }]}>
            <View style={{ height: scaleHeight(10) }} />

            <AppInput title="Service Name" image={Images.B_NAME} />
            <AppInput title="Price (in ₹)" image={Images.RUPEE} />
            <AppInput title="Duration" rightImage={Images.DROP_DOWN} />
            <AppInput title="Pet Type" rightImage={Images.DROP_DOWN} />
            <AppInput title="Add Notes (Optional)" image={Images.PS_ICON} />

            <View style={{ height: scaleHeight(10) }} />
            <AppButton
              title="Save this Service"
              onPress={() => {
                navigation.navigate(Screen.CREATE_PROFILE);
              }}
            />
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
                  source={Images.PLUS}
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
                  Add Another Service
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};

export default AddServiceScreen;
