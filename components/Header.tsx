import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { responsive, typography, spacing, dimensions } from '../utils/responsive';
import { fonts, fontWeights } from '../constants/fonts';

interface HeaderProps {
  activeTab: 'smart' | 'advanced';
  onTabChange: (tab: 'smart' | 'advanced') => void;
  onClose: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, onClose }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close" size={dimensions.iconSize} color="white" />
      </TouchableOpacity>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'smart' && styles.activeTab]}
          onPress={() => onTabChange('smart')}
        >
          <Text style={[styles.tabText, activeTab === 'smart' && styles.activeTabText]}>
            Smart script
          </Text>
          {activeTab === 'smart' && (
            <LinearGradient
              colors={['#4A90E2', '#8B5CF6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tabUnderline}
            />
          )}
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'advanced' && styles.activeTab]}
          onPress={() => onTabChange('advanced')}
        >
          <Text style={[styles.tabText, activeTab === 'advanced' && styles.activeTabText]}>
            Advanced script
          </Text>
          {activeTab === 'advanced' && (
            <LinearGradient
              colors={['#4A90E2', '#8B5CF6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tabUnderline}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  tab: {
    marginHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    position: 'relative',
  },
  tabText: {
    color: '#999',
    fontSize: typography.body,
    fontFamily: fonts.primary.medium,
    fontWeight: fontWeights.medium,
  },
  activeTabText: {
    color: 'white',
    fontFamily: fonts.primary.semiBold,
    fontWeight: fontWeights.semiBold,
  },
  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    borderRadius: 1,
  },
});
