export interface PosterType {
  id: string;
  title: string;
  imageUrl: string;
  overlayText?: string;
  badge?: string;
  titleBackgroundColor?: string;
}

export interface AppState {
  activeTab: 'smart' | 'advanced';
  selectedPosterType: string;
  promptText: string;
}
