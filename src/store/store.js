import { configureStore, createSlice } from "@reduxjs/toolkit";

let headerClass = createSlice({
    name: "headerClass",
    initialState: "",
    reducers: {
        addClass(state, classText){
            return classText.payload;
        }
    }
});

let toggleActive = createSlice({
    name: "toggleActive",
    initialState: "",
    reducers: {
        toggleClass(state){
            return "active";
        }
    }
});

let containerClass = createSlice({
    name: "containerClass",
    initialState: "",
    reducers: {
        changeClass(state, classText){
            return classText.payload;
        }
    }
});

export let { addClass } = headerClass.actions;
export let { toggleClass } = toggleActive.actions;
export let { changeClass } = containerClass.actions;

export default configureStore({
    reducer: {
        headerClass: headerClass.reducer,
        toggleClass: toggleActive.reducer,
        containerClass: containerClass.reducer,
    }
});