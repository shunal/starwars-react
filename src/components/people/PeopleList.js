import PeopleItem from './PeopleItem';
import classes from './PeopleList.module.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

function PeopleLIst() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPeople, setLoadedPeople] = useState([]);
  
    useEffect(() => {
        axios.get('https://akabab.github.io/starwars-api/api/all.json')
            .then(res => setLoadedPeople(res.data));
        setIsLoading(false);
        
    },[]);
    
    if  (isLoading) {
        return (
        <section>
        <p>Loading...</p>
        </section>
        );
    }
        
      return (
        <ul className={classes.list}>
          {
            loadedPeople.map(person =>
                <PeopleItem
                    name={person.name}
                    image={person.image}               
                />
              )
          }
        </ul>
      )
  }

  export default PeopleLIst;