import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import { Images } from '@src/assets';
import { useNavigation } from '@react-navigation/native';

interface MenuItem {
  id: string;
  title: string;
  icon: any;
  isLogout?: boolean;
  onPress?: () => void;
}

const ProfileScreen = () => {
  const { colors } = useFlagTheme();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEditProfile = () => {
    // Handle edit business profile
    console.log('Edit business profile');
  };

  const menuItems: MenuItem[] = [
    {
      id: 'availability',
      title: 'Availability / Timings',
      icon: Images.CALENDAR,
      onPress: () => console.log('Availability / Timings'),
    },
    {
      id: 'services',
      title: 'My Services & License',
      icon: Images.SERVICE_ICON,
      onPress: () => console.log('My Services & License'),
    },
    {
      id: 'ratings',
      title: 'My Ratings & Reviews',
      icon: Images.STAR_ICON,
      onPress: () => console.log('My Ratings & Reviews'),
    },
    {
      id: 'password',
      title: 'Change Password',
      icon: Images.LOCK_ICON,
      onPress: () => console.log('Change Password'),
    },
    {
      id: 'terms',
      title: 'Terms & Privacy Policy',
      icon: Images.TERMS_CONDITIONS,
      onPress: () => console.log('Terms & Privacy Policy'),
    },
    {
      id: 'help',
      title: 'Help & Support',
      icon: Images.QUESTION_ICON,
      onPress: () => console.log('Help & Support'),
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: Images.LOGOUT_ICON,
      isLogout: true,
      onPress: () => console.log('Logout'),
    },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={item.onPress}
    >
      <View style={styles.menuItemContent}>
        <View style={[
          styles.iconContainer,
          { backgroundColor: item.isLogout ? '#FF4444' : colors.buttonColor }
        ]}>
          <Image
            source={item.icon}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </View>
        <Text style={[
          styles.menuText,
          { color: item.isLogout ? '#FF4444' : colors.textColor }
        ]}>
          {item.title}
        </Text>
      </View>
      <Image
        source={Images.NEXT_ICON}
        style={styles.arrowIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader
        title="Profile"
        onBackPress={handleBackPress}
      />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Information Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Image
              source={Images.PERSON}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <View style={styles.profileDetails}>
              <Text style={[styles.businessName, { color: colors.textColor }]}>
                Pawsome Grooming
              </Text>
              <Text style={[styles.contactInfo, { color: colors.color828282 }]}>
                +91 XXXXXXXX40
              </Text>
              <Text style={[styles.contactInfo, { color: colors.color828282 }]}>
                abcxyz123@gmail.com
              </Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
              <Image
                source={Images.EDIT_PEN}
                style={styles.editIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Edit Business Profile Card */}
        <TouchableOpacity style={styles.editProfileCard} onPress={handleEditProfile}>
          <View style={styles.editProfileContent}>
            <View>
              <Text style={[styles.editProfileTitle, { color: colors.textColor }]}>
                Edit Business Profile
              </Text>
              <Text style={[styles.editProfileSubtitle, { color: colors.color828282 }]}>
                Name, location, service type
              </Text>
            </View>
            <Image
              source={Images.EDIT_PEN}
              style={styles.editProfileIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map(renderMenuItem)}
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
  profileSection: {
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
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: scaledSize(60),
    height: scaledSize(60),
    borderRadius: scaledSize(30),
    marginRight: scaleWidth(12),
  },
  profileDetails: {
    flex: 1,
  },
  businessName: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    marginBottom: scaleHeight(4),
  },
  contactInfo: {
    ...Typography.fontRegular,
    ...Typography.textSize14,
    marginBottom: scaleHeight(2),
  },
  editButton: {
    padding: scaleWidth(8),
  },
  editIcon: {
    width: scaledSize(20),
    height: scaledSize(20),
    tintColor: '#828282',
  },
  editProfileCard: {
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
  editProfileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editProfileTitle: {
    ...Typography.fontBold,
    ...Typography.textSize16,
    marginBottom: scaleHeight(4),
  },
  editProfileSubtitle: {
    ...Typography.fontRegular,
    ...Typography.textSize14,
  },
  editProfileIcon: {
    width: scaledSize(20),
    height: scaledSize(20),
    tintColor: '#828282',
  },
  menuContainer: {
    marginTop: scaleHeight(16),
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: scaleHeight(8),
    padding: scaleWidth(16),
    marginBottom: scaleHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#A1A5A7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 15,
    elevation: 8,
    height: scaleHeight(60),
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: scaledSize(40),
    height: scaledSize(40),
    borderRadius: scaleHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(12),
  },
  menuIcon: {
    width: scaledSize(20),
    height: scaledSize(20),
    tintColor: 'white',
  },
  menuText: {
    ...Typography.fontMedium,
    ...Typography.textSize16,
    flex: 1,
  },
  arrowIcon: {
    width: scaledSize(16),
    height: scaledSize(16),
    tintColor: '#828282',
  },
});

export default ProfileScreen;
