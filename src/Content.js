import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import db from './firebase';
import { useEffect,useState } from 'react';

const Content = () => {

    const [docs, setDocs] = useState([])

    useEffect(() => {
        db.collection('todos').orderBy("created", "desc").onSnapshot(snapshot =>
            {
                setDocs(snapshot.docs.map(doc =>doc.data().todo))
            })

  
    }, [])

    return (
        <div>
            <Container>
       {
            docs && docs.map((doc, pos) => (
            <ul key={pos}>
                <li key={pos}>
                <H key={pos}>{doc}</H>
                </li>
            </ul>
    
            ))
       }
      </Container>
          
        </div>
    )
}

export default Content

const H = styled.h3`
font-size: 40px;
display: flex;
`