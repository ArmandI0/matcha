const errManagement = {
    handleDatabaseError(error){
        if (error.code === 'ECONNREFUSED') {
            return {
                status: 503,
                message: 'Service temporarily unavailable. Please try again later.',
            };
        } else if (error.code === '23505') {
            return {
                status: 400,
                message: 'A user with this email or username already exists.',
            };
        } else {
            return {
                status: 500,
                message: 'An internal error occurred. Please try again later.',
            };
        }
    }
}

export default errManagement;