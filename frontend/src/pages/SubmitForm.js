
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
// import axios from 'axios';

const SubmitForm = () =>  {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
  console.log(data);
  const data1 = {
    title: data.title,
    author: data.author,
    journalName: data.journalName,
    year: data.year,
    volume: data.volume,
    pages: data.pages,
    doi: data.doi,
    email: data.email,
    SEmethod: data.SEmethod
  };

  axios
      .post('/api/articles', data1)
      .then(res => {
        data.setState({
          title: '',
          author:'',
          journalName:'',
          year:'',
          volume:'',
          pages:'',
          doi:'',
          email:'',
          SEmethod:'',
        })
        data.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  console.log("hahaha");

  setResult(JSON.stringify(data))}
  
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Title:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("Title")} placeholder="Title" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Authors:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("Authors")} placeholder="Authors" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Journal name:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("Journal name")} placeholder="Journal name" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Year of Publication:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("Publication")} placeholder="Publication Year" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '10%'}}>Volume:</p>
      <input style={{marginRight: '10px', width: '18%'}} {...register("Volume")} placeholder="Volume" /> 
      <p style={{marginRight: '10px', width: '10%'}}>Number:</p>
      <input style={{marginRight: '10px', width: '18%'}} {...register("Number")} placeholder="Number" /> 
      <p style={{marginRight: '10px', width: '10%'}}>Page:</p>
      <input style={{marginRight: '10px', width: '18%'}} {...register("Page")} placeholder="Page" />    


    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>DOI:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("DOI")} placeholder="DOI" />     
    </div>
    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '20px'}}>
      <p style={{marginRight: '10px', width: '20%'}}>Email:</p>
      <input style={{marginRight: '10px', width: '70%'}} {...register("Email")} placeholder="Email" />     
    </div>

    <div style={{display: 'flex', flexFlow: 'row', marginBottom: '10px'}}>
    <p style={{marginRight: '10px', width: '15%'}}>SE method</p>
      <select {...register("sepractice")}>
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