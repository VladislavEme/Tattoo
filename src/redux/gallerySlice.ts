import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GalleryState {
  openGallery: boolean;
  galleryActive: string;
  imgData: string[];
  currentPage: number;
  isLoadingGallery: boolean;
  amountPage: number;
}

const initialState: GalleryState = {
  openGallery: false,
  galleryActive: 'Тату',
  imgData: [],
  currentPage: 1,
  isLoadingGallery: false,
  amountPage: 0,
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

    setIsLoadingGallery: (state, action: PayloadAction<boolean>) => {
      state.isLoadingGallery = action.payload;
    },

    setStepPage: (state, action: PayloadAction<number>) => {
      state.currentPage += action.payload;
    },

    setAmountPage: (state) => {
      state.amountPage = Math.ceil(state.imgData.length / 7);
    },
  },
});

export const {
  setOpenGallery,
  setCloseGallery,
  setGalleryActive,
  setImgData,
  setCurrentPage,
  setIsLoadingGallery,
  setStepPage,
  setAmountPage,
} = gallerySlice.actions;

export default gallerySlice.reducer;
