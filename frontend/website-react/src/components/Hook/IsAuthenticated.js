
export default async function IsAuthenticated() {
    try {
        const response = await fetch('/test', {
            method: 'GET',
        });
        if (response.ok) {
            const res = await response.json();
            console.log(res);
            if (res.auth === true) {
                return true
            }
            else {
                return false
            }
        } else {
            console.error('Erreur lors de l\'envoi du message');
            return false;
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        return false;
    }
}