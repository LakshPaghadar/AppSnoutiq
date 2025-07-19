import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React from 'react';
import Icon from '@react-native-vector-icons/material-icons';
import { View, Text, TextInput, TextInputProps, Image, ViewStyle } from 'react-native';

interface AppInputProps extends TextInputProps {
  title: string;
  image?: any; // Image source (require or {uri:})
  icon?: any;
  isPassword?: boolean;
  rightImage?: any;
  containerStyle?: ViewStyle;
  readOnly?: boolean;
  isShowHint?: boolean;
  titleStyle?: any;
}

const AppInput: React.FC<AppInputProps> = ({
  title,
  image,
  icon,
  placeholder,
  isPassword = false,
  rightImage,
  containerStyle,
  readOnly = false,
  isShowHint = true,
  titleStyle,
  ...rest
}) => {
  const { colors } = useFlagTheme();
  return (
    <View style={[{ marginBottom: scaledSize(16) }, containerStyle]}>
      <Text
        style={[
          Typography.textSize16,
          Typography.fontRegular,
          { color: colors.textColor, marginVertical: scaledSize(16) },
          titleStyle,
        ]}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.colorFAFAFA,
          borderRadius: 10,
          paddingHorizontal: scaleWidth(12),
          height: scaleHeight(48),
        }}>
        {image && (
          <Image
            source={image}
            style={{
              width: scaledSize(20),
              height: scaledSize(20),
              marginRight: scaledSize(10),
              resizeMode: 'contain',
              tintColor: colors.color828282,
            }}
          />
        )}
        {icon && <Icon name={icon} size={scaledSize(20)} color={colors.color828282} />}
        <TextInput
          style={{
            ...Typography.textSize14,
            ...Typography.fontRegular,
            flex: 1,
            fontSize: 16,
            color: colors.color828282,
          }}
          secureTextEntry={isPassword}
          placeholder={isShowHint ? placeholder || `Enter your ${title.toLowerCase()}` : ''}
          placeholderTextColor={colors.color828282}
          editable={!readOnly}
          {...rest}
        />
        {rightImage && (
          <Image
            source={rightImage}
            style={{
              width: scaledSize(20),
              height: scaledSize(20),
              marginRight: scaledSize(10),
              resizeMode: 'contain',
              tintColor: colors.color828282,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default AppInput;
