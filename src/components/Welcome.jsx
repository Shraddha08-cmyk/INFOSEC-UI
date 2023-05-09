import React from 'react'
import '../../src/Styles.css'
import { Button, Typography } from '@material-ui/core'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="welcome-div">
        <Typography variant='h5' style={{ fontWeight: "bold", width: "200px", textAlign: "left", marginTop: "20px", marginLeft: "85px", position: "relative", right: "55px" }}>Signin to Your PopX Account</Typography>
        <Typography variant='p' style={{ textAlign: "left", fontSize: "15px", width: "200px", fontWeight: "bold", position: "relative", left: "30px", color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
        <Button variant='contained' style={{ backgroundColor: "#642AF5", color: "white", width: "250px", position: "relative", left: "50px" }}>Create Account</Button>
        <Button variant='contained' style={{ color: "gray", width: "250px", position: "relative", left: "50px", fontSize: "12px", fontWeight: "bold" }}>Already Registered? Login</Button>
      </div>
    </div>
  )
}

export default Welcome
