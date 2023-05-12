const router =require("express").Router()
const donorAuthController =require("../controller/donorAuthController")
const solicitorAuthController =require("../controller/solicitorAuthController")


router.post("/signup/donor",donorAuthController.donorSignup)
router.post("/signin/donor",donorAuthController.donorSignin)
router.post("/signup/solicitor",solicitorAuthController.solicitorSignup)
router.post("/signin/donor",solicitorAuthController.solicitorSignin)

module.exports =router