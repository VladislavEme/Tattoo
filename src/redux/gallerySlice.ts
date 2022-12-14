import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GalleryState {
  openGallery: boolean;
  galleryActive: string;
  imgData: string[];
}

const initialState: GalleryState = {
  openGallery: false,
  galleryActive: 'Тату',
  imgData: ['img1', 'img2', 'img3'],
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

    setImgData: (state, action: PayloadAction<string[]>) => {
      state.imgData = action.payload;
    },
  },
});

export const { setOpenGallery, setCloseGallery, setGalleryActive, setImgData } = gallerySlice.actions;

export default gallerySlice.reducer;
