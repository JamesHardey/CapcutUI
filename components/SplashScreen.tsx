import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { responsive, typography, spacing } from '../utils/responsive';
import { fonts, fontWeights } from '../constants/fonts';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

export const CustomSplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        
        // Simulate loading time (2 seconds)
        setTimeout(() => {
          onFinish();
        }, 2000);
      } catch (e) {
        console.warn(e);
        onFinish();
      }
    };

    prepare();
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/capcut.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>CapCut</Text>
        <Text style={styles.subtitle}>AI Poster Generator</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: responsive.wp(25),
    height: responsive.wp(25),
    marginBottom: spacing.lg,
  },
  appName: {
    color: 'white',
    fontSize: typography.h1,
    fontFamily: fonts.primary.bold,
    fontWeight: fontWeights.bold,
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: '#999',
    fontSize: typography.body,
    fontFamily: fonts.primary.regular,
    fontWeight: fontWeights.regular,
  },
});
