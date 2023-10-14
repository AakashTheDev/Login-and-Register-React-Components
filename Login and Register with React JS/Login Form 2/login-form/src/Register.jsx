import React from 'react'
import '../src/App.css'

function Register() {
  return (
    <>
    <div className='container'>

    <div className='content'>

    <div className='login'>

    <h2>Register</h2>

    </div>

    <form>

        <label>Name</label>

        <input required type='text' placeholder='Name'/>


        <label>Phone Number</label>

        <input required type='text' placeholder='Phonenumber'/>
        
        <button>Verify Otp</button>

        <label>Unique User Name</label>

        <input required type='text'/>

        <button>Register</button>

      
    </form>

  </div>

</div>
    </>
  )
}

export default Register;