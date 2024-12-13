export default async function logout() {
    try {
        const response = await fetch('/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) {
            return true;
        } else {
            console.error('Erreur lors de l\'envoi du message');
            return false;
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        return false;
    }
}