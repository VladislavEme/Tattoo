import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GalleryState {
  openGallery: boolean;
  galleryActive: string;
  imgData: string[];
  currentPage: number;
}

const initialState: GalleryState = {
  openGallery: false,
  galleryActive: 'Тату',
  imgData: [],
  currentPage: 1,
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

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setOpenGallery, setCloseGallery, setGalleryActive, setImgData, setCurrentPage } = gallerySlice.actions;

export default gallerySlice.reducer;
