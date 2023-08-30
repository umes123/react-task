
import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function Piechart()
{
   const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);

   useEffect( ()=>{
       const students=[];
       const sMarks=[];
       const getStudentdata= async()=>{
       const reqData= await fetch("http://localhost:3002/posts");
       const resData= await reqData.json();       
       for(let i=0; i< resData.length; i++)
       {
        students.push(resData[i].firstname);
        sMarks.push(parseInt(resData[i].percentage));
       }
       setStudentsubject(students);
       setStudentMarks(sMarks);
        
       }

    getStudentdata();

   },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart 
                type="pie"
                width={400}
                height={550}

                series={ studentMarks }                

                options={{
                        title:{ text:"Student PieChart"
                        } , 
                       noData:{text:"Empty Data"},                        
                     
                      labels:stdudentSubject                     

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;
