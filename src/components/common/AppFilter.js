import React, { useState } from 'react'

const AppFilter = ({data}) => {

    const [filteredData, setFilteredData] = useState([]);


    const getValueInput = (event) => {
        console.log(event.target.value);
        console.log(data);
        const filter = data.filter(rec => rec.name.includes(event.target.value));
        console.log(filter);
      }

    return (
        <div>
            <input type="text" id="filter" className="form-control" placeholder="Search here..." onChange={ getValueInput }/>
        </div>
    )
}

export default AppFilter
