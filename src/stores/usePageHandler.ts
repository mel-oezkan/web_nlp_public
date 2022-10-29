import create from 'zustand';

interface PageState {
  activeIndex: number;
  activeType: string;
  setActiveIndex: (value: number) => void;
  setActiveType: (value: string) => void;
}

export const usePageHandler = create<PageState>(set => ({
  activeIndex: 0,
  activeType: 'qa',
  setActiveIndex: (value: number) => set({ activeIndex: value }),
  setActiveType: (value: string) => set({ activeType: value }),
}));
