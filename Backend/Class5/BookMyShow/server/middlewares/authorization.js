const authorizedRoles = (...allowedUsers) => (req, res, next) => {
    try {
        // Get user role
        const role = req.user?.role;

        console.log(role, allowedUsers);
        // If current role is allowed
        if (!allowedUsers.includes(role)) {
            return res.status(403).send('You are not authorized!');
        }
        next();
    } catch (e) {
        return res.status(500).send(e);
    }
}

export default authorizedRoles;