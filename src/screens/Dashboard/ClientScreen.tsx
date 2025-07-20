import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import { Images } from '@src/assets';
import { useNavigation } from '@react-navigation/native';


interface ClientData {
  id: string;
  name: string;
  petName: string;
  petType: string;
  time: string;
  date: string;
  service: string;
  visits: string;
  profileImage: any;
}

const ClientScreen = () => {
  const { colors } = useFlagTheme();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFilterPress = () => {
    console.log('Filter pressed');
  };

  const handleCallPress = (clientId: string) => {
    console.log('Call client:', clientId);
  };

  const handleCheckProfilePress = (clientId: string) => {
    console.log('Check profile for client:', clientId);
  };

  const clientData: ClientData[] = [
    {
      id: '1',
      name: 'Aarohi Sharma',
      petName: 'Simba',
      petType: 'Dog',
      time: '11:00 AM',
      date: 'Tuesday, 10 July',
      service: 'Full Grooming',
      visits: '3 Visits',
      profileImage: Images.PERSON,
    },
    {
      id: '2',
      name: 'Prajwal Pachpind',
      petName: 'Jack',
      petType: 'Dog',
      time: '10:00 AM',
      date: 'Tuesday, 10 July',
      service: 'Full Grooming',
      visits: '3 Visits',
      profileImage: Images.PERSON,
    },
    {
      id: '3',
      name: 'Shruti Pandey',
      petName: 'Persian',
      petType: 'Cat',
      time: '12:00 AM',
      date: 'Tuesday, 10 July',
      service: 'Full Grooming',
      visits: '3 Visits',
      profileImage: Images.PERSON,
    },
  ];

  const renderClientCard = (client: ClientData) => (
    <View key={client.id} style={styles.clientCard}>
      {/* Bookmark Icon */}
      <TouchableOpacity style={styles.bookmarkIcon}>
        <Image
          source={Images.PLUS_RIGHT}
          style={styles.bookmarkImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Client Info */}
      <View style={styles.clientInfo}>
      <Image
          source={Images.DUMMY1}
          style={{
            width: scaledSize(50),
            height: scaledSize(50),
            borderRadius: scaleHeight(2),
            marginRight: scaleWidth(12),
          }}
        />
        <View style={styles.clientDetails}>
          <Text style={[styles.clientName, { color: colors.textColor }]}>
            {client.name}
          </Text>
          <View style={styles.petInfo}>
            <Image
              source={Images.DASH_33}
              style={styles.pawIcon}
              resizeMode="contain"
            />
            <Text style={[styles.petText, { color: colors.color828282 }]}>
              {client.petName}, {client.petType}
            </Text>
          </View>
        </View>
      </View>

      {/* Appointment Details */}
      <View style={styles.appointmentDetails}>
        <View style={styles.detailRow}>
          <Image
            source={Images.TIME_ICON}
            style={styles.detailIcon}
            resizeMode="contain"
          />
          <Text style={[styles.detailText, { color: colors.color828282 }]}>
            {client.time}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={Images.CALENDAR}
            style={styles.detailIcon}
            resizeMode="contain"
          />
          <Text style={[styles.detailText, { color: colors.color828282 }]}>
            {client.date}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={Images.SERVICE_ICON}
            style={styles.detailIcon}
            resizeMode="contain"
          />
          <Text style={[styles.detailText, { color: colors.color828282 }]}>
            {client.service}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={Images.PERSON}
            style={styles.detailIcon}
            resizeMode="contain"
          />
          <Text style={[styles.detailText, { color: colors.color828282 }]}>
            {client.visits}
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.callButton, { backgroundColor: colors.buttonColor }]}
          onPress={() => handleCallPress(client.id)}
        >
          <Image
            source={Images.CALL_ICON}
            style={styles.buttonIcon}
            resizeMode="contain"
          />
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.profileButton, { borderColor: colors.buttonColor }]}
          onPress={() => handleCheckProfilePress(client.id)}
        >
          <Text style={[styles.profileButtonText, { color: colors.buttonColor }]}>
            Check Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader
        title="Client History"
        onBackPress={handleBackPress}
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image
            source={Images.SEARCH}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or pet..."
            placeholderTextColor={colors.color828282}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={handleFilterPress}>
            <Image
              source={Images.FILTER}
              style={styles.filterIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Client List */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {clientData.map(renderClientCard)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    backgroundColor: 'white',
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(12),
 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: scaleHeight(8),
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(6),
  },
  searchIcon: {
    width: scaledSize(20),
    height: scaledSize(20),
    marginRight: scaleWidth(8),
    tintColor: '#828282',
  },
  searchInput: {
    flex: 1,
    ...Typography.fontRegular,
    ...Typography.textSize14,
    color: '#333333',
  },
  filterIcon: {
    width: scaledSize(20),
    height: scaledSize(20),
    tintColor: '#828282',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: scaleWidth(16),
    paddingTop: scaleHeight(16),
    paddingBottom: scaleHeight(20),
  },
  clientCard: {
    backgroundColor: 'white',
    borderRadius: scaleHeight(12),
    padding: scaleWidth(16),
    marginBottom: scaleHeight(12),
    shadowColor: '#A1A5A7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 15,
    elevation: 8,
  },
  bookmarkIcon: {
    position: 'absolute',
    top: scaleWidth(12),
    right: scaleWidth(12),
    zIndex: 1,
  },
  bookmarkImage: {
    width: scaledSize(20),
    height: scaledSize(20),
    tintColor: '#A363F9',
  },
  clientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(12),
  },
  profileImage: {
    width: scaledSize(50),
    height: scaledSize(50),
    borderRadius: scaledSize(25),
    marginRight: scaleWidth(12),
  },
  clientDetails: {
    flex: 1,
  },
  clientName: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    marginBottom: scaleHeight(4),
  },
  petInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pawIcon: {
    width: scaledSize(16),
    height: scaledSize(16),
    marginRight: scaleWidth(6),
    tintColor: '#828282',
  },
  petText: {
    ...Typography.fontRegular,
    ...Typography.textSize14,
  },
  appointmentDetails: {
    marginBottom: scaleHeight(16),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(6),
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
  actionButtons: {
    flexDirection: 'row',
    gap: scaleWidth(12),
  },
  callButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(10),
    borderRadius: scaleHeight(8),
  },
  buttonIcon: {
    width: scaledSize(16),
    height: scaledSize(16),
    marginRight: scaleWidth(6),
    tintColor: 'white',
  },
  callButtonText: {
    ...Typography.fontMedium,
    ...Typography.textSize14,
    color: 'white',
  },
  profileButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(10),
    borderRadius: scaleHeight(8),
    borderWidth: 1,
  },
  profileButtonText: {
    ...Typography.fontMedium,
    ...Typography.textSize14,
  },
});

export default ClientScreen;
