import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu ,setMenu] = useState([]);

    useEffect(()=>{
        axios.get('menu.json')
        .then(res => {
            setMenu(res.data)
        })
    },[])


    return [menu];
};

export default useMenu;