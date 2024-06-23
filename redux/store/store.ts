import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@app/redux/slices/userSlice";
import themeSlice from "@app/redux/slices/themeSlice";
import nightmodeSlice from "@app/redux/slices/nightmodeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      theme: themeSlice,
      nightMode: nightmodeSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
