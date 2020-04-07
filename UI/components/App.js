import React from 'react';
import SignUp from './SignUp';
import Footer from './Footer';
import NavBar from './NavBar';

class App extends React.Component {
     render() {
          return (
               <div>
                    <NavBar/>
                    <SignUp />
                    <Footer/>
               </div>
          )
     }
}

export default App; 
