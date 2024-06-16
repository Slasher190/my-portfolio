import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@app/redux/slices/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
