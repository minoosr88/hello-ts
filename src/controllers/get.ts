import { Request, Response, NextFunction } from 'express';
import { AxiosResponse } from 'axios';

const axios = require("axios")

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String
}

const getAllPosts = async (req: Request, res: Response, next: NextFunction) =>{
    const result : AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};

// const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
//     // get some posts
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
//     let posts: [Post] = result.data;
//     return res.status(200).json({
//         message: posts
//     });
// };


const getSinglePost = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const id: String = req.params.id;
        const result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post: Post = result.data;
        return res.status(200).json({
            message: post
        });
    }catch(error : any){
            return res.status(404).json({
                message: error.code
            })
    }
};

export default {getAllPosts, getSinglePost};