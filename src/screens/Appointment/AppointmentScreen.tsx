import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import AppointmentList from '@src/screens/Dashboard/Component/Appointment';
import { useNavigation } from '@react-navigation/native';

type FilterType = 'All' | 'Confirmed' | 'Upcoming' | 'Cancelled';

const AppointmentScreen = () => {
  const { colors } = useFlagTheme();
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');

  const filters: FilterType[] = ['All', 'Confirmed', 'Upcoming', 'Cancelled'];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFilterPress = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader
        title="Appointment"
        onBackPress={handleBackPress}
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
                    : '#F5F5F5',
                },
              ]}
              onPress={() => handleFilterPress(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color: selectedFilter === filter 
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
      </View>

      {/* Appointment List */}
      <ScrollView 
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <AppointmentList />
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
  contentContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: scaleWidth(16),
    paddingTop: scaleHeight(16),
    paddingBottom: scaleHeight(20),
  },
});

export default AppointmentScreen; 