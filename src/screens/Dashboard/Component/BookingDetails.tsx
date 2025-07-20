import { Images } from '@src/assets';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface BookingItem {
  id: string;
  petName: string;
  petBreed: string;
  ownerName: string;
  time: string;
  date: string;
  service: string;
  location: string;
  price: string;
  distance: string;
  status: string;
  image: string;
}

interface BookingDetailsProps {
  filteredBookings?: BookingItem[];
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ filteredBookings }) => {
  const { colors } = useFlagTheme();
  
  // Default bookings if no filtered bookings provided
  const defaultBookings: BookingItem[] = [
    {
      id: '1',
      petName: 'Simba',
      petBreed: 'Labrador',
      ownerName: 'Aarohi Sharma',
      time: '11:00 AM',
      date: 'Tuesday, 10 July',
      service: 'Full Grooming',
      location: 'Home Visit',
      price: '₹499',
      distance: '1.2 km away',
      status: 'Pending',
      image: 'https://your-image-url.com/simba.jpg',
    },
    {
      id: '2',
      petName: 'Cookie',
      petBreed: 'Persian',
      ownerName: 'Shruti Pandey',
      time: '12:00 AM',
      date: 'Tuesday, 10 July',
      service: 'Full Grooming',
      location: 'Home Visit',
      price: '₹499',
      distance: '1.8 km away',
      status: 'Pending',
      image: 'https://your-image-url.com/cookie.jpg',
    },
  ];

  const bookings = filteredBookings || defaultBookings;

  const renderItem = ({ item }: { item: BookingItem }) => (
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: scaleHeight(16),
        paddingHorizontal: scaleWidth(20),
        marginHorizontal: 0,
        borderRadius: scaleHeight(12),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: scaleHeight(16),
        width: '100%',
      }}>
      {/* Top Section - Pet Details & Price */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: scaleHeight(16),
        }}>
        <Image
          source={Images.DUMMY1}
          style={{
            width: scaledSize(60),
            height: scaledSize(60),
            borderRadius: scaleHeight(30),
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
            {item.petBreed}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              ...Typography.fontBold,
              ...Typography.textSize16,
              color: colors.textColor,
            }}>
            {item.price}
          </Text>
          <Text
            style={{
              ...Typography.fontRegular,
              ...Typography.textSize14,
              color: colors.color828282,
            }}>
            Paid
          </Text>
        </View>
      </View>

      {/* Middle Section - Booking Details */}
      <View
        style={{
          marginBottom: scaleHeight(16),
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
            }}>
            {item.time}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: scaleHeight(6),
          }}>
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={Images.B_ADDRESS}
            resizeMode="contain"
            style={{ width: scaledSize(16), height: scaledSize(16), marginRight: scaleWidth(8) }}
          />
          <Text
            style={{
              color: colors.color828282,
              ...Typography.fontRegular,
              ...Typography.textSize14,
            }}>
            {item.location}
          </Text>
        </View>
      </View>

      {/* Separator */}
      <View
        style={{
          height: 1,
          backgroundColor: colors.color828282,
          marginVertical: scaleHeight(12),
          opacity: 0.3,
        }}
      />

      {/* Bottom Section - Owner Details & Actions */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: scaleHeight(16),
        }}>
        <Image
          source={Images.DUMMY1}
          style={{
            width: scaledSize(50),
            height: scaledSize(50),
            borderRadius: scaleHeight(25),
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
              ...Typography.textSize14,
              color: colors.textColor,
              marginBottom: scaleHeight(2),
            }}>
            {item.ownerName}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.B_ADDRESS}
              resizeMode="contain"
              style={{ width: scaledSize(12), height: scaledSize(12), marginRight: scaleWidth(4) }}
            />
            <Text
              style={{
                ...Typography.fontRegular,
                ...Typography.textSize12,
                color: colors.color828282,
              }}>
              {item.distance}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: scaleWidth(8),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.buttonColor,
              width: scaledSize(40),
              height: scaledSize(40),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scaleHeight(8),
            }}>
            <Image
              source={Images.CALL2}
              resizeMode="contain"
              style={{
                width: scaledSize(20),
                height: scaledSize(20),
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.buttonColor,
              width: scaledSize(40),
              height: scaledSize(40),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scaleHeight(8),
            }}>
            <Image
              source={Images.CHAT2}
              resizeMode="contain"
              style={{
                width: scaledSize(20),
                height: scaledSize(20),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View
        style={{
          flexDirection: 'row',
          gap: scaleWidth(12),
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.buttonColor,
            paddingVertical: scaleHeight(12),
            borderRadius: scaleHeight(8),
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              ...Typography.fontBold,
              ...Typography.textSize14,
            }}>
            Accept
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingVertical: scaleHeight(12),
            borderRadius: scaleHeight(8),
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.buttonColor,
          }}>
          <Text
            style={{
              color: '#EB5757',
              ...Typography.fontBold,
              ...Typography.textSize14,
            }}>
            Reject
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={bookings}
      scrollEnabled={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default BookingDetails;
