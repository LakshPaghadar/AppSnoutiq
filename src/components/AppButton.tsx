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

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  buttonColor = DEFAULT_BUTTON_COLOR,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 8,
          paddingVertical: 12,
          paddingHorizontal: 24,
          alignItems: 'center',
          justifyContent: 'center',
        },
        { backgroundColor: buttonColor },
        style,
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[CommonStyles.text16Bold, { color: '#fff' }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default AppButton;
