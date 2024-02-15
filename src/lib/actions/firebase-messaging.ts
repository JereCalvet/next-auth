'use server'

import { getMessaging, Message, MulticastMessage } from "firebase-admin/messaging";
// // This registration token comes from the client FCM SDKs.
// const registrationToken = '';

// const message = {
//     notification: {
//         title: '`$FooCorp` up 1.43% on the day',
//         body: 'FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
//     },
//     android: {
//         notification: {
//             icon: 'stock_ticker_update',
//             color: '#7e55c3'
//         }
//     },
//     token: registrationToken
// };

/**
 * Send a message to the device corresponding to the provided in the registration token.
 */
export const send = (message: Message) => {
    getMessaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
}

// This registration token comes from the client FCM SDKs.
// const registrationToken1 = ''
// const registrationToken2 = ''
// const message: MulticastMessage = {
//     notification: {
//         title: '`$FooCorp` up 1.43% on the day',
//         body: 'FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
//     },
//     android: {
//         notification: {
//             icon: 'stock_ticker_update',
//             color: '#7e55c3'
//         }
//     },
//     tokens: [registrationToken1, registrationToken2]
// };
export const sendToAll = (message: MulticastMessage) => {
    getMessaging().sendEachForMulticast(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
}