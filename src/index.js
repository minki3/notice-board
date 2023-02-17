import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Provider } from "react-redux";
import Store from "./pages/store/store";

// const number = 0;

// const reducer = (state = number, action) => {
//   if (action.type === "plus") {
//     state++;
//     return state;
//   } else if (action.type === "minus") {
//     state--;
//     return state;
//   } else if (action.type === "reset") {
//     state = 0;
//     return state;
//   }

//   return state;
// };

// const store = createStore(reducer); redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
