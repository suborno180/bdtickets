import { configureStore } from '@reduxjs/toolkit'
import filterTicketsReducer from './features/filterTicketsSlice';

export const store = configureStore({
  reducer: {
    filterTickets: filterTicketsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch