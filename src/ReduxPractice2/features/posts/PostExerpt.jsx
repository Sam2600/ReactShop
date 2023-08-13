import React from 'react'
import Author from "./Author";
import AddedAgo from "./AddedAgo";
import { ReactionButtons } from '../posts/ReactionButtons';
import { Link } from 'react-router-dom';

const PostExerpt = ({ propPost }) => {
  
    return (
        <article className="p-5 border my-5 w-8/12 m-auto shadow-lg transition-all duration-300 hover:cursor-pointer hover:scale-105">
            <h3 className="text-2xl mb-3">{propPost.title}</h3> <hr />
            <p className="my-3 py-2">{propPost.body.substring(0, 75)}...</p> <hr />
            <div className="flex justify-between my-5">
                <Author authorID={propPost.userId} />
                <AddedAgo date={propPost.date} />
            </div> <hr />
            <div className='flex justify-between items-center'>
                <ReactionButtons post={propPost} />
                <Link className="underline mt-3" to={`posts/${propPost.id}`}>View Post</Link>
            </div>
        </article>
    )
}

export default PostExerpt