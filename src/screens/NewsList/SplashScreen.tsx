import { Images } from '@src/assets';
import { useAppContext } from '@src/context';
import { Screen } from '@src/navigation/appNavigation.type';
import Typography from '@src/utils/typography';
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  const { navigation } = useAppContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(Screen.ONBOARDING);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={Images.SPLASH_SCREEN}
        resizeMode="contain"
        style={[Typography.width185, Typography.height75]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SplashScreen;
