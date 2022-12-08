import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GalleryState {
  openGallery: boolean;
  galleryActive: string;
}

const initialState: GalleryState = {
  openGallery: false,
  galleryActive: 'Тату',
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
  },
});

export const { setOpenGallery, setCloseGallery, setGalleryActive } = gallerySlice.actions;

export default gallerySlice.reducer;
