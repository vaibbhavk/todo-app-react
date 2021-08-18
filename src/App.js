import React from 'react';
import {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Content from './Content';
import db from './firebase';
import firebase from "firebase";
import "firebase/firestore";

function App() {

  const [text, setText] = useState('');

  const handleType = (v) => {
    setText(v);
  }

  const handleClick = (e) => {
    e.preventDefault();
         // Add a document with a generated ID.
db.collection("todos").add({
  todo: text,
  created: firebase.firestore.FieldValue.serverTimestamp()
})
.then((docRef) => {
  setText("");
})
.catch((error) => {
  console.log("error")
});

  }



  return (
    <div className="App">
      <Title>
        <h1>Todos</h1>
      </Title>
      <Main>
      <TextField value = {text} onChange={(e)=>handleType(e.target.value)} id="outlined-basic" label="Add todo" variant="outlined" />
      <Button
          onClick={(e)=>handleClick(e)}
          variant="contained"
          disabled={text===""}>ADD
      </Button>
      </Main>
      <Matter>
      <Content/>
      </Matter>

    </div>
  );
}

export default App;

const Title = styled.div`
border: 1px solid black;
border-radius: 10px;

h1{
  letter-spacing: 1.5px;
  font-size: 50px;
  margin:  10px;
}
`

const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;

Button{
  margin-left: 5px;
}
`

const Matter = styled.div`
display: flex;
margin-top: 15px;
`