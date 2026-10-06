// User Service - Production Release v1.0.1 (Hotfix Applied)
function getUserProfile(user) {
    // HOTFIX v1.0.1: Loai bo passwordHash de ngan chan rui ro lo du lieu nhay cam
    return {
        id: user.id,
        username: user.username,
        email: user.email
    };
}

// --- End of Core Profile Module ---

module.exports = { getUserProfile };
