import React, {useState} from 'react'

const IssueInput = (props) => {
    const [error, setError] = useState(null)
    const [value, setValue] = useState(props.val)
    const [id] = useState(props.id)

    return(<div>
            <label for={id}/>
            <input type="text" id={id} value={value}/>
        </div>
    )

}

export default IssueInput