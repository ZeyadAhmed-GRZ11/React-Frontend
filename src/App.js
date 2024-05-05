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
      <h1>Connect React In with Laravel</h1>

{/* <table className='tm-4'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
      
    </tbody>
</table> */}

      {
        students.map((student, i )=> {
          return(

          // <tr>
          //   <td>{student.stuname}</td>
          //   <td>{student.email}</td>
          // </tr>

            <h2 key={i}>{student.stuname} {student.email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
