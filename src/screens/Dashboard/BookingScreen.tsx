import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, TextInput, Alert, Image, Platform } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import AppInput from '@src/components/AppInput';
import CustomDatePicker from '@src/components/CustomDatePicker';
import CustomTimePicker from '@src/components/CustomTimePicker';
import SuccessModal from '@src/components/SuccessModal';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    petName: 'Jack',
    ownerName: 'Jack',
    date: '15 July 25',
    time: '10:00 AM',
    address: '123 Main St, Andheri West, Mumbai',
  });

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
    setIsModalVisible(true);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSaveBooking = () => {
    setIsModalVisible(false);
    setShowSuccessModal(true);
  };

  const handleCancelBooking = () => {
    setIsModalVisible(false);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  const handleGoToBookingRequest = () => {
    setShowSuccessModal(false);
    // You can add navigation logic here if needed
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleTimePress = () => {
    setShowTimePicker(true);
  };

  const handleDateSelect = (date: string) => {
    setBookingData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setBookingData(prev => ({ ...prev, time }));
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

      {/* Add Booking Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelBooking}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <Text style={[styles.modalTitle, { color: colors.textColor }]}>
              Add Booking
            </Text>

            {/* Modal Content - Scrollable */}
            <ScrollView
              style={styles.modalContent}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {/* Pet Name Input */}
              <AppInput
                title="Pet Name"
                image={Images.PS_ICON}
                value={bookingData.petName}
                onChangeText={(text) => handleInputChange('petName', text)}
                placeholder="Enter pet name"
                titleStyle={{
                  color: colors.textColor,
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                }}
                containerStyle={styles.inputField}
              />

              {/* Owner Name Input */}
              <AppInput
                title="Owner Name"
                image={Images.PS_ICON}
                value={bookingData.ownerName}
                onChangeText={(text) => handleInputChange('ownerName', text)}
                placeholder="Enter owner name"
                titleStyle={{
                  color: colors.textColor,
                  ...Typography.fontMedium,
                  ...Typography.textSize14,
                }}
                containerStyle={styles.inputField}
              />

              {/* Date and Time Row */}
              <View style={styles.dateTimeRow}>
                <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={handleDatePress} style={styles.pickerContainer}>
                    <AppInput
                      title="Date"
                      rightImage={Images.CALENDAR}
                      value={bookingData.date}
                      placeholder="Select Date"
                      titleStyle={{
                        color: colors.textColor,
                        ...Typography.fontMedium,
                        ...Typography.textSize14,
                      }}
                      containerStyle={styles.dateTimeInput}
                      readOnly={true}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={handleTimePress} style={styles.pickerContainer}>
                    <AppInput
                      title="Time"
                      rightImage={Images.TIME_ICON}
                      value={bookingData.time}
                      placeholder="Select Time"
                      titleStyle={{
                        color: colors.textColor,
                        ...Typography.fontMedium,
                        ...Typography.textSize14,
                      }}
                      containerStyle={styles.dateTimeInput}
                      readOnly={true}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{
                marginTop: scaleHeight(20),
              }}>
                {/* Address Input */}
                <AppInput
                  title="Address"
                  image={Images.B_ADDRESS}
                  value={bookingData.address}
                  onChangeText={(text) => handleInputChange('address', text)}
                  placeholder="Enter address"
                  titleStyle={{
                    color: colors.textColor,
                    ...Typography.fontMedium,
                    ...Typography.textSize14,
                  }}
                  containerStyle={styles.inputField}
                />
              </View>
            </ScrollView>

            {/* Modal Actions */}
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.saveButton, { backgroundColor: colors.buttonColor }]}
                onPress={handleSaveBooking}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.cancelButton, { borderColor: colors.buttonColor }]}
                onPress={handleCancelBooking}
              >
                <Text style={[styles.cancelButtonText, { color: colors.buttonColor }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Custom Date Picker */}
      <CustomDatePicker
        visible={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onSelect={handleDateSelect}
        currentValue={bookingData.date}
      />

      {/* Custom Time Picker */}
      <CustomTimePicker
        visible={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onSelect={handleTimeSelect}
        currentValue={bookingData.time}
      />

      {/* Success Modal */}
      <SuccessModal
        visible={showSuccessModal}
        onClose={handleSuccessModalClose}
        onPrimaryAction={handleGoToBookingRequest}
        title="Booking Added"
        message="You have Added booking Successfully"
        primaryButtonText="Go to Booking Request"
        secondaryButtonText="Close"
      />
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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(20),
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: scaleHeight(12),
    width: '100%',
    maxHeight: '85%',
    padding: scaleWidth(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },
  modalTitle: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    textAlign: 'center',
    marginBottom: scaleHeight(24),
  },
  modalContent: {
    marginBottom: scaleHeight(20),
  },
  inputField: {
    marginBottom: scaleHeight(20),
    // marginTop: scaleHeight(10),
  },
  dateTimeRow: {
    flexDirection: 'row',
    gap: scaleWidth(16),
    marginBottom: scaleHeight(20),
  },
  dateTimeContainer: {
    flex: 1,
  },
  dateTimeInput: {
    marginBottom: 0,
  },
  pickerContainer: {
    flex: 1,
  },
  modalActions: {
    marginTop: scaleHeight(24),
    gap: scaleHeight(12),
  },
  saveButton: {
    paddingVertical: scaleHeight(14),
    borderRadius: scaleHeight(8),
    alignItems: 'center',
    marginBottom: scaleHeight(8),
  },
  saveButtonText: {
    color: 'white',
    ...Typography.fontBold,
    ...Typography.textSize16,
  },
  cancelButton: {
    paddingVertical: scaleHeight(14),
    borderRadius: scaleHeight(8),
    alignItems: 'center',
    borderWidth: 1,
  },
  cancelButtonText: {
    ...Typography.fontBold,
    ...Typography.textSize16,
  },
});

export default BookingScreen;
