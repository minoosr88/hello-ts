import { Request, Response, NextFunction } from 'express';
import  { AxiosResponse } from 'axios';

const axios = require("axios")

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String
}

const updateSinglePost = async (req:Request, res:Response,next: NextFunction) =>{
    const id: String = req.params.id;
    const title: String = req.body.title ?? null;
    const body: String = req.body.body ?? null;

    const response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: title,
        body: body
    });

    return res.status(200).json({
        message:response.data
    });

};

// const updateSinglePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req.params
//     let id: string = req.params.id;
//     // get the data from req.body
//     let title: string = req.body.title ?? null;
//     let body: string = req.body.body ?? null;
//     // update the post
//     let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         ...(title && { title }),
//         ...(body && { body })
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };

export default {updateSinglePost};