import React, {useState,useEffect} from "react";
import Issue from "../Issue/Issue";

const IssueList = (props) => {
    // const [error, setError] = useState(null)
    const [list, setList] = useState(null)
    setList(props)
    return(
        <div>
            {list.map((item,index) =>(
                <Issue value={item} key={index} />
            ))}          
        </div>
    );
    
}

export default IssueList;