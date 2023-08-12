import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const Author = ({ authorID }) => {

    const users = useSelector(selectAllUsers);

    const author = users.find((user) => user.id === authorID);

    return (
        <span className="text-sm text-gray-600"> <b>By</b>: {author? author.name : "Unknown Author"}</span>
    )
}

export default Author