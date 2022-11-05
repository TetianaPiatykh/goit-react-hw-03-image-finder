import { Component } from "react";
import { AppForm } from "./App.styled";
import Searchbar from './Searchbar/Searchbar'


export class App extends Component {

  state = {
  };

  componentDidMount() {
  };

  componentDidUpdate(prevProps, prevState) {
  }

  handleInputFilter = (e) => {
    
    this.setState({ filter: e.currentTarget.value})
  }

  visibleContacts = () => {

  };
 

  render() {
  
    return (  
    <AppForm
      style={{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 36,
          // color: '#010101'
        
      }}
       > 
        <Searchbar/>
    </AppForm>
  );
  }
 
};

