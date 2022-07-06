const {Router}=require("express");
const Authentication=require("../middleware/auth");

const router=Router();



router.use("/",Authentication);


router.get("/",(req,res)=>{
    console.log(req.user)
    res.send("You already Signed IN.")
})

router.post("/",(req,res)=>{
    // console.log("POST Method Used")
})


module.exports=router;