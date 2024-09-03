import React from 'react';
import Form from './Form';
import PatientCard from './PatientCard';
import './App.css';

let myid = 2;

function App() {

  const [formData, setFormData] = React.useState({
      edit: false,
      id: myid,
      name : "",
      age : "",
      gender : "",
      stat : "",
      time : "",
      date : "",
      number : "",
      docname : ""
  }) 

  //
  //-------------form functions
  //

  function handleChange(event){
        console.log(event.target.value);
        setFormData((prev)=>({...prev,
                [event.target.name]: event.target.value
        }))
        // console.log(formData);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData)
    for(let key in formData)
    {
            console.log(key)
            if(formData[key]==="" && key!=='edit')
            {
                    console.log(key+ formData[key])
                    alert("Missing Field in the Form!!")
                    return false;
            }
    }
    console.log(formData)
    addpat()
  }

  function handleEdit(event){
    event.preventDefault();
    // console.log(formData);
    editpat();
    resetForm();
  }


  const [pats,setPats] = React.useState([]);

  let arr = pats.map(pat => (
    <PatientCard
            key= {pat.id}
            id = {pat.id}
            name={pat.name}
            age = {pat.age}
            gender = {pat.gender}
            stat = {pat.stat}
            time = {pat.time}
            date = {pat.date}
            number = {pat.number}
            docname = {pat.docname}
            handleChange = {handleChange}
            patientclicked = {patientclicked}
          />
  ))

  function patientclicked(id,work){
    console.log("here")
    if(work==="del"){
      deletepat(id)
      return
    }
    for(let i of pats){
      // console.log(i)
      if(i.id === id)
      {
        console.log(i)
        setFormData({
          edit: true,
          id : i.id,
          name : i.name,
          age : i.age,
          gender : i.gender,
          stat : i.stat,
          time : i.time,
          date : i.date,
          number : i.number,
          docname : i.docname
        })
        editpat();
      }
    }
  }

  function addpat(id){
    console.log("adding rec")
    //send post request and call update func
    // console.log(formData)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...formData, id:myid})
    };
    myid++;
    fetch('http://127.0.0.1:8080', requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log("resp", data)
        update();
        resetForm();
    });
  }

  function editpat(){
    console.log("in editpat")
    //send put request and call update func
    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    fetch('http://127.0.0.1:8080', requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log("resp", data)
        update();
        // resetForm();
    }); 
  }

  function deletepat(id){
    console.log("deleting record")
    //send delete req and call update func
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:id})
    };
    // console.log(id);
    fetch('http://127.0.0.1:8080', requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log("resp", data)
        update();
        resetForm();
    }); 
  }

  function update(){
    console.log("updating")
    //send get request and set patdata
    fetch('http://127.0.0.1:8080')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPats(data);
      })
  }

  function resetForm()
  {
    setFormData({
      edit: false,
      id: myid,
      name : "",
      age : "",
      gender : "",
      stat : "",
      time : "",
      date : "",
      number : "",
      docname : ""
    })
  }
  React.useEffect(update,[]);
  return (
    <>
    <Form
      handleChange = {handleChange}
      formData = {formData}
      handleSubmit = {handleSubmit}
      handleEdit = {handleEdit}
    />

    <section className="main-content">


		<div className="container">
			<br/>
			<br/>

			<table className="table">
				<thead>
					<tr>
						<th>Patient</th>
						<th>Status</th>
						<th>Appointment</th>
						<th>Phone</th>
						<th>Doctor</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{arr}
				</tbody>
			</table>
		</div>
	</section>
  </>
  );
}

export default App;