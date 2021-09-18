
// import axios from "axios";
// import React,{Component} from "react";



// class View extends Component {
//   constructor(props){
//     super(props)
//       this.state = {
//         details:[],
        
           
//     }
    
    
//   }
  
//   getdata = async() => {
//     const {data: details} = await axios.get(`https://jsonplaceholder.typicode.com/users/${1}/comments`)//how to pass data of view button in post component
//     this.setState({
//      details
//     })
    
//   }
//   componentDidMount(){
//     this.getdata()
//   }

//   render(){
//     return(
//       <>
//       <br/>

// {this.state.details.map(item => {
//   return (
//                   <ul key={item.id}>
//                   <li><strong> Name :</strong> {item.name}</li>
//                   <li> <strong>Email :</strong> {item.email}</li>
//                   <li><strong> Body :</strong> {item.body}</li>
//                   </ul>
//             )
//           })

// }
//       </>
//     )
//   }
// }


// ----------------------------------------------

// function Component



import { Accordion } from "react-bootstrap";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"

function View ({match}) {
    const {id} = useParams()
    const [Profile, setProfile] = useState([])
    
    useEffect(() => {
  fetchItem()
  console.log(match)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchItem = async () => {
        const fetchItem = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // console.log(fetchItem)
        setProfile(fetchItem.data)
    }

    return(
        <>
<h1>view : {id}</h1>


<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Title</Accordion.Header>
    <Accordion.Body>
    <h5>{Profile.title}</h5>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Body</Accordion.Header>
    <Accordion.Body>
    <h4>{Profile.body}</h4>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </>
    )
}



export default View