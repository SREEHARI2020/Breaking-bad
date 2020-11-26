import React from 'react'
import { Spinner } from '../ui/Spinner'
import { CharacterItem } from './CharacterItem'


export const CharacterGrid = ({items,loading}) => {
    return (
        loading ?(<h1><Spinner/></h1>)
        :(<section className='cards'>
            {
                items.map((item)=>(<CharacterItem key={item.char_id} item={item} />)
                )
            }

        </section>)
    )
}
