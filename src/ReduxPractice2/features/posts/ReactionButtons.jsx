import React from 'react'
import { useDispatch } from 'react-redux'
import {reactionButtonClicked} from "../posts/postsSlice"
import { Link } from 'react-router-dom';


const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮', 
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

export const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch();

    return (
        <div className='flex justify-between w-6/12 mt-4'>
            {
                Object.entries(reactionEmoji).map(([key, value]) => {

                    return (
                        <button key={key} onClick={() => dispatch(reactionButtonClicked({ postID: post.id, reaction: key })) }> {value} {post.reactions[key]} </button>
                    )

                })
            }
        </div>
    )
}
