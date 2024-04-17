import './Filter.css';
import { formatSearchParams } from '../../utils/utils';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const Filter = ({ updateLocs, locs }) => {
    // const location = useLocation()
    // const history = useHistory()
    // const [searchParams, setSearchParams] = useSearchParams()
    let url = new URL('https://localhost:3000/?')
    let params = new URLSearchParams(url.search)
    // console.log(params.getAll('b'))
    // useEffect(() => {
    //     updateLocs(locs)
    // }, [params])

    //set url to state
    //URLSearchParams -> google MDN URLSearchParams

    function checkParams(value) {
        // console.log(value)
      if(params.has('b', value) ){
        params.delete('b', value)
    } 
    else if(params.has('b', 'accessible') && value === 'all'){
       params.set('b', 'all')
    } 
    else if(params.has('b', 'unisex') && value === 'all') {
        params.set('b', 'all')
    } 
    else if(params.has('b', 'all') && value === 'accessible') {
        params.delete('b', 'all')
    } 
    else if(params.has('b', 'all') && value === 'unisex') {
        params.delete('b', 'all')
    } 
    else {
        params.append('b', value)
    }
       window.history.replaceState(value, "", params)
       updateLocs(locs)
       //    console.log(window.location.href = params)
       formatSearchParams(window.location.href)
//    console.log('windowLoc', window.location.href)
    }
    return (
        <div className='Filter_div_wrapper'>
            <button type='button' className='Filter_button' id='accessible' onClick={(e) => checkParams(e.target.id)}>Accessible</button>
            <button type='button' className='Filter_button' id='unisex' onClick={(e) => checkParams(e.target.id)}>Unisex</button>
            <button type='button' className='Filter_button' id='all' onClick={(e) => checkParams(e.target.id)}>All</button>
        </div>
    )
}

export default Filter