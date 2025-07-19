import { scaleHeight } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomProgressBar = ({ progress = 0.5 }) => {
  const { colors } = useFlagTheme();
  return (
    <View
      style={{
        marginHorizontal: 5,
        height: scaleHeight(4),
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          backgroundColor: '#eee', // fallback, won't be visible
          borderRadius: 50,
          overflow: 'hidden',
        }}>
        <View
          style={[
            {
              backgroundColor: colors.buttonColor, // purple
            },
            { flex: progress },
          ]}
        />
        <View style={{ flex: 1 - progress }} />
      </View>
    </View>
  );
};

export default CustomProgressBar;
