import React, { useEffect ,useState} from 'react'
import './Selected.css'
import twitter from '../../assests/owner/twitter.png'
import more from '../../assests/more.png'
import insta from '../../assests/instagram.png' 

const Selected = ({punks, selectedPunk}) => {

    const [selectedPunkData,setSelectedPunkData] = useState(punks[0]);

    useEffect(() => {
        setSelectedPunkData(punks[selectedPunk]);
    },[selectedPunk,punks])
    
    
    return (
        <div className='contianer'>
            <div className='mainContent'>
                <div className='imgMainContainer'>
                    <div className='imgContainer'>
                        <img className='selectedImg' src={selectedPunkData.image_original_url} alt='img' />
                    </div>
                </div>
                <div className='mainDetails'>

                    <div className='title'>
                        {selectedPunkData.name}
                        <span>.#{selectedPunkData.token_id}</span>
                    </div>
                    <div className='owner'>
                        <div className='owenerDetails'>
                                <img src={selectedPunkData.owner.profile_img_url} alt='img' />
                            <div className='ownerInfo'>
                                <div className='ownerId'>{selectedPunkData.owner.address}</div>
                                <div className='ownerAdress'>@TurkeyDev</div>
                            </div>
                        </div>
                        <div className='ownerContact'>
                            <div className='ownerIcon'><img src={twitter} alt='twitter' /></div>
                            <div className='ownerIcon'><img src={insta} alt='insta' /></div>
                            <div className='ownerIcon'><img src={more} alt='more' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selected
