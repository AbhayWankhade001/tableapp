import React from 'react'

function Customer({customer, customer:{id, name, email, phone, username}}) {

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{username}</td>
            
         </tr>
    )
}
export default Customer

