import React from "react"

function SubmitButton (props: any) {
    return (
        <button style={{color: props.color}} onClick={props.callback}>Submit</button>
    )
}

export default SubmitButton