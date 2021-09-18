import { Nav, Button} from "react-bootstrap";

function Home(props) {
  // console.log(props)
    return (
      <div >
           <br/>
           <br/>
        <h1 >Tools Covered</h1>
        <br/>
        <br/>
    <Button variant="outline-primary" size="lg">  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="https://reactjs.org/" target="_blank">React</Nav.Link>
    </Nav.Item>
    </Nav></Button>{' '}
  <Button variant="secondary" size="lg">  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="https://react-bootstrap.github.io/" target="_blank">React-BootStrap</Nav.Link>
    </Nav.Item>
    </Nav></Button>{' '}
  <Button variant="warning" size="lg" >  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="https://www.javascript.com/" target="_blank">JavaScript</Nav.Link>
    </Nav.Item>
    </Nav></Button>{' '}
      </div>
    );
  }
  
  export default Home;