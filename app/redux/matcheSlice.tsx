import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MatcheSlice {
  matche: any;
  zones: any;
  cardes: any;
}

const initialState: MatcheSlice = {
  matche: "b",
  zones: "z",
  cardes: [],
};

export const matcheSlice = createSlice({
  name: "nextmatche",
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<any>) => {
  
      state.matche = action.payload;
    },
    setZones: (state, action: PayloadAction<any>) => {
    

      state.zones = action.payload;
    },
    setCards: (state, action: PayloadAction<any>) => {
      
      state.cardes = action.payload.cards;
      
    },
  },
});

export const { setMatches, setZones,setCards } = matcheSlice.actions;

export default matcheSlice.reducer;
