import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { responsive, spacing } from './utils/responsive';

// Components
import { Header } from './components/Header';
import { PosterSelection } from './components/PosterSelection';
import { PromptInput } from './components/PromptInput';
import { SettingsSection } from './components/SettingsSection';
import { GenerateButton } from './components/GenerateButton';
import { Footer } from './components/Footer';
import { CustomSplashScreen } from './components/SplashScreen';

// Data and Types
import { posterTypes } from './data/posterTypes';
import { AppState } from './types';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AppState['activeTab']>('smart');
  const [selectedPosterType, setSelectedPosterType] = useState('1');
  const [promptText, setPromptText] = useState('stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting.');

  useEffect(() => {
    // Hide the native splash screen
    SplashScreen.hideAsync();
  }, []);

  const handleClose = () => {
    Alert.alert('Close', 'Close button pressed');
  };

  const handleTabChange = (tab: AppState['activeTab']) => {
    setActiveTab(tab);
  };

  const handlePosterSelect = (id: string) => {
    setSelectedPosterType(id);
  };

  const handlePromptChange = (text: string) => {
    setPromptText(text);
  };

  const handleImageUpload = () => {
    Alert.alert('Image Upload', 'Image upload functionality');
  };

  const handleSizePress = () => {
    Alert.alert('Size Settings', 'Size selection modal');
  };

  const handleCategoryPress = () => {
    Alert.alert('Category Settings', 'Category selection modal');
  };

  const handleGenerate = () => {
    Alert.alert(
      'Generate Poster', 
      `Generating poster with:\nTab: ${activeTab}\nType: ${selectedPosterType}\nPrompt: ${promptText.substring(0, 50)}...`
    );
  };

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <CustomSplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <Header 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onClose={handleClose}
      />
      
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <PosterSelection 
          posterTypes={posterTypes}
          selectedPosterType={selectedPosterType}
          onPosterSelect={handlePosterSelect}
        />
        
        <PromptInput 
          value={promptText}
          onChangeText={handlePromptChange}
          onImageUpload={handleImageUpload}
        />
        
        <SettingsSection 
          onSizePress={handleSizePress}
          onCategoryPress={handleCategoryPress}
        />
      </ScrollView>
      
      <GenerateButton 
        onPress={handleGenerate}
        disabled={!promptText.trim()}
      />
      
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  scrollContent: {
    paddingBottom: spacing.md,
  },
});