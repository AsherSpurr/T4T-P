import './Card.css';
import truesvg from '../images/true-muted2.svg'
import falsesvg from '../images/false-dark-coral.svg'
import distance from '../images/distance-dark-purple.svg'
import downvotesvg from '../images/thumbs-down.svg'
import upvotesvg from '../images/thumbs-up.svg'
import { roundNum } from '../../utils/utils';
import { useNavigate, useParams } from 'react-router-dom';

const Card = ({ name, uni, access, dist, city, state, upvote, downvote, directions, comment }) => {

    const distRounded = roundNum(dist)
    const locName = useParams().locationName;
    const navigate = useNavigate()

    return (
            <div className={locName === name ? 'LocDetails_div_wrapper' : 'Card_div_wrapper'}>
            <section className={locName === name ? 'LocDetails_div_container' : `Card_div_container`} tabIndex='0' onClick={() => navigate(`/locations/${name}`)} onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? navigate(`/locations/${name}`): <></>}>
                <div className={locName === name ? 'LocDetails_img_container' : 'Card_img_container'}>
                    <span className={locName === name ? 'LocDetails_img_placeholder' : 'Card_img_placeholder'}></span>
                </div>
                <div className={locName === name ? 'LocDetails_contents_container' : 'Card_contents_container'}>
                    {locName === name ? 
                    <><div className='LocDetails_heading_container'>
                        <h3 className='LocDetails_h3'>{city} | {state}</h3> 
                        <div className='LocDetails_icons_container'>
                            <img id='LocDetails_icon_upvote' src={upvotesvg} alt='Thumbs up upvote' height='20px' width='20px'></img>
                            <p className='LocDetails_p'>{upvote}</p>
                            <img id='LocDetails_icon_downvote' src={downvotesvg} alt='Thumbs down downvote' height='20px' width='20px'></img>
                            <p className='LocDetails_p'>{downvote}</p>
                        </div>
                        </div></>
                    : <h3 className='Card_h3'>{name}</h3>}
                    <div className={locName === name ? 'LocDetails_icons_container' : 'Card_icons_container'}>
                        <div className={locName === name ? 'LocDetails_distance_container' : 'Card_distance_container'}>
                            <p className={locName === name ? 'LocDetails_p' : 'Card_p'}>
                                <img src={distance} alt='distance' height='20px' width='20px'/>{distRounded}m
                           </p>
                        </div>
                        <div className={locName === name ? 'LocDetails_params_icon_container' : 'Card_params_icon_container'}>
                        <p className={locName === name ? 'LocDetails_p' : 'Card_p'}>
                            {uni ? <img id={locName === name ? 'LocDetails_icon_unisex' : 'Card_icon_unisex'} src={truesvg} alt='Status of true' height='20px' width='20px'/> : <img id='Card_icon_unisex' src={falsesvg} alt='Status of false' height='20px' width='20px'/>}
                            Unisex
                        </p>
                        <p className={locName === name ? 'LocDetails_p' : 'Card_p'}>
                            {access ? <img id={locName === name ? 'LocDetails_icon_accessible' : 'Card_icon_accessible'} src={truesvg} alt='Status of true' height='20px' width='20px'/> : <img id='Card_icon_unisex' src={falsesvg} alt='Status of false' height='20px' width='20px'/>}
                            Accessible
                        </p>
                        </div>
                    </div>
                    {locName === name &&
                        <article className='LocDetails_moreInfo_wrapper'>
                            <p>Directions: {directions}</p>
                            <p>Comment: {comment}</p>
                        </article>
                    }
                </div>
            </section>
        </div>
    )
}

export default Card