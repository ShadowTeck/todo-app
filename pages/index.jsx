import axios from "axios"
import {useEffect, useState} from "react"
import { Message } from "semantic-ui-react";

export default function Home() {
    
    const [list, setList] = useState([])

    useEffect( async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        setList(res.data)
    }, [])

    return (
    <>
        {list.map((item) => {
                return (
                <Message 
                    color={item.completed ? "green" : "red"}
                    icon="meh"
                    content = {item.title}
                />
                )
            })}
    </>
    )
}