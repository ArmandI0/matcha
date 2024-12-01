const authQueries = {
    userManagement:
    {
        setUser:`
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)`,

        checkIfUsernameAlreadyExist:`
            SELECT EXISTS(SELECT 1 FROM users WHERE username = $1) as exist;
            `,

        checkIfEmailAlreadyExist:`
            SELECT EXISTS(SELECT 1 FROM users WHERE email = $1) as exist;
            `
    }

}

export default authQueries;