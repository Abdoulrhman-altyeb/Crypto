import React from 'react'
import './PunkListItem.css'
import weth from '../../assests/weth.png'

const PunkListItem = ({image, id, traits,name ,setSelectedPunk}) => {

    return (
        <div className='punkListItem' 
             onClick={() => {
                 setSelectedPunk(id);
             }}>
            <img src={image} className='itemImg' alt='img'/>
            <div className='details'>
                <p>{name} .#{id}</p>
                <div className='price'>
                    <img src={weth} className='wethImg' alt='img'/>
                    <p className='priceT'>
                    {traits.value}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default PunkListItem
