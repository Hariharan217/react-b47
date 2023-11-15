import React from 'react'
function Cards(props) {
    let array = [];
    array = Object.values(props);
    return (
        <div id='cardid'>
            <div className='center'>
                <h6 className='text-muted'>{props.i[0]}</h6>
                <h3>{props.j[0]}</h3>
            </div>
            <div >
                <ul>
                    {array.map((ele) => {
                        if (ele[1] == "yes") {
                            return <li key={ele}>✓ {ele[0]}</li>
                        }
                        else if (ele[1] == "skip") {
                            return ""
                        }
                        else {
                            return <li className='text-muted' key={ele}>✗ {ele[0]}</li>
                        }
                    })}
                </ul>
            </div>
            <div className='buttonid'>
                <button className='button'>BUTTON</button>
            </div>
        </div>
    )
}

export default Cards