import {configureStore} from '@reduxjs/toolkit';
import {processorsReducer} from "../Processors/ProcessorReducer";

export const store = configureStore({
    reducer: processorsReducer
});

// store.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;