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
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import CustomTimePicker from '@src/components/CustomTimePicker';

const SelectTimeScreen = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysFull = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const { colors } = useFlagTheme();
  const { navigation } = useAppContext();

  // State for time selection
  const [timeSlots, setTimeSlots] = useState(
    daysFull.map(() => ({ start: '10:00 AM', end: '08:00 PM' }))
  );
  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickerDayIndex, setPickerDayIndex] = useState<number | null>(null);
  const [pickerField, setPickerField] = useState<'start' | 'end' | null>(null);
  const [pickerValue, setPickerValue] = useState('');

  const handleTimePress = (dayIndex: number, field: 'start' | 'end') => {
    setPickerDayIndex(dayIndex);
    setPickerField(field);
    setPickerValue(timeSlots[dayIndex]?.[field] ?? '');
    setPickerVisible(true);
  };

  const handleTimeSelect = (time: string) => {
    if (pickerDayIndex !== null && pickerField) {
      const updated = [...timeSlots];
      if (updated[pickerDayIndex]) {
        updated[pickerDayIndex][pickerField] = time;
        setTimeSlots(updated);
      }
    }
  };

  const renderItem2 = ({ item, index }: { item: string; index: number }) => (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 8,
        padding: scaleHeight(20),
        marginHorizontal: scaleWidth(5),
        marginBottom: scaleHeight(20),
        shadowColor: '#A1A5A7',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.18,
        shadowRadius: 15,
        elevation: 5,
      }}>
      <Text
        style={{
          color: colors.textColor,
          ...Typography.fontBold,
          ...Typography.textSize16,
          marginBottom: scaleHeight(8),
        }}>
        {item}
      </Text>
      <View style={{ flexDirection: 'row', marginBottom: scaleHeight(12) }}>
        <View style={{ flex: 1, marginRight: scaleWidth(8) }}>
          <AppInput
            title="Start Time"
            rightImage={Images.TIME_ICON}
            containerStyle={{ width: '100%' }}
            readOnly={true}
            isShowHint={false}
            value={timeSlots[index]?.start ?? ''}
            titleStyle={{ color: colors.color828282, ...Typography.fontRegular, ...Typography.textSize16 }}
            onPress={() => handleTimePress(index, 'start')}
          />
        </View>
        <View style={{ flex: 1, marginLeft: scaleWidth(8) }}>
          <AppInput
            title="End Time"
            rightImage={Images.TIME_ICON}
            containerStyle={{ width: '100%' }}
            readOnly={true}
            isShowHint={false}
            value={timeSlots[index]?.end ?? ''}
            titleStyle={{ color: colors.color828282, ...Typography.fontRegular, ...Typography.textSize16 }}
            onPress={() => handleTimePress(index, 'end')}
          />
        </View>
      </View>
      <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={Images.PLUS}
          style={{ width: scaleWidth(20), height: scaleHeight(20), tintColor: colors.buttonColor }}
        />
        <View style={{ width: scaleHeight(5) }} />
        <Text style={{ ...Typography.fontMedium, ...Typography.textSize14, color: colors.buttonColor }}>
          Add Break
        </Text>
      </Pressable>
    </View>
  );

  const renderItem = ({ item }: { item: string }) => (
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
            renderItem={({ item }) => (
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
            )}
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
            renderItem={({ item, index }) => renderItem2({ item, index })}
          />
        </View>
        <View style={{ height: scaleHeight(10) }} />
        <AppInput
          title="Buffer Time Between Appointment"
          rightImage={Images.DROP_DOWN}
          containerStyle={{ marginBottom: scaleHeight(10) }}
        />
        <View style={{ height: scaleHeight(10) }} />
        <AppButton
          title="Save Availability"
          onPress={() => {
            navigation.navigate(Screen.DASHBOARD);
          }}
          style={{ marginBottom: scaleHeight(32) }}
        />
        <CustomTimePicker
          visible={pickerVisible}
          onClose={() => setPickerVisible(false)}
          onSelect={time => {
            handleTimeSelect(time);
            setPickerVisible(false);
          }}
          currentValue={pickerValue}
        />
      </View>
    </BaseLayout>
  );
};

export default SelectTimeScreen;
