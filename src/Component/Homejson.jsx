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
                // console.log(responce.data);
                setArray(responce.data);
            })
    }

    function mapfunction() {

        return array.map((ele) => {
            // console.log(ele);
            return (
                <table id="maptable" className="table table-success table-striped">
                    <thead>
                        <tr key={`${ele.id}- row`}>
                            <td key={`${ele.id}- teacher`}>{ele.teacher}</td>
                        </tr></thead>

                    <tbody className="table-group-divider">
                        {ele.student.map((a) => {
                            // console.log(a);
                            return <tr><td key={`${ele.id}- student`}>{a}</td></tr>
                        })}

                    </tbody>
                </table>
            )
        })

    }
    return (
        <div>
            {mapfunction()}

            {/* <tbody >

                </tbody> */}
        </div>
    )
}

export default Homejson