import React, { useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux"
import ContactListCardComponent from "./ContactListCardComponent"
import { getContacts } from "../redux/actions/contacts"

export default function ContactListComponent() {
    const dispatch = useDispatch();
    const contacts = useSelector(state =>state.contacts.contacts)
    const error = useSelector(state =>state.contacts.error)
    useEffect(()=>{
        dispatch(getContacts())
    },[])
    return (
        <div style={{backgroundColor:"#42A5F5",padding:5,width:400,height:500}}>
            {contacts.data && contacts.data.length > 0 && contacts.data.map((cData)=>{
                return(
                        <ContactListCardComponent key={cData.id} contactList={cData}/>
                )
            })}
           {contacts.data && contacts.data.length === 0 && <span>No Contact Found</span>}
           {error &&  <span>{error}</span>}
        </div>
    )
}
