const authQuery = {
    setUser: `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)`
}

export default authQuery;