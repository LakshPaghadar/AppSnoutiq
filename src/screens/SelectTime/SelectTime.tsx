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
import { FlatList, Image, Pressable, Text, View } from 'react-native';

const SelectTimeScreen = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysFull = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const { colors } = useFlagTheme();
  const { navigation } = useAppContext();
  const renderItem2 = ({ item }) => (
    <View
      style={{
        backgroundColor: 'white', // purple
        paddingVertical: scaleHeight(10),
        paddingHorizontal: scaleWidth(20),
        marginHorizontal: scaleWidth(5),
        padding: scaleHeight(16),
        borderRadius: scaleHeight(10),
        shadowColor: colors.colorA1A5A72E,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 25,
        marginBottom: scaleHeight(20),
        alignItems: 'flex-start',
      }}>
      <Text
        style={{
          color: colors.textColor,
          ...Typography.fontBold,
          ...Typography.textSize16,
          textAlign: 'center',
        }}>
        {item}
      </Text>
      <View style={{ height: scaleHeight(15) }} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{ flex: 1, alignItems: 'flex-start', width: '100%' }}>
          <AppInput
            title="Start Time"
            rightImage={Images.TIME_ICON}
            style={{ width: scaleWidth(90) }}
            readOnly={true}
            isShowHint={false}
            value="10:00 AM"
            titleStyle={{
              color: colors.color828282,
              ...Typography.fontRegular,
              ...Typography.textSize16,
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-start', width: '100%' }}>
          <AppInput
            title="End Time"
            rightImage={Images.TIME_ICON}
            style={{ width: scaleWidth(90) }}
            readOnly={true}
            isShowHint={false}
            value="8:00 PM"
            titleStyle={{
              color: colors.color828282,
              ...Typography.fontRegular,
              ...Typography.textSize16,
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image
          source={Images.PLUS}
          style={{ width: scaleWidth(20), height: scaleHeight(20), tintColor: colors.buttonColor }}
        />
        <View style={{ width: scaleHeight(5) }} />
        <Text
          style={{ ...Typography.fontMedium, ...Typography.textSize14, color: colors.buttonColor }}>
          Add Break
        </Text>
      </View>
      <View style={{ height: scaleHeight(10) }} />
    </View>
  );

  const renderItem = ({ item }) => (
    <Pressable
      style={{
        backgroundColor: colors.buttonColor, // purple
        borderRadius: scaledSize(8),
        paddingVertical: scaleHeight(10),
        paddingHorizontal: scaleWidth(20),
        marginRight: scaleWidth(10),
      }}>
      <Text
        style={{
          color: '#fff',
          ...Typography.fontBold,
          ...Typography.textSize16,
          textAlign: 'center',
        }}>
        {item}
      </Text>
    </Pressable>
  );
  return (
    <BaseLayout>
      <BaseAppBar title="Set Your Availability" isShow={true} />
      <View style={{ ...Typography.paddingHorizontal20, flex: 1 }}>
        <View style={{ height: scaleHeight(10) }} />
        <Text
          style={{ ...Typography.fontRegular, ...Typography.textSize16, color: colors.textColor }}>
          Select Working Days
        </Text>
        <View
          style={{
            paddingVertical: scaleHeight(10),
          }}>
          <FlatList
            data={days}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View style={{ height: scaleHeight(10) }} />
        <Text
          style={{ ...Typography.fontRegular, ...Typography.textSize16, color: colors.textColor }}>
          Set Daily Time Slots
        </Text>
        <View style={{ height: scaleHeight(10) }} />

        <View style={{ flex: 1 }}>
          <FlatList
            data={daysFull}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem2}
          />
        </View>
        <View style={{ height: scaleHeight(10) }} />
        <AppInput title="Buffer Time Between Appointment" rightImage={Images.DROP_DOWN} />
        <View style={{ height: scaleHeight(10) }} />
        <AppButton
          title="Save Availability"
          onPress={() => {
            navigation.navigate(Screen.DASHBOARD);
          }}
        />
      </View>
    </BaseLayout>
  );
};

export default SelectTimeScreen;
