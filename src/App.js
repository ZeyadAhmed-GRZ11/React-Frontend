import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

    const [students, setstudents] = useState([])
   
     useEffect(()=>{
      async function getAllStudent(){

       try{
          const students = await axios.get("http://127.0.0.1:8000/api/student/")
          console.log(students.data)
          setstudents(students.data)
       }
       catch(error) {
           console.log(error)
       }
      
     }
     getAllStudent();

    },[])

  return (
    <div className="App">
      <h1>Connect React Is with Laravel</h1>
      {
        students.map((student, i )=> {
          return(
            <h2 key={i}>{student.stuname} {student.email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
