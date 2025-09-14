import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { responsive, typography, spacing, dimensions } from '../utils/responsive';
import { fonts } from '../constants/fonts';

interface PromptInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onImageUpload: () => void;
}

export const PromptInput: React.FC<PromptInputProps> = ({ 
  value, 
  onChangeText, 
  onImageUpload 
}) => {
  return (
    <View style={styles.promptContainer}>
      <TextInput
        style={styles.promptInput}
        value={value}
        onChangeText={onChangeText}
        multiline
        placeholderTextColor="#999"
        placeholder="Enter your prompt here..."
      />
      <TouchableOpacity style={styles.imageUploadButton} onPress={onImageUpload}>
        <Ionicons name="image-outline" size={dimensions.iconSizeSmall} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  promptContainer: {
    marginBottom: spacing.xl,
    position: 'relative',
  },
  promptInput: {
    backgroundColor: '#1A1A1A',
    borderRadius: dimensions.cardRadius,
    // padding: spacing.md,
    paddingBottom: 70,
    paddingTop: spacing.md,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    color: 'white',
    fontSize: typography.body,
    fontFamily: fonts.primary.regular,
    minHeight: responsive.hp(15),
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#333',
  },
  imageUploadButton: {
    position: 'absolute',
    bottom: spacing.xs,
    right: spacing.md,
    padding: spacing.sm,
    
  },
});
