import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import { Images } from '@src/assets';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '@src/navigation/appNavigation.type';

const AlertScreen = () => {
  const { colors } = useFlagTheme();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEmergencyRequest = () => {
    Alert.alert(
      'Emergency Request',
      'Emergency grooming request sent! The client will be notified immediately.',
      [
        { text: 'OK', onPress: () => console.log('Emergency request confirmed') }
      ]
    );
  };

  const handleViewOnMap = () => {
    // Navigate to map screen or open external map
    Alert.alert(
      'View on Map',
      'Opening location in map application...',
      [
        { text: 'OK', onPress: () => console.log('Map opened') }
      ]
    );
  };

  const handleCallNow = () => {
    Alert.alert(
      'Call Client',
      'Calling Prajwal Pachpinde...',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call', onPress: () => console.log('Calling client') }
      ]
    );
  };

  const handleStartChat = () => {
    // Navigate to chat screen or show chat interface
    Alert.alert(
      'Start Chat',
      'Opening chat with Prajwal Pachpinde...',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Start Chat', onPress: () => console.log('Chat started') }
      ]
    );
  };

  const handlePetImagePress = () => {
    // Navigate to pet profile or show pet details
    Alert.alert(
      'Pet Profile',
      'Viewing Jack\'s profile and medical history...',
      [
        { text: 'OK', onPress: () => console.log('Pet profile viewed') }
      ]
    );
  };

  const handleUrgentBadgePress = () => {
    Alert.alert(
      'Urgent Need',
      'This is a high-priority emergency request that requires immediate attention.',
      [
        { text: 'OK', onPress: () => console.log('Urgent badge pressed') }
      ]
    );
  };

  const handleAddressPress = () => {
    // Navigate to detailed location screen
    Alert.alert(
      'Location Details',
      '123 Park Avenue, Richmond Town\nBangalore - 560025\n4.2 km away',
      [
        { text: 'OK', onPress: () => console.log('Address details viewed') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader
        title="Emergency Request"
        onBackPress={handleBackPress}
      />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Emergency Request Card */}
        <View style={styles.emergencyCard}>
          {/* Pet and Owner Info */}
          <View style={styles.petInfoSection}>
            <TouchableOpacity onPress={handlePetImagePress}>
              <Image
                source={Images.DUMMY1}
                style={styles.petImage}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.petDetails}>
              <View style={styles.nameSection}>
                <View style={styles.nameContainer}>
                  <Text style={[styles.petName, { color: colors.textColor }]}>
                    Jack
                  </Text>
                  <Text style={[styles.ownerName, { color: colors.color828282 }]}>
                    by Prajwal Pachpinde
                  </Text>
                </View>
                <View style={styles.badgeContainer}>
                  <TouchableOpacity onPress={handleUrgentBadgePress}>
                    <View style={styles.urgentBadge}>
                      <Text style={styles.urgentText}>Urgent Need</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={[styles.timeAgo, { color: colors.color828282 }]}>
                    2 mins ago
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Emergency Action Button */}
          <TouchableOpacity 
            style={styles.emergencyButton}
            onPress={handleEmergencyRequest}
          >
            <Image
              source={Images.ALERT_EMERGENCY}
              style={styles.emergencyIcon}
              resizeMode="contain"
            />
            <Text style={styles.emergencyButtonText}>
              Emergency Grooming Request
            </Text>
          </TouchableOpacity>
        </View>

        {/* Location Section */}
        <View style={styles.locationSection}>
          <Text style={[styles.sectionTitle, { color: colors.textColor }]}>
            Location
          </Text>
          
          {/* Map Skeleton */}
          <TouchableOpacity style={styles.mapContainer} onPress={handleViewOnMap}>
            <View style={styles.mapSkeleton}>
              <View style={styles.mapContent}>
                <Text style={styles.mapPlaceholder}>
                  Map View
                </Text>
                <Text style={styles.mapDetails}>
                  Swami Samarth Temple, Citi Mall, ANDHERI WEST
                </Text>
                <Text style={styles.mapDetails}>
                  New Link Rd, Versova, Yash Raj Films
                </Text>
              </View>
              <View style={styles.locationPin}>
                <View style={styles.pinDot} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Address Details */}
          <View style={styles.addressContainer}>
            <TouchableOpacity style={styles.addressDetails} onPress={handleAddressPress}>
              <View style={styles.addressRow}>
                <Image
                  source={Images.B_ADDRESS}
                  style={styles.locationIcon}
                  resizeMode="contain"
                />
                <View style={styles.addressText}>
                  <Text style={[styles.streetAddress, { color: colors.textColor }]}>
                    123 Park Avenue, Richmond Town
                  </Text>
                  <Text style={[styles.cityAddress, { color: colors.color828282 }]}>
                    Bangalore - 560025
                  </Text>
                  <Text style={[styles.distanceText, { color: colors.buttonColor }]}>
                    4.2 km away
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.viewMapButton, { backgroundColor: colors.buttonColor }]}
              onPress={handleViewOnMap}
            >
              <Text style={styles.viewMapText}>View On Map</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.callButton}
            onPress={handleCallNow}
          >
            <Image
              source={Images.CALL_ICON}
              style={styles.buttonIcon}
              resizeMode="contain"
            />
            <Text style={styles.callButtonText}>Call Now</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.chatButton, { borderColor: '#EB5757' }]}
            onPress={handleStartChat}
          >
            <Image
              source={Images.CHAT_RED_ICON}
              style={[styles.buttonIcon, { tintColor: '#EB5757' }]}
              resizeMode="contain"
            />
            <Text style={[styles.chatButtonText, { color: '#EB5757' }]}>
              Start Chat
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: scaleWidth(16),
  },
  emergencyCard: {
    backgroundColor: 'white',
    borderRadius: scaleHeight(12),
    padding: scaleWidth(16),
    marginTop: scaleHeight(16),
    shadowColor: '#A1A5A7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 15,
    elevation: 8,
  },
  petInfoSection: {
    marginBottom: scaleHeight(16),
  },
  petImage: {
    width: scaledSize(60),
    height: scaledSize(60),
    borderRadius: scaleHeight(8),
    marginRight: scaleWidth(12),
  },
  petDetails: {
    flex: 1,
  },
  nameSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nameContainer: {
    flex: 1,
  },
  petName: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    marginBottom: scaleHeight(4),
  },
  ownerName: {
    ...Typography.fontRegular,
    ...Typography.textSize14,
  },
  badgeContainer: {
    alignItems: 'flex-end',
  },
  urgentBadge: {
    backgroundColor: '#EB5757',
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(6),
    borderRadius: scaleHeight(16),
    marginBottom: scaleHeight(4),
  },
  urgentText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  timeAgo: {
    ...Typography.fontRegular,
    ...Typography.textSize12,
  },
  emergencyButton: {
    backgroundColor: '#EB5757',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(12),
    borderRadius: scaleHeight(8),
  },
  emergencyIcon: {
    width: scaledSize(20),
    height: scaledSize(20),
    marginRight: scaleWidth(8),
    tintColor: 'white',
  },
  emergencyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationSection: {
    marginTop: scaleHeight(24),
  },
  sectionTitle: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    marginBottom: scaleHeight(12),
  },
  mapContainer: {
    marginBottom: scaleHeight(16),
  },
  mapSkeleton: {
    backgroundColor: '#F5F5F5',
    borderRadius: scaleHeight(12),
    height: scaleHeight(200),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContent: {
    alignItems: 'center',
  },
  mapPlaceholder: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    color: '#828282',
    marginBottom: scaleHeight(8),
  },
  mapDetails: {
    ...Typography.fontRegular,
    ...Typography.textSize12,
    color: '#828282',
    textAlign: 'center',
  },
  locationPin: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: scaleWidth(-10),
    marginTop: scaleHeight(-20),
  },
  pinDot: {
    width: scaledSize(20),
    height: scaledSize(20),
    backgroundColor: '#EB5757',
    borderRadius: scaledSize(10),
    borderWidth: 2,
    borderColor: 'white',
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressDetails: {
    flex: 1,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationIcon: {
    width: scaledSize(16),
    height: scaledSize(16),
    marginRight: scaleWidth(8),
    marginTop: scaleHeight(2),
    tintColor: '#828282',
  },
  addressText: {
    flex: 1,
  },
  streetAddress: {
    ...Typography.fontBold,
    ...Typography.textSize14,
    marginBottom: scaleHeight(2),
  },
  cityAddress: {
    ...Typography.fontRegular,
    ...Typography.textSize12,
    marginBottom: scaleHeight(2),
  },
  distanceText: {
    ...Typography.fontMedium,
    ...Typography.textSize12,
  },
  viewMapButton: {
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(8),
    borderRadius: scaleHeight(8),
  },
  viewMapText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  actionButtons: {
    marginTop: scaleHeight(24),
    gap: scaleHeight(12),
  },
  callButton: {
    backgroundColor: '#EB5757',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(16),
    borderRadius: scaleHeight(8),
  },
  chatButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(16),
    borderRadius: scaleHeight(8),
    borderWidth: 1,
  },
  buttonIcon: {
    width: scaledSize(20),
    height: scaledSize(20),
    marginRight: scaleWidth(8),
    tintColor: 'white',
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AlertScreen;
