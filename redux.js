const redux = require("redux");

const createStore = redux.createStore;

const intialState = {
  counter: 0
};

// Reducers will be define first from the all
const rootReducer = (state = intialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 5
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription  //It should always be after the store of the app
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatiching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
