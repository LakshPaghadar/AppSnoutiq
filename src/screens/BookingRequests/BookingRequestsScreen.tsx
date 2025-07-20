import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import BookingDetails from '@src/screens/Dashboard/Component/BookingDetails';
import { useNavigation } from '@react-navigation/native';
import { Images } from '@src/assets';

type FilterType = 'All' | 'Today\'s' | 'Tomorrow' | 'Choose date' | 'Pending' | 'Accepted' | 'Completed';

const BookingRequestsScreen = () => {
  const { colors } = useFlagTheme();
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');

  const filters: FilterType[] = ['All', 'Today\'s', 'Tomorrow', 'Choose date', 'Pending', 'Accepted', 'Completed'];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFilterPress = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  const handleAddPress = () => {
    // Handle add new booking request
    console.log('Add new booking request');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader
        title="Booking Requests"
        onBackPress={handleBackPress}
        rightIcon={Images.PLUS_PURPLE}
        onRightPress={handleAddPress}
      />

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContent}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterTab,
                {
                  backgroundColor: selectedFilter === filter 
                    ? colors.buttonColor 
                    : 'transparent',
                  borderBottomWidth: selectedFilter === filter ? 2 : 0,
                  borderBottomColor: selectedFilter === filter ? colors.buttonColor : 'transparent',
                },
              ]}
              onPress={() => handleFilterPress(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color: selectedFilter === filter 
                      ? colors.buttonColor 
                      : colors.textColor,
                  },
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Booking Requests List */}
      <ScrollView 
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <BookingDetails />
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
    paddingVertical: scaleHeight(12),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  filterScrollContent: {
    paddingHorizontal: scaleWidth(16),
    gap: scaleWidth(20),
  },
  filterTab: {
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(8),
    borderRadius: scaleHeight(10),
    minWidth: scaleWidth(80),
    alignItems: 'center',
  },
  filterText: {
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

export default BookingRequestsScreen; 