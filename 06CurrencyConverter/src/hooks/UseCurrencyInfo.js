import { useEffect ,useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/v1/${currency}.json`
        ).then((res)=>res.json()).then((res)=> setData(res[currency]))
    }, [currency])
    return data
}
export default useCurrencyInfo;
// the response which we got after json conversion into an obj is set in Data using setData().
//  and since the recieved obj is having manu keys but we need only the currency key so use setdata(res[currency])