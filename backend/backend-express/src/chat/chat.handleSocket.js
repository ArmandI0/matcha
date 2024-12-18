import { fetchConversation, updateConversation, insertConversation, getNewMessage } from './chat.sendMessage.js';

const handleChatMessage = async (io, data) => {
    console.log(`Message de chat reçu :`, data);
    io.emit('message', data);

    // Enregistrer le message dans la base de données
    try {
        const { message, receiverData } = data;
        const senderData = message.sender;
        const conversation = await fetchConversation(senderData.id, receiverData.id);
        const newMessage = getNewMessage(senderData, message.message);

        if (conversation) {
            const updatedMessages = conversation.messages;
            updatedMessages.push(newMessage);
            await updateConversation(updatedMessages, conversation.id);
        } else {
            await insertConversation(senderData.id, receiverData.id, [newMessage]);
        }
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement du message:', error);
    }
};

export { handleChatMessage };