import React, {useState} from "react";
import Proptypes from 'prop-types';
import './style/form.modules.scss'
import SecondFetch from "./Fetch.js/SecondFetch";
import apiGet from "./Fetch.js/apiGet";
import thirdfetchTry from "./Fetch.js/thirdfetchTry";
import { useRef } from "react";



const Form = () =>{
    const [location, setLocation] = useState('');
    const [val, setVal] = useState('Location');
    const inputRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        if(!location || location ==='') return;
        SecondFetch(location)
        apiGet(location)
        thirdfetchTry(location) 
        setVal(inputRef.current.value);
    };
 
    return (
        <>
        <form className="form" onSubmit={onSubmit} >
            <input aria-label="location"
                    type="text"
                    id="myText"
                    className="form-control"
                    placeholder="Enter a city"
                    required
                    value={location}
                    onChange={ e => setLocation(e.target.value)}
                    ref={inputRef}
                    autocomplete="off"
            />
            <button type="button" onClick={onSubmit}><img src="/images/loupe.png" width="25" /></button>
           
        </form>
        <div className="absoluteEvery"><span>{val}<button className="saveLocation"><img className="invert" src="/images/plus.png" width="10" /> Add to My Locations</button></span></div>
        </>
    )
}

Form.prototype = {
    submitSearch: Proptypes.func.isRequired
}
export default Form