import { IUser } from '@/types/models/User';
import { generateRandomString } from '@/utils/helpers/string.helpers';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

const initialState: AuthState = {
  // TODO: get these values from an api or local storage.
  firstName: 'Malek',
  lastName: 'MNERI',
  email: 'malek@email.com',
  photo: 'https://api.dicebear.com/8.x/adventurer/svg?seed=' + generateRandomString(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      const user = action.payload;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
      state.email = user.email;
      state.photo = user.photo;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
