import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  apparence: true,
  activeConversation: {
    IdUser: 1,
    userName: "Ayechi Nour",
    imgUser: "/image/nour.jpg",
    etat:true
  },
  users: [
    {
      IdUser: 1,
      userName: "Ayechi Nour",
      imgUser: "/image/nour.jpg",
      etat:true
    },
    {
      IdUser: 2,
      userName: "Saidi Youssef",
      imgUser: "/image/youssef.jpg",
      etat:false
    },
    {
      IdUser: 3,
      userName: "Ayechi Nour",
      imgUser: "/image/nour.jpg",
      etat:false
    },
    {
      IdUser: 4,
      userName: "Saidi Youssef",
      imgUser: "/image/youssef.jpg",
      etat:false
    },
    {
      IdUser: 5,
      userName: "Ayechi Nour",
      imgUser: "/image/nour.jpg",
      etat:true
    },
    {
      IdUser: 6,
      userName: "Saidi Youssef",
      imgUser: "/image/youssef.jpg",
      etat:true
    },
    {
      IdUser: 7,
      userName: "Ayechi Nour",
      imgUser: "/image/nour.jpg",
      etat:true
    },
    {
      IdUser: 8,
      userName: "Saidi Youssef",
      imgUser: "/image/youssef.jpg",
      etat:false
    },
    {
      IdUser: 9,
      userName: "Ayechi Nour",
      imgUser: "/image/nour.jpg",
      etat:false
    },
    {
      IdUser: 10,
      userName: "Saidi Youssef",
      imgUser: "/image/youssef.jpg",
      etat:false
    },
    {
      IdUser: 11,
      userName: "Ayechi Nour",
      imgUser: "/image/nour.jpg",
      etat:true
    },
    {
      IdUser: 12,
      userName: "Saidi Youssef",
      imgUser: "/image/youssef.jpg",
      etat:true
    }
  ]
}
export const conversationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeApparence: (state) => {
      state.apparence = false
    },
    changeConversation: (state, action) => {
      const activeConv = state.users.filter(item => item.IdUser === action.payload)
      state.activeConversation = activeConv[0]
      }
  },
})
export const { changeApparence, changeConversation } = conversationSlice.actions
export default conversationSlice.reducer