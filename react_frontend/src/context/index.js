import React from 'react';
//esto esta en veremos "npm i amqplib"
const GeneralContext = React.createContext();
function GeneralProvider(props) {
    const dbSimulator = sessionStorage.getItem("chats");
    const [chats, setChats] = React.useState(JSON.parse(dbSimulator) ? JSON.parse(dbSimulator) : [{
        usuario: "Mateo",
        mensajes: [
            {
                mensaje: "Hola",
                tipo: "e"
            },
            {
                mensaje: "Hola como vas?",
                tipo: "r"
            },
            {
                mensaje: "Todo bien y tu?",
                tipo: "e"
            },
            {
                mensaje: "Aqui perdiendo el ciclo jajaja",
                tipo: "r"
            }
        ]
    },
    {
        usuario: "Juan",
        mensajes: [
            {
                mensaje: "Hola juan",
                tipo: "e"
            },
            {
                mensaje: "Hola como vas pedro?",
                tipo: "r"
            },
            {
                mensaje: "Todo bien y tu luquitas?",
                tipo: "e"
            },
            {
                mensaje: "Aqui salvando el ciclo jajaja",
                tipo: "r"
            }
        ]
    }]);
    // const [chats, setChats] = React.useState([
    //     {
    //         usuario: "Mateo",
    //         mensajes: [
    //             {
    //                 mensaje: "Hola",
    //                 tipo: "e"
    //             },
    //             {
    //                 mensaje: "Hola como vas?",
    //                 tipo: "r"
    //             },
    //             {
    //                 mensaje: "Todo bien y tu?",
    //                 tipo: "e"
    //             },
    //             {
    //                 mensaje: "Aqui perdiendo el ciclo jajaja",
    //                 tipo: "r"
    //             }
    //         ]
    //     },
    //     {
    //         usuario: "Juan",
    //         mensajes: [
    //             {
    //                 mensaje: "Hola juan",
    //                 tipo: "e"
    //             },
    //             {
    //                 mensaje: "Hola como vas pedro?",
    //                 tipo: "r"
    //             },
    //             {
    //                 mensaje: "Todo bien y tu luquitas?",
    //                 tipo: "e"
    //             },
    //             {
    //                 mensaje: "Aqui salvando el ciclo jajaja",
    //                 tipo: "r"
    //             }
    //         ]
    //     }
    // ])
    const [actualChat, setActualChat] = React.useState({})
    const agregarMensaje = (usuario, mensajeNuevo) => {
        let auxChats = [...chats];
        let actualMensajes = auxChats.find(function (chatAux) {
            return chatAux.usuario === usuario
        })
        let auxMensajes = [...actualMensajes.mensajes]
        auxMensajes.push({
            mensaje: mensajeNuevo,
            tipo: "e"
        })
        auxChats.map(function (chat) {
            if (chat.usuario === usuario) {
                chat.mensajes = auxMensajes
            }
            return chat
        })
        setChats(auxChats);
        sessionStorage.setItem("chats", JSON.stringify(auxChats));
    }
    return (
        <GeneralContext.Provider value={{
            actualChat,
            setActualChat,
            chats,
            setChats,
            agregarMensaje
        }}>
            {props.children}
        </GeneralContext.Provider>
    )
} export { GeneralContext, GeneralProvider }