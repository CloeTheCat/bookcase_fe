import { configureStore, createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0,
      titolo: ''
    },
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: state => {
            state.user = null;
        }
    }
})

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer
  }
})



export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { setUser, logout } = loginSlice.actions