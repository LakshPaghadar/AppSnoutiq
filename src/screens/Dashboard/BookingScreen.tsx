import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import BookingDetails from './Component/BookingDetails';
import { Images } from '@src/assets';
import { useNavigation } from '@react-navigation/native';

type DateFilterType = 'All' | 'Today\'s' | 'Tomorrow' | 'Choose date';
type StatusFilterType = 'Pending' | 'Accepted' | 'Completed';

const BookingScreen = () => {
  const { colors } = useFlagTheme();
  const navigation = useNavigation();
  const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilterType>('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<StatusFilterType>('Pending');

  const dateFilters: DateFilterType[] = ['All', 'Today\'s', 'Tomorrow', 'Choose date'];
  const statusFilters: StatusFilterType[] = ['Pending', 'Accepted', 'Completed'];

  const handleDateFilterPress = (filter: DateFilterType) => {
    setSelectedDateFilter(filter);
    console.log('Date filter changed to:', filter);
  };

  const handleStatusFilterPress = (filter: StatusFilterType) => {
    setSelectedStatusFilter(filter);
    console.log('Status filter changed to:', filter);
  };

  const handleAddPress = () => {
    // Handle add new booking request
    console.log('Add new booking request');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Filter the bookings based on selected filters
  const getFilteredBookings = () => {
    // This would normally filter from a larger dataset
    // For now, we'll show different data based on filters
    const baseBookings = [
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
      {
        id: '3',
        petName: 'Max',
        petBreed: 'Golden Retriever',
        ownerName: 'Rahul Kumar',
        time: '2:00 PM',
        date: 'Wednesday, 11 July',
        service: 'Full Grooming',
        location: 'Home Visit',
        price: '₹599',
        distance: '0.8 km away',
        status: 'Accepted',
        image: 'https://your-image-url.com/max.jpg',
      },
      {
        id: '4',
        petName: 'Luna',
        petBreed: 'Siamese',
        ownerName: 'Priya Singh',
        time: '10:30 AM',
        date: 'Thursday, 12 July',
        service: 'Basic Grooming',
        location: 'Home Visit',
        price: '₹399',
        distance: '2.1 km away',
        status: 'Completed',
        image: 'https://your-image-url.com/luna.jpg',
      },
    ];

    let filteredBookings = baseBookings;

    // Filter by status
    filteredBookings = filteredBookings.filter(booking => 
      booking.status === selectedStatusFilter
    );

    // Filter by date (simplified logic)
    if (selectedDateFilter === 'Today\'s') {
      filteredBookings = filteredBookings.filter(booking => 
        booking.date.includes('Tuesday, 10 July')
      );
    } else if (selectedDateFilter === 'Tomorrow') {
      filteredBookings = filteredBookings.filter(booking => 
        booking.date.includes('Wednesday, 11 July')
      );
    }

    return filteredBookings;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader
        title="Booking Requests"
        rightIcon={Images.PLUS_PURPLE}
        onRightPress={handleAddPress}
        onBackPress={handleBackPress}
      />

      {/* Filter Tabs - Two Rows */}
      <View style={styles.filterContainer}>
        {/* First Row - Date Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContent}
          style={styles.firstRowFilter}
        >
          {dateFilters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterTab,
                {
                  backgroundColor: selectedDateFilter === filter 
                    ? colors.buttonColor 
                    : '#F5F5F5',
                },
              ]}
              onPress={() => handleDateFilterPress(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color: selectedDateFilter === filter 
                      ? 'white' 
                      : colors.textColor,
                  },
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Second Row - Status Filters */}
        <View style={styles.secondRowFilter}>
          {statusFilters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.statusFilterTab,
                {
                  borderBottomWidth: selectedStatusFilter === filter ? 2 : 0,
                  borderBottomColor: selectedStatusFilter === filter ? colors.buttonColor : 'transparent',
                },
              ]}
              onPress={() => handleStatusFilterPress(filter)}
            >
              <Text
                style={[
                  styles.statusFilterText,
                  {
                    color: selectedStatusFilter === filter 
                      ? colors.buttonColor 
                      : colors.textColor,
                  },
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Booking Requests List */}
      <ScrollView 
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <BookingDetails filteredBookings={getFilteredBookings()} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  filterContainer: {
    backgroundColor: 'white',
    paddingVertical: scaleHeight(8),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  firstRowFilter: {
    marginBottom: scaleHeight(8),
  },
  filterScrollContent: {
    paddingHorizontal: scaleWidth(16),
    gap: scaleWidth(12),
  },
  filterTab: {
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(8),
    borderRadius: scaleHeight(10),
    minWidth: scaleWidth(80),
    alignItems: 'center',
  },
  filterText: {
    ...Typography.fontMedium,
    ...Typography.textSize14,
  },
  secondRowFilter: {
    flexDirection: 'row',
    paddingHorizontal: scaleWidth(16),
    gap: scaleWidth(24),
  },
  statusFilterTab: {
    paddingVertical: scaleHeight(8),
    paddingHorizontal: scaleWidth(4),
  },
  statusFilterText: {
    ...Typography.fontMedium,
    ...Typography.textSize14,
  },
  contentContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: scaleWidth(16),
    paddingTop: scaleHeight(16),
    paddingBottom: scaleHeight(20),
  },
});

export default BookingScreen;
