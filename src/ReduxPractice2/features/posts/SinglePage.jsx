import React from 'react'
import Author from "./Author";
import AddedAgo from "./AddedAgo";
import { ReactionButtons } from './ReactionButtons';
import { useSelector } from 'react-redux';
import { singlePost } from './postsSlice';
import { Link, useParams } from 'react-router-dom';

const SinglePage = () => {

     const { id } = useParams();
     let numId = Number(id);

     const post = useSelector((state) => singlePost(state, numId));

     console.log(post)
     
     if (!post) {
          return (
               <div className='text-center my-20 text-3xl p-5 border w-6/12 rounded-md m-auto shadow-md'>
                    <h1>Sorry. There is no Page for this process</h1>
               </div>
          )
     }

     return (
          <article className="p-10 gap-5 border my-5 w-8/12 m-auto mt-20 flex flex-col justify-center shadow-lg hover:cursor-pointer">
               <h3 className="text-2xl mb-3">{post.title}</h3> <hr />
               <p className="my-3 py-2">{post.body.substring(0, 100)}</p> <hr />
               <div className="flex justify-between my-5">
                    <Author authorID={post.userId} />
                    <AddedAgo date={post.date} />
               </div> <hr />
               <div className='flex justify-between items-center'>
                    <ReactionButtons post={post} />
                    <Link className='underline' to={`/posts/${post.id}/edit`}>Edit Post</Link>
               </div>
          </article>
     )
}

export default SinglePage