import React from 'react'
import Caret from './caret';

type Props = {
    userInput: string,
    className: string
}

function UserTypings({ userInput, className }: Props) {
    const typedCharacters = userInput.split("");
    return (
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return <Character key={`${char}_${index}`} char={char} />
            })}
            <Caret />
        </div>
    )
}

const Character = ({ char }: { char: string }) => {
    return <span className='text-yellow-500'>{char}</span>
}

export default UserTypings