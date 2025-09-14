// Font families for the app
export const fonts = {
  // Primary font family - Inter (modern, clean)
  primary: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },
  
  // Secondary font family - Poppins (friendly, rounded)
  secondary: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
  
  // Fallback system fonts
  system: {
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
  }
};

// Font weights
export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

// Font styles
export const fontStyles = {
  normal: 'normal',
  italic: 'italic',
} as const;
