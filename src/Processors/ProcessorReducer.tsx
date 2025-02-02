import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProcessorStateContract} from "./ProcessorStateContract";
import {ProcessorFunctionsContract} from "./ProcessorFunctionsContract";

const initialProcessor: ProcessorStateContract = {
    code: 'dataprev',
    processors: []
}

const processorsSlice = createSlice({
    name: 'processors',
    initialState: initialProcessor,
    reducers: {
        registerProcessor(state, action: PayloadAction<ProcessorFunctionsContract>) {
            state.processors.push(action.payload);
        },
        useProcessor(state, action: PayloadAction<string | null>) {
            state.code = action.payload;
        },
    },
});
export const {registerProcessor, useProcessor} = processorsSlice.actions;
export const processorsReducer = processorsSlice.reducer;