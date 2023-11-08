import React from 'react'



function Homejson({note}) {
   console.log(note);

   note.map((e)=>{
    console.log(e);
   })
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
             
                </tbody>

            </table>
        </div>
    )
}

export default Homejson