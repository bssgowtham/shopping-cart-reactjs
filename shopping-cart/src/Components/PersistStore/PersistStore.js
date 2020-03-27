import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import cartReducer from '../Reducers/cartReducer';


const persistConfig = {
    key: 'root',
    storage: storage,
    // Defines how incoming state to be merged with initial state.
    stateReconciler: autoMergeLevel2,
    whitelist: ['addedItems, total'],
    blacklist: ['total']
}

const pReducer = persistReducer(persistConfig, cartReducer);

export const store = createStore(pReducer);

export const persistor = persistStore(store);