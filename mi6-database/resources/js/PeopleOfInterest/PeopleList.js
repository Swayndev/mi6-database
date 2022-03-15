import React, { useEffect, useState} from 'react'

const PeopleList = ({search_term, selected_status}) => {
  
    const [data, setData] = useState([]);
    
    const loadData = async () => {
        
        // we need to use the function encodeURIComponent to search for special characters
         const url = '/api/request?search=' + encodeURIComponent(search_term) + '&status=' + encodeURIComponent(selected_status);

         const resp = await fetch(url);
        
         const data = await resp.json();
        // change the state of this component, using the new data
         setData(data);
    }
  
    useEffect( () => {
        loadData();
    }, [search_term]);  // triggers loadData everytime the state seach_term changes
  
    return (
    <div className='people-of-interest__list'>
        {data.map( (person) => (
            <div key={person.id} className='people-of-interest__individual'>
                {person.name}
            </div>
        )
    )}
    </div>
  )
}

export default PeopleList