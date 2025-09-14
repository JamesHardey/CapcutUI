import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { responsive, typography, spacing, dimensions } from '../utils/responsive';
import { fonts, fontWeights } from '../constants/fonts';

interface SettingRowProps {
  label: string;
  value: string;
  onPress: () => void;
}

const SettingRow: React.FC<SettingRowProps> = ({ label, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.settingRow} onPress={onPress}>
      <Text style={styles.settingLabel}>{label}</Text>
      <View style={styles.settingValue}>
        <Text style={styles.settingValueText}>{value}</Text>
        <Ionicons name="chevron-forward" size={dimensions.iconSizeSmall} color="#999" />
      </View>
    </TouchableOpacity>
  );
};

interface SettingsSectionProps {
  onSizePress: () => void;
  onCategoryPress: () => void;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({ 
  onSizePress, 
  onCategoryPress 
}) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.sectionTitle}>Settings</Text>
      
      <SettingRow 
        label="Size" 
        value="1080 x 1920 px" 
        onPress={onSizePress}
      />
      
      <SettingRow 
        label="Category" 
        value="Foods and beverage" 
        onPress={onCategoryPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    color: '#909495',
    fontSize: typography.h4,
    fontFamily: fonts.primary.bold,
    // fontWeight: fontWeights.bold,
    marginBottom: spacing.md,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: dimensions.cardRadius,
    padding: spacing.md,
    // marginBottom: spacing.sm,
    // borderWidth: 1,
    // borderColor: '#333',
  },
  settingLabel: {
    color: 'white',
    fontSize: typography.body,
    fontFamily: fonts.primary.medium,
    // fontWeight: fontWeights.medium,
  },
  settingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValueText: {
    color: '#aeb0b2',
    fontSize: typography.body,
    fontFamily: fonts.primary.regular,
    fontWeight: fontWeights.regular,
    marginRight: spacing.sm,
  },
});
