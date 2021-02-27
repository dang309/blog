import { createStore } from "redux";

import rootReducer from "./reducer/index";

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);
