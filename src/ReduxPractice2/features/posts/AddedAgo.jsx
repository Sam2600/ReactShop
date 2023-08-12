import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

const AddedAgo = ({ date }) => {

    let addedAgo = "";

    if (date) {
        const isoDate = parseISO(date)
        const timePeriod = formatDistanceToNow(isoDate);
        addedAgo = `${timePeriod} ago`
    }

    return (
        <span title={date} className='text-sm'> {addedAgo}</span>
    )
}

export default AddedAgo