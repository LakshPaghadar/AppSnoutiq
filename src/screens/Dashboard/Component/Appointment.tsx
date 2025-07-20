import { Images } from '@src/assets';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AppointmentList = () => {
  const { colors } = useFlagTheme();
  const appointments = [
    {
      id: '1',
      petName: 'Jack',
      ownerName: 'Prajwal Pachpinde',
      time: '10:00 AM',
      date: 'Tuesday, 10 July',
      petType: 'Dog',
      service: 'Full Grooming',
      status: 'Confirmed',
      image: 'https://your-image-url.com/jack.jpg',
    },
    {
      id: '2',
      petName: 'Bella',
      ownerName: 'Ajay Sharma',
      time: '11:00 AM',
      date: 'Tuesday, 12 July',
      petType: 'Cat',
      service: 'Full Grooming',
      status: 'Upcoming',
      image: 'https://your-image-url.com/bella.jpg',
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: 'white', // purple
        paddingVertical: scaleHeight(10),
        paddingHorizontal: scaleWidth(20),
        marginHorizontal: scaleWidth(5),
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
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: 12,

          elevation: 3,
          alignItems: 'center',
        }}>
        <Image
          source={Images.DUMMY1}
          style={{
            width: scaledSize(55),
            height: scaledSize(55),
            borderRadius: scaleHeight(10),
            marginRight: scaleWidth(10),
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              ...Typography.fontBold,
              ...Typography.textSize16,
              color: colors.textColor,
            }}>
            {item.petName}
          </Text>
          <Text
            style={{
              ...Typography.fontRegular,
              ...Typography.textSize14,
              color: colors.color828282,
            }}>
            by {item.ownerName}
          </Text>
        </View>

        <Text
          style={[
            {
              paddingHorizontal: scaleWidth(10),
              paddingVertical: scaleHeight(4),
              borderRadius: scaleHeight(120),
              fontWeight: 'bold',
              fontSize: 12,
            },
            item.status === 'Confirmed'
              ? {
                  backgroundColor: colors.buttonColor,
                  color: 'white',
                }
              : {
                  backgroundColor: '#F9C841',
                  color: 'white',
                },
          ]}>
          {item.status}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: scaleHeight(10),
        }}>
        <Image
          source={Images.DASH_31}
          resizeMode="contain"
          style={{ width: scaledSize(15), height: scaledSize(15), marginEnd: scaleWidth(5) }}
        />
        <Text
          style={{
            marginRight: 10,
            color: colors.color828282,
            ...Typography.fontRegular,
            ...Typography.textSize14,
          }}>
          {item.time}
        </Text>
        <Image
          source={Images.DASH_32}
          resizeMode="contain"
          style={{ width: scaledSize(15), height: scaledSize(15), marginEnd: scaleWidth(5) }}
        />
        <Text
          style={{
            marginRight: 10,
            color: colors.color828282,
            ...Typography.fontRegular,
            ...Typography.textSize14,
          }}>
          {item.date}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 3,
        }}>
        <Image
          source={Images.DASH_33}
          resizeMode="contain"
          style={{ width: scaledSize(15), height: scaledSize(15), marginEnd: scaleWidth(5) }}
        />
        <Text
          style={{
            marginRight: 10,
            color: colors.color828282,
            ...Typography.fontRegular,
            ...Typography.textSize14,
          }}>
          {item.petType}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 3,
          marginVertical: scaleHeight(10),
        }}>
        <Image
          source={Images.DASH_34}
          resizeMode="contain"
          style={{ width: scaledSize(15), height: scaledSize(15), marginEnd: scaleWidth(5) }}
        />
        <Text
          style={{
            marginRight: 10,
            color: colors.color828282,
            ...Typography.fontRegular,
            ...Typography.textSize14,
            flex: 1,
          }}>
          {item.service}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: '#A363F9',
              fontWeight: 'bold',
            }}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={appointments}
      scrollEnabled={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({});

export default AppointmentList;
