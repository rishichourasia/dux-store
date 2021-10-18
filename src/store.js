import { createStore } from "redux";
import { rootReducer } from "./components/reducers";

const store = createStore(rootReducer);

export default store;
