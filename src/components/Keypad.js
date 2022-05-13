function Keypad() {
  function returner(e){
    return console.log("Entering password...")
  }


  return (
    <div>
      <input 
      type="password" 
      onChange={returner}/>
    </div>
      
  )
}

export default Keypad;