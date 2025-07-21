import { Images } from '@src/assets';
import { BaseLayout } from '@src/components';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { FlagThemeProvider, useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { FlatList, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import AppointmentList from './Component/Appointment';
import BookingDetails from './Component/BookingDetails';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '@src/navigation/appNavigation.type';

const HomeScreen = () => {
  const list = [1, 2, 3, 4, 5];
  const { colors } = useFlagTheme();
  const navigation = useNavigation();
  const list2 = [
    { title: 'Manage Service', image: Images.DASH_21 },
    { title: 'Add Booking', image: Images.DASH_22 },
    { title: 'Create Offer', image: Images.DASH_23 },
    { title: ' Walk-In Client', image: Images.DASH_22 },
    { title: 'Appointments', image: Images.DASH_24 },
  ];

  const renderItem2 = ({ item }: { item: any }) => {
    return (
      <View
        style={{
          marginEnd: scaleWidth(20),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "white"
        }}>
        <View
          style={{
            backgroundColor: colors.buttonColor,
            width: scaledSize(44),
            height: scaledSize(44),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scaleHeight(10),
          }}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{
              width: scaledSize(25),
              height: scaledSize(25),
              alignSelf: 'center',
            }}
          />
        </View>

        <Text
          style={{
            ...Typography.fontMedium,
            ...Typography.textSize14,
            color: colors.textColor,
            textAlign: 'center',
            marginTop: scaleHeight(10),
            maxWidth: scaleWidth(70),
          }}
          numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  const renderItem1 = ({ item }: { item: number }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Screen.APPOINTMENT as never)}
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
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{ ...Typography.fontRegular, ...Typography.textSize14, color: colors.textColor }}>
          Today's Bookings
        </Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: scaleHeight(15) }}>
          <View
            style={{
              backgroundColor: colors.buttonColor,
              width: scaledSize(44),
              height: scaledSize(44),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scaleHeight(10),
              marginEnd: scaleWidth(10),
            }}>
            <Image
              source={Images.DASH_11}
              resizeMode="contain"
              style={{
                width: scaledSize(25),
                height: scaledSize(25),

                alignSelf: 'center',
              }}
            />
          </View>
          <Text
            style={{ ...Typography.fontBold, ...Typography.textSize24, color: colors.textColor }}>
            {item}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scaleHeight(15) }}>
          <Image
            source={Images.DASH_111}
            style={{
              width: scaledSize(20),
              height: scaledSize(20),
              marginEnd: scaleWidth(10),
              tintColor: colors.buttonColor,
            }}
          />
          <Text
            style={{
              ...Typography.fontRegular,
              ...Typography.textSize14,
              color: colors.buttonColor,
            }}>
            +2 this Week
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <BaseLayout>
      <ScrollView>
        <View style={{ flex: 1, ...Typography.paddingHorizontal20 }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  ...Typography.fontBold,
                  ...Typography.textSize24,
                  color: colors.textColor,
                }}>
                Dashboard
              </Text>
              <Text
                style={{
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                  color: colors.color828282,
                }}>
                Groomer
              </Text>
            </View>

            <Image
              source={Images.NOTIFICATION_ICON}
              style={{ width: scaledSize(44), height: scaledSize(44), marginEnd: scaleWidth(10) }}
            />
            <Image
              source={Images.CHAT_ICON}
              style={{ width: scaledSize(44), height: scaledSize(44) }}
            />
          </View>

          <View style={{ height: scaleHeight(20) }} />
          <View>
            <FlatList data={list} horizontal renderItem={renderItem1} />
          </View>

          <Text
            style={{
              ...Typography.fontBold,
              ...Typography.textSize16,
              color: colors.textColor,
              marginBottom: scaleHeight(15),
            }}>
            Quick Action
          </Text>
          <View>
            <FlatList data={list2} horizontal renderItem={renderItem2} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: scaleHeight(25),
            }}>
            <Text
              style={{
                ...Typography.fontBold,
                ...Typography.textSize16,
                color: colors.textColor,
              }}>
              Today’s Appointments
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(Screen.APPOINTMENT as never)}>
              <Text
                style={{
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                  color: colors.buttonColor,
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, marginTop: scaleHeight(15) }}>
            <AppointmentList />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: scaleHeight(25),
            }}>
            <Text
              style={{
                ...Typography.fontBold,
                ...Typography.textSize16,
                color: colors.textColor,
              }}>
              Booking Requests
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(Screen.APPOINTMENT as never)}>
              <Text
                style={{
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                  color: colors.buttonColor,
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, marginTop: scaleHeight(15) }}>
            <BookingDetails />
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default HomeScreen;
