import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authActions } from '_store';
import { fetchWrapper } from '_helpers';

// create slice

const name = 'audit';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const auditActions = { ...slice.actions, ...extraActions };
export const auditReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        list: null,
        item: null
    }
}

function createExtraActions() {
    console.log("shbhbbb")
    const baseUrl = `${process.env.REACT_APP_API_URL}/auditor`;

    return {
        registers: registers(),
        
    };

    

    function registers() {
        return createAsyncThunk(
            `${name}/getAll`,
            async () => await fetchWrapper.get(baseUrl)
        );
    }


  
}

function createExtraReducers() {
    return (builder) => {
        registers();

        function registers() {
            var { pending, fulfilled, rejected } = extraActions.registers;
            builder
                .addCase(pending, (state) => {
                    state.list = { loading: true };
                })
                .addCase(fulfilled, (state, action) => {
                    state.list = { value: action.payload };
                })
                .addCase(rejected, (state, action) => {
                    state.list = { error: action.error };
                });
        }

    }

}
