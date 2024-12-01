const authQueries = {
    userManagement:
    {
        setUser:`
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id`,

        checkIfUsernameAlreadyExist:`
            SELECT EXISTS(SELECT 1 FROM users WHERE username = $1) as exist;
            `,

        checkIfEmailAlreadyExist:`
            SELECT EXISTS(SELECT 1 FROM users WHERE email = $1) as exist;
            `
    },

    userProfile:
    {
        setName:`
            INSERT INTO user_profiles (user_id, first_name, last_name)
            VALUES ($1, $2, $3)`
    }

}

export default authQueries;