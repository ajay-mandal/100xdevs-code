"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Signup() {
    const [data, setData] = useState(null);
    useEffect(()=>{
        axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
        .then((res: any)=>{
            setData(res.data)
        })
    },[])

    return(
        <div>
            {data ? <div>{JSON.stringify(data)}</div> : 'Loading...'}
        </div>
    )
}
