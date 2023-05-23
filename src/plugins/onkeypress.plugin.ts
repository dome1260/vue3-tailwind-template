const keypress = {
  number: (evt: any) => {
    const event = (evt) || window.event
    const charCode = (event.which) ? event.which : event.keyCode
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      event.preventDefault()
      return false
    }
    return true
  },

  villageNo: (evt: any) => {
    const event = (evt) || window.event
    const charCode = (event.which) ? event.which : event.keyCode
    if ((charCode > 31 && (charCode < 47 || charCode > 57)) ) {
      event.preventDefault()
      return false
    }
    return true
  },
}

export default keypress
