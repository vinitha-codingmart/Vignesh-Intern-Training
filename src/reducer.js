let initialstate = {
  data: []
};
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Add":
      {
        let data = state.data;

        state = { ...state, data: action.payload };
      }
      break;
    case "Ad":
      {
        let data = state.data;
        if (data != "") {
          let i = parseInt(action.payload);
          console.log("payload", i);
          let j = parseInt(data[i]);
          console.log("on reducer", data[action.payload]);
          let g = data[action.payload];
          console.log("gggggggggggg", g);
          data[action.payload].count = (
            parseInt(data[action.payload].count) + 1
          ).toString();
          state = { ...state, data: data };
        }
      }
      break;

    case "newvalue": {
      let data = state.data;
      console.log("new value reducer", action.payload);
      data.push(action.payload);
      state = { ...state, data: data };
    }
  }
  // break;
  return state;
};

export default reducer;
