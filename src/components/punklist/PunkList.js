import React from 'react'
import PunkListItem from '../PunkListItem/PunkListItem'
import './PunkList.css'

const PunkList = ({punkListData, setSelectedPunk}) => {
    return (
        <div className='punklist'>
            {punkListData && punkListData.map((punk) => (
                <PunkListItem 
                    setSelectedPunk={setSelectedPunk}
                    key={punk.id}
                    id={punk.token_id}
                    name={punk.name}
                    image={punk.image_original_url}
                    traits={punk.traits[0]}
                    />
            ))}
        </div>
    )
}

export default PunkList
