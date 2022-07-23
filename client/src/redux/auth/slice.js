import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/index";

// state

const initialState = {
  loading: false,
  error: null,
  token: null,
  data: {},
  tickets: [],
  ticket:{}
  
};

export const register = createAsyncThunk(
  "user/register",

  async (paramaters, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8800/api/auth/register`,
      {
        username: paramaters.username,
        email: paramaters.email,
        password: paramaters.password,
      }
    );

    return data; // return must be token,otherwise will cause token invalid
  }
);

export const signIn = createAsyncThunk(
  "user/singIn",

  async (paramaters, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8800/api/auth/login`, {
      email: paramaters.email,
      password: paramaters.password,
    });
    localStorage.setItem("token", data.token);
    return data.token; // return must be token,otherwise will cause token invalid
  }
);

export const buildTicket = createAsyncThunk(
  "tickets/buildticket",

  async (paramaters, thunkAPI) => {
    // const token = thunkAPI.getState().state.token;

    const res = await axios.post(
      "http://localhost:8800/api/ticket",

      paramaters
    );

    return res.data; // return must be token,otherwise will cause token invalid
  }
);

export const loadtickets = createAsyncThunk(
  "tickets/loadtickets",

  async (_, thunkAPI) => {
    // const token = thunkAPI.getState().state.token;

    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:8800/api/ticket", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    return res.data; // return must be token,otherwise will cause token invalid
  }
);

export const loadAticket = createAsyncThunk(
  "tickets/loadAticket",

  async (paramaters, thunkAPI) => {
    // const token = thunkAPI.getState().state.token;

    // const token = localStorage.getItem("token");
    const res = await axios.get(
      `http://localhost:8800/api/ticket/${paramaters}`
    );

    return res.data; // return must be token,otherwise will cause token invalid
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  // reducers
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    // function as reducers object content

    // pending
    [register.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [register.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    // rejected

    [register.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // pending
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    // rejected

    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [loadtickets.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [loadtickets.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.tickets = [...state.tickets, ...action.payload];
    },
    // rejected

    [loadtickets.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [loadAticket.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [loadAticket.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.ticket =action.payload
    
    },
    // rejected

    [loadAticket.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
// action
// Action creators are generated for each case reducer function
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
