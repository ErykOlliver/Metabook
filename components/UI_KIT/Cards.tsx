import React from 'react'

type props = {
    publisher?: string,
    name?: string,
    full_name?: string,
    biography?: string
}

export const Cards = (props: props) => {
    return (
        <div>
            <span>{props.publisher}</span>
            <div>
                <h2>{props.name}</h2>
                <p>{props.full_name}</p>
            </div>
            <p>{props.biography}</p>
            <button>COMPLETE SHEET</button>
        </div>
    )
}
