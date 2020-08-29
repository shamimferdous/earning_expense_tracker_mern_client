//importing components
import Layout from '../components/Layout'
import Passcode from '../components/Passcode';
import App from '../components/App';

//importing context api
import {AuthContext} from '../context-api/AuthContext';

import { useState, useContext } from 'react';

const Index = (props) => {

  
const authContext = useContext(AuthContext);



  return (
    <> 

    <Layout>
     
     {/* Conditional Rendering Here */}
     { authContext.passcode ? null : <Passcode/> }

     {authContext.passcode === process.env.passcode? <App/>: null }

    </Layout>

    </>
  );
}

export default Index;


