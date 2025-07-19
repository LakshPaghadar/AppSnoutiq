import { scaleHeight } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import CommonStyles from '@src/utils/style';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const DEFAULT_BUTTON_COLOR = '#2C9CDB';

const AppButton: React.FC<AppButtonProps> = ({ title, onPress, buttonColor, style, textStyle }) => {
  const { colors } = useFlagTheme();
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 8,
          paddingVertical: scaleHeight(14),
          paddingHorizontal: 24,
          alignItems: 'center',
          justifyContent: 'center',
        },
        { backgroundColor: buttonColor ?? colors.buttonColor },
        style,
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[CommonStyles.text16Bold, { color: '#fff' }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
