import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from '../services/users.service';

const initialState = {
    list: [],
    loading: false,
    error: null
}

export const allUsers = createAsyncThunk('users/all', async (data, { rejectWithValue }) => {
    try {
        const response = await usersService.getAll();
        return response;
    } catch (e) {
        rejectWithValue(e.message);
    }
});

export const deleteUser = createAsyncThunk('users/delete', async (userId, { rejectWithValue }) => {
    try {
        const response = await usersService.delete(userId);
        return userId;
    } catch (e) {
        rejectWithValue(e.message);
    }
});


export const createUser = createAsyncThunk('users/create', async (user, { rejectWithValue }) => {
    try {
        const response = await usersService.createUser(user);
        const newUser = {
            ...user,
            id:response.id
        }
   
        return newUser;
    } catch (e) {
        rejectWithValue(e.message);
    }
});


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(allUsers.pending, (state, action) => {
            if (state.loading == false) {
                state.loading = true;
            }
        });
        builder.addCase(allUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        });
        builder.addCase(allUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(deleteUser.pending, (state, action) => {
            if (state.loading == false) {
                state.loading = true;
            }
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.list = state.list.filter(user => {
                if (user.id == action.payload) {
                    return false;
                }
                return true;
            });


        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.list.push(action.payload);
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            console.log(action.payload);
        });
    }
});

export default userSlice.reducer;