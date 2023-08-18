import { Request, Response, NextFunction } from 'express';
import { AxiosResponse } from 'axios';

const axios = require("axios")


const deleteSinglePost = async (req:Request, res:Response, next:NextFunction)=>{
    try{
        const id: String = req.params.id

        const response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/psts/${id}`)
        return res.status(200).json({
            message: 'The post deleted successfully.'
        })

    }catch(error : any){
            return res.status(error.status).json({
                message: error.code
            })




    }

};

export default {deleteSinglePost}