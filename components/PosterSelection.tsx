import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { responsive, typography, spacing, dimensions } from '../utils/responsive';
import { fonts, fontWeights } from '../constants/fonts';

interface PosterType {
  id: string;
  title: string;
  imageUrl: string;
  overlayText?: string;
  badge?: string;
  titleBackgroundColor?: string;
}

interface PosterCardProps {
  poster: PosterType;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const PosterCard: React.FC<PosterCardProps> = ({ poster, isSelected, onSelect }) => {
  const cardWidth = responsive.cardWidth(30);
  const cardHeight = responsive.cardHeight(15);
  const imageWidth = cardWidth * 0.9;
  const imageHeight = cardHeight * 0.7;

  return (
    <TouchableOpacity 
      style={[styles.posterCard, { width: cardWidth }]}
      onPress={() => onSelect(poster.id)}
    >
      <View style={[
        styles.posterCardContainer, 
        isSelected && styles.selectedPosterCardContainer
      ]}>
        <View style={styles.posterImageContainer}>
          <Image 
            source={{ uri: poster.imageUrl }} 
            style={[styles.posterImage, { width: imageWidth, height: imageHeight }]} 
          />
          {poster.overlayText && (
            <View style={styles.overlayTextContainer}>
              <Text style={styles.overlayText}>{poster.overlayText}</Text>
            </View>
          )}
          {poster.badge && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{poster.badge}</Text>
            </View>
          )}
        </View>
        {/* Title as part of the overall card curve */}
        <View style={[
          styles.titleContainer,
          { backgroundColor: poster.titleBackgroundColor || '#2C2C2C' }
        ]}>
          <Text style={styles.posterTitle}>{poster.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface PosterSelectionProps {
  posterTypes: PosterType[];
  selectedPosterType: string;
  onPosterSelect: (id: string) => void;
}

export const PosterSelection: React.FC<PosterSelectionProps> = ({ 
  posterTypes, 
  selectedPosterType, 
  onPosterSelect 
}) => {
  return (
    <View style={styles.posterSelectionContainer}>
      <Text style={styles.sectionTitle}>What type of posters do you want to create?</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.posterScrollContainer}
      >
        {posterTypes.map((poster) => (
          <PosterCard 
            key={poster.id} 
            poster={poster} 
            isSelected={selectedPosterType === poster.id}
            onSelect={onPosterSelect}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  posterSelectionContainer: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    color: 'white',
    fontSize: typography.h4,
    fontFamily: fonts.primary.bold,
    // fontWeight: fontWeights.bold,
    marginBottom: spacing.md,
    marginEnd: spacing.md
  },
  posterScrollContainer: {
    paddingRight: spacing.md,
  },
  posterCard: {
    marginRight: spacing.xs,
    alignItems: 'center',
  },
  posterCardContainer: {
    borderRadius: dimensions.cardRadius,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedPosterCardContainer: {
    borderColor: 'white',
  },
  posterImageContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  posterImage: {
    // borderRadius: dimensions.cardRadius,
  },
  overlayTextContainer: {
    position: 'absolute',
    bottom: spacing.xs,
    left: spacing.xs,
    right: spacing.xs,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
    padding: 4,
  },
  overlayText: {
    color: 'white',
    fontSize: typography.caption,
    fontFamily: fonts.primary.semiBold,
    fontWeight: fontWeights.semiBold,
    textAlign: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: spacing.xs,
    right: spacing.xs,
    backgroundColor: '#FFD700',
    borderRadius: dimensions.cardRadius,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#000',
    fontSize: typography.caption,
    fontFamily: fonts.primary.bold,
    // fontWeight: fontWeights.bold,
  },
  titleContainer: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
  posterTitle: {
    color: 'white',
    fontSize: typography.bodySmall,
    fontFamily: fonts.primary.regular,
    fontWeight: fontWeights.regular,
    textAlign: 'center',
  },
});
