
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import QS from 'qs';
// import axios from 'axios';

const SubmitForm = () =>  {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = e => {


  axios
  .post('http://localhost:5000/api/articles', e)
  .then(res => {
    setResult("Submit Successfully")
   })
  .catch(err => {
    console.log("Error in CreateBook!");
  })

}
  
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Title:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("title")} placeholder="Title" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Authors:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("author")} placeholder="Authors" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Journal name:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("journalName")} placeholder="Journal name" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Year of Publication:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("year")} placeholder="Publication Year" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '10%'}}>Volume:</p>
      <input style={{marginRight: '10px', width: '18%'}} {...register("volume")} placeholder="Volume" /> 
      <p style={{marginRight: '10px', width: '10%'}}>Number:</p>
      <input style={{marginRight: '10px', width: '18%'}} {...register("number")} placeholder="Number" /> 
      <p style={{marginRight: '10px', width: '10%'}}>Page:</p>
      <input style={{marginRight: '10px', width: '18%'}} {...register("pages")} placeholder="Page" />    


    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>DOI:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("doi")} placeholder="DOI" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Email:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("email")} placeholder="Email" />     
    </div>

    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '10px'}}>
    <p style={{marginRight: '10px', width: '15%'}}>SE method</p>
      <select {...register("SEmethod")}>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
        <option value="TFD">TFD</option>
        <option value="BDD">BDD</option>
      </select>

      {/* <p style={{marginLeft: '15%', width: '20%'}}>Type of Claim</p>
      <select {...register("sepractice")}>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
        <option value="TFD">TFD</option>
        <option value="BDD">BDD</option>
      </select> */}
      </div>

    <button style={{marginLeft: '75%', width: '18%', height: '60px'}}> Submit</button>
      <p>{result}</p>
      <input type="submit" />
    </form>    
  );

}



export default SubmitForm;