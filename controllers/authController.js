import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModels.js"
import jwt from "jsonwebtoken"

export const registerController = async (req,res) => {
  try {
    const { name, email, password, phone, address } = req.body

    //validation
    if (!name) {
      return res.send({ message: 'Name is required' })
    }
    if (!email) {
      return res.send({ message: 'Email is required' })
    }
    if (!password) {
      return res.send({ message: 'Password is required' })
    }
    if (!phone) {

      return res.send({ message: 'Phone no is required' })
    }
    if (!address) {
      return res.send({ message: 'Address is required' })
    }
    //check user
    const existingUser = await userModel.findOne({ email })
    //existingUser
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: 'Already Register please login'
      })
    }

    //registeruser
    const hashedPassword = await hashPassword(password)
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword
    }).save()
    res.status(200).send({
      success: true,
      message: 'user register successfully',
      user,
    })


  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Registertion',
      error
    })

  }
}
export const loginController = async(req,res) => {
  try {
    const {email,password } = req.body
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success:false,
        message:'Invaild email or password'
      })
      
    }
//check user
const user = await userModel.findOne({email})
if(!user){
  return res.status(404).send({
    success:false,
    message:'email is not register'
  })
}
//match password  
    const match = await comparePassword(password,user.password)
    if(!match){
      return res.status(200).send({
        success:false,
        message:'invalid password'
      })
    }
    //token
    const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{
      expiresIn:"7d"
    })
    res.status(200).send({
      success:true,
      message:'login successfully',
      user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address

      },
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'error in login',
      error
    })
    
  }
}
export const testController = async (req,res) => {
  res.send ("protected router")
  
}
