import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-from-content'>
    <form>
        <div className='name-container'>
        <input type='text' name='firstname' placeholder='FirstName'></input>
        <input type='text' name='lastname' placeholder='LastName'></input>

        </div>
        <input type='text' name='email' placeholder='Email'></input>
        <textarea type='text' name='message' placeholder='Message'></textarea>
        <button>SEND</button>
    </form>
      
    </div>
  )
}

export default ContactForm
