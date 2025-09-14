import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

// Responsive utility functions
export const responsive = {
  // Width percentages
  wp: (percentage: number) => widthPercentageToDP(percentage),
  
  // Height percentages  
  hp: (percentage: number) => heightPercentageToDP(percentage),
  
  // Font sizes that scale with screen width
  fontSize: (size: number) => {
    const scale = wp('100%') / 375; // Base width is iPhone X/11/12
    return Math.max(size * scale, 12); // Minimum font size of 12
  },
  
  // Padding and margins that scale with screen width
  padding: (size: number) => wp(size * 0.27), // Convert to percentage
  
  // Border radius that scales with screen width
  borderRadius: (size: number) => wp(size * 0.27),
  
  // Icon sizes that scale with screen width
  iconSize: (size: number) => wp(size * 0.27),
  
  // Card dimensions
  cardWidth: (percentage: number) => wp(percentage),
  cardHeight: (percentage: number) => hp(percentage),
};

// Typography scale
export const typography = {
  // Headers
  h1: responsive.fontSize(28),
  h2: responsive.fontSize(24),
  h3: responsive.fontSize(20),
  h4: responsive.fontSize(18),
  
  // Body text
  body: responsive.fontSize(16),
  bodySmall: responsive.fontSize(14),
  caption: responsive.fontSize(12),
  
  // Button text
  button: responsive.fontSize(16),
  buttonLarge: responsive.fontSize(18),
};

// Spacing scale
export const spacing = {
  xs: responsive.padding(4),
  sm: responsive.padding(8),
  md: responsive.padding(16),
  lg: responsive.padding(24),
  xl: responsive.padding(32),
  xxl: responsive.padding(48),
};

// Common dimensions
export const dimensions = {
  headerHeight: hp('8%'),
  buttonHeight: hp('6%'),
  inputHeight: hp('15%'),
  cardRadius: responsive.borderRadius(12),
  iconSize: responsive.iconSize(24),
  iconSizeSmall: responsive.iconSize(16),
  iconSizeLarge: responsive.iconSize(32),
};
