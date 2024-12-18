const queries = {
    userProfile:
    {
        checkIfProfileExist:`
            SELECT EXISTS(SELECT user_id FROM user_profiles WHERE user_id = $1) as exist;
            `,
    },
}

export default queries;