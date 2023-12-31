import React, {useState} from 'react'
import Customer from './Customer.js'
// import EditCustomer from './EditCustomer'

function Customers({customers, onUpdateCustomer}) {
// state for conditional render of edit form
  const [isEditing, setIsEditing] = useState(false);
// state for edit form inputs
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: ""
    
  })

// when PATCH request happens; auto-hides the form, pushes changes to display
/* eslint-disable no-unused-vars */
  function handleCustomerUpdate(updatedCustomer) {
      setIsEditing(false);
      onUpdateCustomer(updatedCustomer);
    }

// capture user input in edit form inputs
  function handleChange(e) {
    setEditForm({
    ...editForm,
    [e.target.name]: e.target.value
    })
  }

// needed logic for conditional rendering of the form - shows the customer you want when you want them, and hides it when you don't
  function changeEditState(customer) {
    if (customer.id === editForm.id) {
      setIsEditing(isEditing => !isEditing) // hides the form
    } else if (isEditing === false) {
      setIsEditing(isEditing => !isEditing) // shows the form
    }
  }

// capture the customer you wish to edit, set to state
  function captureEdit(clickedCustomer) {
    let filtered = customers.filter(customer => customer.id === clickedCustomer.id)
    setEditForm(filtered[0])
  }
 
    
 

  return (
      <div>
    
        <table id='students'className='madeit'>
          <thead>
            <tr className='makeitcolor'>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              
            </tr>
          </thead>
          <tbody>
              { customers.map(customer =>
                <Customer
                key={customer.id}
                customer={customer}
                
                />) }
             
          </tbody>
        </table>
        
      </div>
     
   )
}
export default Customers