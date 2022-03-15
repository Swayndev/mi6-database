import React, {useState, useEffect} from 'react'

const StatusFilter = ({selected_status, setSelectedStatus}) => {
  //{selected_status}
  
  const[statuses, setStatuses] = useState([]);
  

  const loadStatuses = async() => {
      
     const url = '/api/statuses';
    // make a fetch request into that url
      const resp = await fetch(url);
      // parse the reponse as a JSON
      const data = await resp.json();
    // change the state of this component, using the new data
      setStatuses(data);
  }
  

  useEffect( () => {
        loadStatuses();   // call the function loadStatuses when the component first mounts
    }, []);



    return (
    <div className='status-filter'>


        { statuses.map( status => (
            <div>
                <button
                key={status.id}
                className='status-btn'
                onClick={() => setSelectedStatus(status.id)}>

                    {status.name}
                </button>

            {/* 
                //just my attempt with div instead of btn
                <div key={status.id} className={ 'status-filter__status' }>
                    { status.name }
                </div> 
            */}    

            </div>
            )
        )}

    </div>
  )
}

export default StatusFilter