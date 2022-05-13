
function EyesOnMe(){

  function blurEvent(e){
    return console.log("Hey! Eyes on me!")
  } 

  function focusEvent(e){
    return console.log("Good!")
  }

  return (
    <div>
      <button 
      text="Eyes on me"
      onFocus = {focusEvent}
      onBlur = {blurEvent}
      >Eyes on me</button>
    </div>
    
  )
}

export default EyesOnMe;