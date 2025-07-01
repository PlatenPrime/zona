import axios from 'axios'


const BOT_API_TOKEN = '5588902349:AAGFj2MtrE8hyXDvVSVd2kN1x2nshs4PDQQ'


export const sendMessageToTelegram = async (message) => {
    try {
        const response = await axios.post(`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage`, {
            chat_id: '@kassabtw', // Replace 'CHAT_ID' with your actual chat ID
            text: message,
        });
        console.log('Message sent:', response.data);

    } catch (error) {
        console.error('Error sending message:', error);

    }

};



// Функция для отправки сообщения в чат
export const sendMessageToChat = async (message, chatId) => {
    try {
        const response = await axios.post(`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: message,
        });
        console.log('Message sent to chat:', response.data);
    } catch (error) {
        console.error('Error sending message to chat:', error);
    }
};

// Функция для отправки сообщения пользователю
export const sendMessageToUser = async (message, userId) => {
    try {
        const response = await axios.post(`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage`, {
            chat_id: userId,
            text: message,
            parse_mode: 'HTML',
        });
        console.log('Message sent to user:', response.data);
    } catch (error) {
        console.error('Error sending message to user:', error);
    }
};
