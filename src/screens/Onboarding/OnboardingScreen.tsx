import { useNavigation } from '@react-navigation/native';
import { Images } from '@src/assets';
import { BaseLayout } from '@src/components';
import AppButton from '@src/components/AppButton';
import { useAppContext } from '@src/context';
import { Screen } from '@src/navigation/appNavigation.type';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import React, { useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

const OnboardingScreen = () => {
  const pages = [
    {
      key: '1',
      title: 'Book Pet Services Anytime',
      description: 'From vet visits to grooming, explore trusted providers near you.',
      image: Images.ONBOARDING_1,
    },
    {
      key: '2',
      title: 'Seamless Booking Experience',
      description: 'Schedule appointments, get reminders, and connect via chat or video call.',
      image: Images.ONBOARDING_2,
    },
    {
      key: '3',
      title: 'Manage Your Pets Health',
      description: 'Track medical history, prescriptions, and appointments — all in one app.',
      image: Images.ONBOARDING_3,
    },
  ];

  const { colors } = useFlagTheme();
  const [pageIndex, setPageIndex] = useState(0);
  const { navigation } = useAppContext();
  const pagerRef = useRef<PagerView>(null);
  const handleNext = () => {
    if (pageIndex < 2) {
      setPageIndex(pageIndex + 1);
      pagerRef.current?.setPage(pageIndex + 1);
    } else {
      navigation.navigate(Screen.SELECT_ROLE);
    }
  };
  const handlePageChange = (e: any) => {
    setPageIndex(e.nativeEvent.position);
  };
  return (
    <BaseLayout>
      <View style={{ flex: 1, paddingHorizontal: scaleWidth(20) }}>
        <Text style={[Typography.fontBold, Typography.alignSelfEnd, { color: colors.textColor }]}>
          Skip
        </Text>

        {/* PagerView */}
        <PagerView
          ref={pagerRef}
          style={{ flex: 1, width: '100%' }}
          initialPage={0}
          onPageSelected={handlePageChange}>
          {pages.map((item, index) => (
            <View
              key={item.key}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Image
                source={item.image}
                style={{ width: '100%', height: '60%' }}
                resizeMode="contain"
              />
              <View style={{ height: scaleHeight(24) }} />
              <Text
                style={[
                  Typography.fontBold,
                  Typography.textSize24,
                  { color: colors.textColor, textAlign: 'center' },
                ]}>
                {item.title}
              </Text>
              <View style={{ height: scaleHeight(24) }} />
              <Text
                style={[
                  Typography.fontRegular,
                  Typography.textSize16,
                  { color: colors.color828282, textAlign: 'center' },
                ]}>
                {item.description}
              </Text>
            </View>
          ))}
        </PagerView>

        {/* Dot Indicators */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
          {pages.map((_, index) => (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: pageIndex === index ? colors.color2C9CDB : colors.colorFAFAFA,
                marginHorizontal: 5,
              }}
            />
          ))}
        </View>

        <AppButton title="Next" onPress={handleNext} />
      </View>
    </BaseLayout>
  );
};

export default OnboardingScreen;
