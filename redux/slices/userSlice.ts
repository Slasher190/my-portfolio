// store/exampleSlice.ts
import { ErrorHandler, User } from "@app/graphql/graphql";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user?: User;
  error?: ErrorHandler | null;
  loading: boolean;
  __typename: string;
}

const initialState: UserState = {
  user: {} as User,
  error: null,
  loading: false,
  __typename: "",
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    userMutationStart(state) {
      state.loading = true;
      state.error = null;
    },
    userMutationSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.__typename = action.payload.__typename;
    },
    userMutationError(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.__typename = action.payload.__typename;
    },
  },
});

export const { userMutationStart, userMutationSuccess, userMutationError } =
  userSlice.actions;
export default userSlice.reducer;
