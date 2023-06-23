import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateUser } from "../stores/slices/userSlice"

function User() {
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.user.currentUser)

  const [firstName, setFirstName] = useState(currentUser.firstName)
  const [lastName, setLastName] = useState(currentUser.lastName)
  const [email, setEmail] = useState(currentUser.email)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      firstName: firstName,
      lastName: lastName,
      email: email
    }))
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
    <div className="userPage">
    <h2>Hi {currentUser.firstName ? `${currentUser.firstName} ${currentUser.lastName}` : 'user'} !</h2>
      <h3>Customize your profile here</h3>
      <form className="formStyle" onSubmit={handleSubmit}>
        <div className="labelWrapper">
          <label htmlFor="firstName">Your firstname :</label>
          <input type="text" id="firstName" value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>

        <div className="labelWrapper">
          <label htmlFor="lastName">Your lastname :</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>

        <div className="labelWrapper">
          <label htmlFor="email">Your email :</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <button className="orangeButton formButton" role={'submit'}>Save</button>
      </form>
    </div>
    </>
  )
}

export default User
