import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const studentSlice = createSlice({
    name: 'students',
    initialState: { students: [] },
    reducers: {
        setStudents: (state, action) => { state.students = action.payload; }
    }
});

export const { setStudents } = studentSlice.actions;
export const fetchStudents = () => async dispatch => {
    const response = await axios.get('http://localhost:5000/students');
    dispatch(setStudents(response.data));
};

const store = configureStore({ reducer: { students: studentSlice.reducer } });
export default store;
