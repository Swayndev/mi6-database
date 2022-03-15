import React, {useState, useEffect} from 'react';



import SearchInput from './SearchInput';
import PeopleList from './PeopleList';
import StatusFilter from './StatusFilter';
 
export default function App() {
    
    const [search_term, setSearchTerm] = useState('');
    
    const[selected_status, setSelectedStatus] = useState('');

    
    return (
        <div className='people-of-interest'>
        
            <h1>People of interest</h1>

            <SearchInput 
                search_term={search_term}
                setSearchTerm={setSearchTerm}
            />
            <br/>

            <StatusFilter 
            selected_status={selected_status}
            setSelectedStatus={setSelectedStatus}
            />
            
            <br/>
            <PeopleList 
                search_term={search_term}
                
                selected_status={selected_status}
            />

        </div>

    )
}



