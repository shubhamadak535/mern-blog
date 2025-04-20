import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/user/user.slice'
// import sessionStorage from 'redux-persist/es/storage/session'
// import persistReducer from 'redux-persist/es/persistReducer'
import { persistReducer, persistStore } from 'redux-persist' // ✅ use named imports
import sessionStorage from 'redux-persist/lib/storage/session' // ✅ use lib, not es


const rootReducer = combineReducers({
  user: userReducer
})


const persistConfig = {
  key: 'root',
  storage: sessionStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)