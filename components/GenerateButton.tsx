import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { responsive, typography, spacing, dimensions } from '../utils/responsive';
import { fonts, fontWeights } from '../constants/fonts';

interface GenerateButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ 
  onPress, 
  disabled = false 
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.generateButton,
        disabled && styles.generateButtonDisabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={disabled ? ['#666', '#888'] : ['#4A90E2', '#8B5CF6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.generateButtonGradient}
      >
        <Ionicons 
          name="sparkles" 
          size={dimensions.iconSizeSmall} 
          color="white" 
        />
      </LinearGradient>
      <Text style={styles.generateButtonText}>Generate</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  generateButton: {
    backgroundColor: 'white',
    borderRadius: dimensions.cardRadius,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginHorizontal: spacing.md,
    marginBottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  generateButtonDisabled: {
    backgroundColor: '#ccc',
  },
  generateButtonGradient: {
    width: dimensions.iconSize,
    height: dimensions.iconSize,
    borderRadius: dimensions.iconSize / 2,
    marginRight: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  generateButtonText: {
    color: '#000',
    fontSize: typography.buttonLarge,
    fontFamily: fonts.primary.bold,
    // fontWeight: fontWeights.bold,
  },
});
