import React, { useState } from "react";
import { useEffect} from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/2812SAM')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers} Name: {data.name}
        <img src={data.avatar_url} alt="gitPic" width={300} />
        </div>
    );
}
export default Github;

export const githubInfoLoader = async()=>{
    const res = await fetch('https://api.github.com/users/2812SAM')
    return res.json()
}