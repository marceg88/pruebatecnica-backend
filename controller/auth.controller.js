const loginAdmin = (req, res) => {
    if(req.user){
        const payload = {
            sub: req.user._id,
            userName: req.user.userName
        }
        // const token = jwt.sign()
    }
}