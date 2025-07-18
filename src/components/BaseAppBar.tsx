import { Images } from '@src/assets';
import { useAppContext } from '@src/context';
import { color, scaleHeight, scaleWidth } from '@src/utils';
import { FlagThemeProvider, useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface BaseAppBarProps {
  title: string;
  isShow?: boolean;
  onBackPress?: () => void;
}

const BaseAppBar: React.FC<BaseAppBarProps> = ({ title, isShow = false, onBackPress }) => {
  const { navigation } = useAppContext();
  const { colors } = useFlagTheme();
  return (
    <View style={styles.container}>
      {isShow ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Images.BACK_ICON}
            style={{ width: scaleWidth(24), height: scaleHeight(24), marginStart: scaleWidth(20) }}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}
      <View style={styles.titleContainer}>
        <Text style={[Typography.fontBold, Typography.textSize24, { color: colors.textColor }]}>
          {title}
        </Text>
      </View>
      {/* Placeholder for right side to keep title centered */}
      <View style={styles.backButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
  },
  backButton: {
    width: 48,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BaseAppBar;
