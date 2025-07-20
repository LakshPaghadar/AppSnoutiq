import { Images } from '@src/assets';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface AppHeaderProps {
  title: string;
  onBackPress?: () => void;
  rightIcon?: any;
  onRightPress?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  title, 
  onBackPress, 
  rightIcon, 
  onRightPress 
}) => {
  const { colors } = useFlagTheme();

  return (
    <View style={styles.container}>
      {/* Left Arrow */}
      <TouchableOpacity 
        style={styles.leftButton} 
        onPress={onBackPress}
      >
        <Image
          source={Images.BACK_ICON}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Centered Title */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.textColor }]}>
          {title}
        </Text>
      </View>

      {/* Right Icon (Optional) */}
      <View style={styles.rightButton}>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            <View style={styles.rightIconContainer}>
              <Image
                source={rightIcon}
                style={styles.rightIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: scaleHeight(56),
    backgroundColor: 'white',
    paddingHorizontal: scaleWidth(16),
  },
  leftButton: {
    width: scaleWidth(48),
    height: scaleHeight(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: scaledSize(24),
    height: scaledSize(24),
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.fontBold,
    ...Typography.textSize16,
  },
  rightButton: {
    width: scaleWidth(48),
    height: scaleHeight(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    width: scaledSize(32),
    height: scaledSize(32),
    borderRadius: scaledSize(16),
    backgroundColor: '#A363F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    width: scaledSize(16),
    height: scaledSize(16),
    tintColor: 'white',
  },
});

export default AppHeader; 