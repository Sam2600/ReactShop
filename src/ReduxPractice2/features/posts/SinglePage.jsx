import React from 'react'
import Author from "./Author";
import AddedAgo from "./AddedAgo";
import { ReactionButtons } from './ReactionButtons';
import { useSelector } from 'react-redux';
import { singlePost } from './postsSlice';
import { Link, useParams } from 'react-router-dom';

const SinglePage = () => {

     const {id} = useParams();

     const post = useSelector((state) => singlePost(state, Number(id)));

     if (!post) {
          return (
               <section>
                    <h2>Page not found</h2>
               </section>
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
               <Link className='underline' to="/">To Home Page</Link>
               </div>
          </article>
     )
}

export default SinglePage