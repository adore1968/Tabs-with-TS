export interface Tab {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

export interface AppProviderValue {
  isLoading: boolean;
  tabs: Tab[];
  currentTab: Tab;
  getCurrentTab: (index: number) => void;
}
