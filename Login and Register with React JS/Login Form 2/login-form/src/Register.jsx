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

        <label>Relationship</label>

        <select>
        <option value="select">Select</option>
            <option value="student">Student</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="teacher">Teacher</option>
            <option value="others">Others</option>
        </select>

        <label>OTP Verification Code</label>

        <input required type='text'/>

        <label>What is Your Group in +2</label>

        <input required type='text'/>
        
        <label>What is Your Mark in +2</label>

        <input required type='number'/>
        
        <label>Board of Education</label>

        <select>
            <option value="select">Select</option>
            <option value="stateboard">Stateboard</option>
            <option value="cbse">CBSE</option>
            <option value="others">Others</option>
        </select>
              
        <label>School Type</label>

        <select>
            <option value="government">Government</option>
            <option value="governmentaided">Government Aided</option>
            <option value="private">Private</option>
        </select>

        <label>School Name</label>

        <input required type='text'/>

        <button>Register</button>

      
    </form>

  </div>

</div>
    </>
  )
}

export default Register;