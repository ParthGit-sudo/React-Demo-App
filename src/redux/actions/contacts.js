import * as type from "../types"

export function getContacts(contacts){
    return {
        type: type.GET_CONTACTS_REQUESTED,
        payload: contacts
    }
}
