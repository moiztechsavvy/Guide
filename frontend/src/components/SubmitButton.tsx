import React from 'react'

function SubmitButton(props: any) {
    return (
        <button style={{backgroundColor: props.backColor}} onClick={props.callback}>Submit</button>
    )
}

export default SubmitButton