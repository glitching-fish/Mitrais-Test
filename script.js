const pickMonth = document.getElementById("selectMonth")
const arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

for(var x= 0; x<arrayMonth.length; x++){
    var month = arrayMonth[x];
    var el = document.createElement("option")
    el.textContent = month;
    el.value = month;
    pickMonth.appendChild(el);
}

const pickDate = document.getElementById("selectDate")
let arrayDate = [];
for (let i = 1; i < 32; i++) {
    arrayDate.push(i);
}

for(var x= 0; x<arrayDate.length; x++){
    var date = arrayDate[x];
    var el = document.createElement("option")
    el.textContent = date;
    el.value = date;
    pickDate.appendChild(el);
}

const pickYear = document.getElementById("selectYear")
let arrayYear = [];
for (let i = 1940; i < 2021; i++) {
    arrayYear.push(i);
}

for(var x= 0; x<arrayYear.length; x++){
    var year = arrayYear[x];
    var el = document.createElement("option")
    el.textContent = year;
    el.value = year;
    pickYear.appendChild(el);
}

// ------------------------------------------------------------------------------------------

const mobileNumber = document.getElementById("mobileNumber");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const mobileCustomError = document.getElementById("mobileCustomError");
const firstnameCustomError = document.getElementById("firstnameCustomError");
const lastnameCustomError = document.getElementById("lastnameCustomError");

// ----------------------------------------------
const formRegister = document.getElementById("formRegister");

formRegister.addEventListener('submit', (e) => {
    let mobileMsg = [];
    
    if (mobileNumber.value === '' || mobileNumber.value == null)
    {
      mobileMsg.push('Mobile number cannot be empty');
    }
    else if (mobileNumber.value.length > 12)
    {
      mobileMsg.push('Please Enter valid indonesian phone number');
    }
    else
    {
      mobileMsg.push('');
    }

    if (mobileMsg.length > 0)
    {
      mobileCustomError.innerText = mobileMsg.join(', ');
    }

    // ------------

    let firstnameMsg = []
    if (firstName.value === '' || firstName.value == null)
    {
      firstnameMsg.push('First name cannot be empty');
    }
    else
    {
      firstnameMsg.push('');
    }

    if (firstnameMsg.length > 0)
    {
      firstnameCustomError.innerText = firstnameMsg.join(', ');
    }

    // ------------

    let lastnameMsg = []
    if (lastName.value === '' || lastName.value == null)
    {
      lastnameMsg.push('Last name cannot be empty');
    }
    else
    {
      lastnameMsg.push('');
    }

    if (lastnameMsg.length > 0)
    {
      lastnameCustomError.innerText = lastnameMsg.join(', ');
    }

    if ((mobileMsg.length = 0 || mobileMsg === '' )
     && (firstnameMsg.length = 0 || firstnameMsg === '')
     && (lastnameMsg.length = 0 || lastnameMsg === '')){  }
     else{ e.preventDefault(); }

     console.log(mobileMsg); console.log(firstnameMsg); console.log(lastnameMsg);
})