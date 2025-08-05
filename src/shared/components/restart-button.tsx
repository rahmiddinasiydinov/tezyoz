import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { MdRefresh } from 'react-icons/md'

type Props = {
    onStart: () => void,
    classNames: string
}

function RestartButton({ onStart: handleStart, classNames = '' }: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        buttonRef.current?.blur();
        handleStart();
    }
    return (
        <Button
            ref={buttonRef}
            variant={'ghost'}
            className={`rounded px-8 hover:bg-slate-700/50 ${classNames}`}
            onClick={handleClick}>
            <MdRefresh className='w-6 h6' />
        </Button>
    )
}

export default RestartButton