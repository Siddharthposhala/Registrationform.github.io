let sidduserForm=document.getElementById("sidd-form");
const revEntries =() => {
    let ee2= localStorage.getItem("sidd-ent");
    if(ee2){
        ee2=JSON.parse(ee2);

    }else{
        ee2=[];
    }
    return ee2;
}

let ue =revEntries();
const dispE =() =>{
    const e1=revEntries();
    const siddte=e1.map((entry) => {
        
        const namesidd= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailsidd= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordsidd= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobsidd= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermssidd= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rowsidd= `<tr>${namesidd} ${emailsidd} ${passwordsidd} ${dobsidd} ${acceptTermssidd}</tr>`;
        return rowsidd;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${siddte} </table>`;
    let details=document.getElementById("sidd-ent");
    details.innerHTML = table;
}
const siddsaveUserForm = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    ue.push(entry);
    localStorage.setItem("sidd-ent",JSON.stringify(ue));
    dispE();
}
sidduserForm.addEventListener("submit",siddsaveUserForm);
dispE();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------

   
        function valdatecondition()
        {   let element= document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let sidd1=new Date(dob);
            var todaydate = new Date(); 
            var age=parseInt(todaydate.getFullYear()) - parseInt(sidd1.getFullYear());
            if (todaydate.getMonth() < sidd1.getMonth() || (todaydate.getMonth() === sidd1.getMonth() && todaydate.getDate() < sidd1.getDate())) age--;
            if(!(age>18 && age <55))
            {
                element.setCustomValidity("age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

//=======================================email=========================================
const evalid = document.getElementById("email");

evalid.addEventListener("input", () => validate(evalid));

function validate(ee7) {
  if (ee7.validity.typeMismatch) {
    ee7.setCustomValidity("Wrong email format");
    ee7.reportValidity();
  } else {
    ee7.setCustomValidity("");
  }
}