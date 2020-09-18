import React, {useState} from 'react';
import "./Issue.css";

const Issue = (value) => {
    // const [error, setError] = useState(null)
    const [issue, setIssue] = useState(null)
    setIssue(value)
    return(
        <article className="issue-card">
            <h1>{issue.title}</h1>
            <div className="issue-card-content">
                {issue.body}
            </div>
        </article>
    )
}

export default Issue