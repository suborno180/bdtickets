import { configureStore } from '@reduxjs/toolkit'
import divisionsReducer from './features/divisionsSlice';

export const store = configureStore({
  reducer: {
    divisions: divisionsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch