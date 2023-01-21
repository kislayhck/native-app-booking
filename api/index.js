import axios from "axios";
import React, { useLayoutEffect,useEffect,useState } from 'react'

const apiData = () =>{
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

const loadData = async () => {
    setIsLoading(true)
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary',
        params: {
          bl_latitude: '11.847676',
          bl_longitude: '108.473209',
          tr_longitude: '109.149359',
          tr_latitude: '12.838442',
          limit: '30',
          currency: 'USD',
          subcategory: 'hotel,bb,specialty',
          adults: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'd115404adfmshd030b807b49167cp158c46jsnb0ff1c1d5b66',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response,'response')
        setData(response.data.data);
        setIsLoading(false)
      })
      .catch(function (error) {
        console.error(error);
      });
    }

    useEffect(() => {
        loadData();
    },[])

    return {data,isLoading}

}

export default apiData;