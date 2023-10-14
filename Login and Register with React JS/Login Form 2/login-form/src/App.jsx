import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <div className='login'>
            <h2>Login</h2>
          </div>
          <form>
            <label>Username</label>
            <input required type='text' placeholder='Username or EMail'/>
            <label>Password</label>
            <input required type='password' placeholder='Password'/>
            <button>Login</button>
              <div className='forgot'>
              <div className='forgot1'>
              <a href='#'>Forgot Password?</a>
              </div>
              <div className='forgot2'>
              Does Not Have an Account? 
              </div>
              </div>
          </form>
          </div>
      </div>
    </>
  )
}

export default App;
