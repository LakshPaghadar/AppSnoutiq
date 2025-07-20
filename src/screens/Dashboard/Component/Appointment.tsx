import { Images } from '@src/assets';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();
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
    {
      id: '3',
      petName: 'Luna',
      ownerName: 'Guru Sharma',
      time: '11:00 AM',
      date: 'Tuesday, 15 July',
      petType: 'Cat',
      service: 'Saloon',
      status: 'Cancelled',
      image: 'https://your-image-url.com/luna.jpg',
    },
  ];

  const handleViewDetails = () => {
    navigation.navigate('APPOINTMENT_DETAILS' as never);
  };

  const renderItem = ({ item }: { item: AppointmentItem }) => (
    <View style={styles.appointmentCard}>
      {/* Pet Profile Image */}
      <Image
        source={Images.DUMMY1}
        style={styles.petImage}
      />

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Header Row with Pet Name and Status */}
        <View style={styles.headerRow}>
          <View style={styles.petInfo}>
            <Text style={[styles.petName, { color: colors.textColor }]}>
              {item.petName}
            </Text>
            <Text style={[styles.ownerName, { color: colors.color828282 }]}>
              by {item.ownerName}
            </Text>
          </View>

          {/* Status Badge */}
          <View style={[
            styles.statusBadge,
            {
              backgroundColor: item.status === 'Confirmed'
                ? colors.buttonColor
                : item.status === 'Upcoming'
                  ? '#F9C841'
                  : '#E5E5E5',
            }
          ]}>
            <Text style={[
              styles.statusText,
              { color: item.status === 'Cancelled' ? colors.textColor : 'white' }
            ]}>
              {item.status}
            </Text>
          </View>
        </View>

        {/* Appointment Details - All Left Aligned */}
        <View style={styles.detailsContainer}>
          {/* Time and Date Row */}
          <View style={styles.detailRow}>
            <Image
              source={Images.TIME_ICON}
              style={styles.detailIcon}
              resizeMode="contain"
            />
            <Text style={[styles.detailText, { color: colors.color828282 }]}>
              {item.time}
            </Text>
            <View style={styles.dateContainer}>
              <Image
                source={Images.CALENDAR}
                style={styles.detailIcon}
                resizeMode="contain"
              />
              <Text style={[styles.detailText, { color: colors.color828282 }]}>
                {item.date}
              </Text>
            </View>
          </View>

          {/* Pet Type */}
          <View style={styles.detailRow}>
            <Image
              source={Images.DASH_33}
              style={styles.detailIcon}
              resizeMode="contain"
            />
            <Text style={[styles.detailText, { color: colors.color828282 }]}>
              {item.petType}
            </Text>
          </View>

          {/* Service and View Details Row */}
          <View style={styles.serviceRow}>
            <View style={styles.serviceContainer}>
              <Image
                source={Images.SERVICE_ICON}
                style={styles.detailIcon}
                resizeMode="contain"
              />
              <Text style={[styles.detailText, { color: colors.color828282 }]}>
                {item.service}
              </Text>
            </View>

            <TouchableOpacity onPress={handleViewDetails}>
              <Text style={[styles.viewDetailsText, { color: colors.buttonColor }]}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
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

const styles = StyleSheet.create({
  appointmentCard: {
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
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  petImage: {
    width: scaledSize(60),
    height: scaledSize(60),
    borderRadius: scaleHeight(8),
    marginRight: scaleWidth(12),
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 0,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: scaleHeight(12),
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    marginBottom: scaleHeight(2),
  },
  ownerName: {
    ...Typography.fontRegular,
    ...Typography.textSize14,
  },
  statusBadge: {
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(6),
    borderRadius: scaleHeight(16),
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  detailsContainer: {
    width: '100%',
    marginTop: scaleHeight(8),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(6),
    paddingLeft: 0,
  },
  detailIcon: {
    width: scaledSize(16),
    height: scaledSize(16),
    marginRight: scaleWidth(8),
    tintColor: '#828282',
  },
  detailText: {
    ...Typography.fontRegular,
    ...Typography.textSize14,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleWidth(16),
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  viewDetailsText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AppointmentList;
