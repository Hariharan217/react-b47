import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



function Homejson() {

    useEffect(() => { responcefunction() }, [])

    let [array, setArray] = useState([]);

    async function responcefunction() {
        await axios
            .get('http://localhost:3000/details')
            .then((responce) => {
                setArray(responce.data);
            })
    }

    function mapfunction() {

        return array.map((ele) => {
            return (
                <tr key={`${ele.id}- row`}>
                    <td key={`${ele.id}- id`}>{ele.id}</td>
                    <td key={`${ele.id}- name`}>{ele.name}</td>
                    <td key={`${ele.id}- age`}>{ele.age}</td>
                </tr>
            )
        })
        
    }


    

    return (
        <div>
            <table className="table table-success table-striped">
                <thead>

                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr></thead>
                <tbody className="table-group-divider">

                    {mapfunction()}

                </tbody>

            </table>
        </div>
    )
}

export default Homejson