import { useState, useEffect } from "react";

function User() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [savedName, setSavedName] = useState('')
  

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem'
  }

  const labelWrapper = {
    display: 'flex',
    columnGap: '0.5rem',
  }

  useEffect(() => {
    const savedFirstName = localStorage.getItem("firstName");
    if (savedFirstName) {
      setSavedName(savedFirstName.slice(1, -1));
    }
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();
    localStorage.setItem('firstName', JSON.stringify(firstName))
    localStorage.setItem('lastName', JSON.stringify(lastName))
    localStorage.setItem('email', JSON.stringify(email))
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <h2>Hi {savedName ? savedName : 'user'} !</h2>
      <h3>Customize your profile here</h3>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={labelWrapper}>
          <label htmlFor="firstName">Your firstname :</label>
          <input type="text" id="firstName" value={firstName}
          onChange={handleFirstNameChange}
          />
        </div>
        
        <div style={labelWrapper}>
          <label htmlFor="lastName">Your lastname :</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange}/>
        </div>

        <div style={labelWrapper}>
          <label htmlFor="email">Your email :</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange}/>
        </div>

        <button className="orangeButton formButton" role={'submit'}>Save</button>
      </form>
    </>
  )
}

export default User
