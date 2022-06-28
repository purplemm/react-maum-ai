import { configureStore, createSlice } from "@reduxjs/toolkit";

let htmlTitle = createSlice({
    name: "htmlTitle",
    initialState: "",
    reducers: {
        changeTitle(state, title){
            const titElem = document.getElementsByTagName("title")[0]; 
            return titElem.innerHTML = "maum.ai platform | " + title.payload;
        }
    }
});

let commAsideNav = createSlice({
    name: "commAsideNav",
    initialState: "",
    reducers: {
        asideOpen(state, classText){
            return classText.payload;
        }
    }
});

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

export let { changeTitle } = htmlTitle.actions;
export let { asideOpen } = commAsideNav.actions;
export let { addClass } = headerClass.actions;
export let { toggleClass } = toggleActive.actions;
export let { changeClass } = containerClass.actions;

export default configureStore({
    reducer: {
        htmlTitle: htmlTitle.reducer,
        commAsideNav: commAsideNav.reducer,
        headerClass: headerClass.reducer,
        toggleClass: toggleActive.reducer,
        containerClass: containerClass.reducer,
    }
});