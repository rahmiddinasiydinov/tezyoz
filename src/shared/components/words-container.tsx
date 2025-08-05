import type { ReactNode } from "react";

export const WordsContainer = ({ children }: { children: ReactNode }) => {
    return (<div className='relative max-w-xl mt-3 text-3xl leading-relaxed break-all'>
        {children}
    </div>)
}