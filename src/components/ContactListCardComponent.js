import React from 'react'
import {Card,CardHeader ,Avatar} from '@material-ui/core'
import { useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { getContactDetail } from "../redux/actions/contactDetail"
export default function ContactListCardComponent(props) {
    const dispatch = useDispatch();
    const listData = props.contactList
    const handleListClick = (e,lData)  =>{
        dispatch(getContactDetail(lData.id))
    }
    return (
                    <div key={listData.key}>
                        <Link to="/contact">
                         <Card className="card" 
                         onClick={(e)=>handleListClick(e,listData)}
                         >
                            <CardHeader
                                avatar={
                                <Avatar alt="image sharp" src={listData.avatar} aria-label="recipe"/>
                                }
                                title={listData.first_name+" "+listData.last_name}
                            />
                        </Card>
                        </Link>
                    </div>
                )
}
