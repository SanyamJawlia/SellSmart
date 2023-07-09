import React, { useEffect, useState } from 'react'
import {State,Country} from "country-state-city"
import { FaRegAddressCard } from "react-icons/fa"
import CheckoutSteps from '../Essentials/CheckoutSteps';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../../Styles/shippingInfo.scss"

const ShippingInfo = () => {

    const {ShippingInfo} = useSelector(state=>state.Cart);
    
    
    const [address,setAddress] = useState(ShippingInfo.address);
    const [city,setCity] = useState(ShippingInfo.city);
    const [state,setState] = useState(ShippingInfo.state);
    const [country,setCountry] = useState(ShippingInfo.country);
    const [pincode,setPincode] = useState(ShippingInfo.pincode);
    const [phone,setPhone] = useState(ShippingInfo.phone);
    
    
    const details = { address, city, state, country, pincode, phone};

    useEffect(() => {
      localStorage.setItem("SellSmartShippingDetails",JSON.stringify(details));
    }, [details])
    
    

  return (

    <>
    <CheckoutSteps activeSteps={0}/>

    <div id='ShippingInfo' >
        <h1>Shipping Details</h1>
            <form action="">
                <div>
                    <FaRegAddressCard/>
                    <input type="text"
                        placeholder="House No."
                        required
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                     />
                </div>

                <div>
                    <FaRegAddressCard/>
                    <input type="text"
                        placeholder="City"
                        required
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                     />
                </div>
                <div>
                <FaRegAddressCard/>
                <input type="text"
                        placeholder="State"
                        required
                        value={state}
                        onChange={(e)=>setState(e.target.value)}
                     />
                </div>
                <div>
                    <FaRegAddressCard/>
                    <select 
                        className="select"
                        required
                        value={country}
                        onChange={(e)=>setCountry(e.target.value)}>

                        <option value="">Country</option>
                        {
                            Country && Country.getAllCountries().map((item)=>(
                                <option key={item.isoCode} value={item.name} >
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
  


                <div>
                    <FaRegAddressCard/>
                    <input type="number"
                        placeholder="Pincode"
                        required
                        value={pincode}
                        size="6"
                        onChange={(e)=>setPincode(e.target.value)}
                     />
                </div>

                <div>
                    <FaRegAddressCard/>
                    <input type="number"
                        placeholder="Phone No."
                        required
                        value={phone}
                        size="10"
                        onChange={(e)=>setPhone(e.target.value)}
                     />
                </div>

                <button><Link to="/confirmOrder" disabled={state?false:true}>Continue</Link></button>
        
            </form>
        
      
    </div>

    </>
  )
}

export default ShippingInfo
