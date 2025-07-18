import { BaseLayout } from '@src/components';
import AppButton from '@src/components/AppButton';
import BaseAppBar from '@src/components/BaseAppBar';
import Typography from '@src/utils/typography';
import React from 'react';
import { Text, View } from 'react-native';

const SelectRoleScreen = () => {
  return (
    <BaseLayout>
      <View style={[Typography.flex1, Typography.paddingHorizontal20]}>
        <BaseAppBar title="I am a..." />
        <View style={[Typography.flex1]}></View>
        <AppButton title="Continue" onPress={() => {}} />
      </View>
    </BaseLayout>
  );
};

export default SelectRoleScreen;
