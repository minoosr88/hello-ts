import { Request, Response, NextFunction } from 'express';
import { AxiosResponse } from 'axios';

const axios = require("axios")

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String
}


const addSinglePost = async (req:Request, res:Response, next:NextFunction)=>{
    try{
      const body: string = req.body.body;
      const title: string = req.body.title;

      const config ={
        method:'post',
        url:'https://jsonplaceholder.typicode.cm/posts/',
        data:{
            title: title,
            body: body
        }
      }
      const response: AxiosResponse = await axios(config);
      return res.status(200).json({
        message:response.data
       });
    }catch(error : any){
            return res.status(404).json({
                message: error.code
            })

}

};

export default {addSinglePost}