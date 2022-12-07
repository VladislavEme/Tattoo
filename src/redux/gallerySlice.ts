import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GalleryState {
  openGallery: boolean;
  galleryActive: string;
  startImg: number;
}

const initialState: GalleryState = {
  openGallery: false,
  galleryActive: 'Тату',
  startImg: 1,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setOpenGallery: (state) => {
      state.openGallery = true;
    },

    setCloseGallery: (state) => {
      state.openGallery = false;
    },

    setGalleryActive: (state, action: PayloadAction<string>) => {
      state.galleryActive = action.payload;
    },

    setStartActive: (state, action) => {
      state.startImg += action.payload;
    },
  },
});

export const { setOpenGallery, setCloseGallery, setGalleryActive, setStartActive } = gallerySlice.actions;

export default gallerySlice.reducer;
