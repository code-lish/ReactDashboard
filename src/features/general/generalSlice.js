import { createSlice } from '@reduxjs/toolkit'

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        chatDetails: null,
    },
    reducers: {
        setChatDetails: (state, action) => {
            state.chatDetails = action.payload
        }
    }
})

export const {
    setChatDetails
} = generalSlice.actions

export default generalSlice.reducer

export const selectCurrentToken = (state) => state.general.userInfo?.accessToken