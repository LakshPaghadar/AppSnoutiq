import { Images } from '@src/assets';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface AppointmentItem {
  id: string;
  petName: string;
  ownerName: string;
  time: string;
  date: string;
  petType: string;
  service: string;
  status: string;
  image: string;
}

const AppointmentList = () => {
  const { colors } = useFlagTheme();
  const appointments: AppointmentItem[] = [
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

  const renderItem = ({ item }: { item: AppointmentItem }) => (
    <View
      style={{
        backgroundColor: '#fff',
        paddingVertical: scaleHeight(16),
        paddingHorizontal: scaleWidth(10),
        marginHorizontal: scaleWidth(16),
        borderRadius: scaleHeight(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: scaleHeight(16),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: scaleHeight(12),
        }}>
        <Image
          source={Images.DUMMY1}
          style={{
            width: scaledSize(60),
            height: scaledSize(60),
            borderRadius: scaleHeight(12),
            marginRight: scaleWidth(12),
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
              marginBottom: scaleHeight(2),
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

        <View
          style={{
            backgroundColor: item.status === 'Confirmed' ? colors.buttonColor : '#F9C841',
            paddingHorizontal: scaleWidth(12),
            paddingVertical: scaleHeight(6),
            borderRadius: scaleHeight(20),
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            {item.status}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginBottom: scaleHeight(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: scaleHeight(6),
          }}>
          <Image
            source={Images.DASH_31}
            resizeMode="contain"
            style={{ width: scaledSize(16), height: scaledSize(16), marginRight: scaleWidth(8) }}
          />
          <Text
            style={{
              color: colors.color828282,
              ...Typography.fontRegular,
              ...Typography.textSize14,
              marginRight: scaleWidth(16),
            }}>
            {item.time}
          </Text>
          <Image
            source={Images.DASH_32}
            resizeMode="contain"
            style={{ width: scaledSize(16), height: scaledSize(16), marginRight: scaleWidth(8) }}
          />
          <Text
            style={{
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
            marginBottom: scaleHeight(6),
          }}>
          <Image
            source={Images.DASH_33}
            resizeMode="contain"
            style={{ width: scaledSize(16), height: scaledSize(16), marginRight: scaleWidth(8) }}
          />
          <Text
            style={{
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
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <Image
              source={Images.DASH_34}
              resizeMode="contain"
              style={{ width: scaledSize(16), height: scaledSize(16), marginRight: scaleWidth(8) }}
            />
            <Text
              style={{
                color: colors.color828282,
                ...Typography.fontRegular,
                ...Typography.textSize14,
              }}>
              {item.service}
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                color: colors.buttonColor,
                fontWeight: 'bold',
                fontSize: 14,
              }}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
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
