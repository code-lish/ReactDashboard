import { io } from 'socket.io-client'
import { URL } from '../config/HTTPRequests'

const assetURI = (path) => {
    if (path) return `${URL}/${path.replace(/\\+/g, "/")}`

    return path
}

let socket;
const getSocket = () => {

    if (!socket) {
        socket = io("http://localhost:5000", {
            withCredentials: true,
        });
    }

    return socket;
}

export {
    assetURI,
    getSocket
}