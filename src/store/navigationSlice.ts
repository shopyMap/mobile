import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NavigationState {
  path: string[];
  urlPath: string[];
}

const initialState: NavigationState = {
  path: [],
  urlPath: [],
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    navigateToSubcategory(
      state,
      action: PayloadAction<{subcategory: string; subcategoryUrl: string}>,
    ) {
      const {subcategory, subcategoryUrl} = action.payload;

      const updatePath = (pathArray: string[], value: string) => {
        const index = pathArray.indexOf(value);

        if (index !== -1) {
          return pathArray.slice(0, index + 1);
        }
        return [...pathArray, value];
      };

      state.path = updatePath(state.path, subcategory);
      state.urlPath = updatePath(state.urlPath, subcategoryUrl);
    },

    navigateBack(state) {
      state.path.pop();
      state.urlPath.pop();
    },
    resetNavigation(state) {
      state.path = [];
      state.urlPath = [];
    },
  },
});

export const {navigateToSubcategory, navigateBack, resetNavigation} =
  navigationSlice.actions;
export default navigationSlice.reducer;
