import React from 'react'
import { useSelector} from "react-redux"
import {Avatar,Button} from '@material-ui/core'
export default function ContactDetailComponent(props) {
    const contactDetails = useSelector(state =>state.contactDetail.contactDetail)
    const data = contactDetails && contactDetails.data
    const handleButtonClick = (e,data) =>{
        localStorage.setItem("contact",data.id)
    }
    return (
        <div>
            {data && 
            <div style={{width:400,height:500,textAlign:"center"}}>
                <Avatar style={{width:100,height:100,marginLeft:150}} alt="image sharp" src={data.avatar} aria-label="recipe"/>
                <p>{data.first_name+" "+data.last_name}</p>
                <p>{data.email}</p>
                <Button variant="contained" color="primary" disableElevation onClick={(e)=>handleButtonClick(e,data)}>
                    Add to favourite
                    </Button>
                </div>
            }
        </div>
    )
}
