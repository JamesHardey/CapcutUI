import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { responsive, typography, spacing } from '../utils/responsive';
import { fonts, fontWeights } from '../constants/fonts';

export const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerBrand}>
        <View style={styles.capcutLogo}>
          <Image 
            source={require('../assets/capcut.png')} 
            style={styles.capcutIcon} 
          />
          <Text style={styles.capcutText}>CapCut</Text>
        </View>
      </View>
      
      <View style={styles.mobbinSection}>
        <Text style={styles.curatedText}>curated by</Text>
        <View style={styles.mobbinLogo}>
          <Image 
            source={require('../assets/mobbin-logo.png')} 
            style={styles.mobbinIcon} 
          />
          <Text style={styles.mobbinText}>Mobbin</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: '#2f2f2f',
  },
  footerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  capcutLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  capcutIcon: {
    width: responsive.wp(6),
    height: responsive.wp(6),
    borderRadius: spacing.xs,
    marginRight: spacing.sm,
  },
  capcutText: {
    color: 'white',
    fontSize: typography.h4,
    fontFamily: fonts.primary.semiBold,
    fontWeight: fontWeights.semiBold,
  },
  mobbinSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  curatedText: {
    color: '#999',
    fontSize: typography.h4,
    fontFamily: fonts.primary.regular,
    fontWeight: fontWeights.regular,
    marginRight: spacing.xs,
  },
  mobbinLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobbinIcon: {
    width: responsive.wp(6),
    height: responsive.wp(3),
    borderRadius: 2,
    marginRight: spacing.xs,
  },
  mobbinText: {
    color: 'white',
    fontSize: typography.bodySmall,
    fontFamily: fonts.primary.semiBold,
    fontWeight: fontWeights.semiBold,
  },
});
