import { createSlice } from '@reduxjs/toolkit'

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        chatDetails: null,
        messageDetails: null,
        socket: null
    },
    reducers: {
        setChatDetails: (state, action) => {
            state.chatDetails = action.payload
        },
        setMessageDetails: (state, action) => {
            state.messageDetails = action.payload
        },
        setSocket: (state, action) => {
            state.socket = action.payload
        }
    }
})

export const {
    setSocket,
    setChatDetails,
    setMessageDetails
} = generalSlice.actions

export default generalSlice.reducer

export const selectCurrentToken = (state) => state.general.userInfo?.accessToken