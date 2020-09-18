import React, {useState, useEffect} from 'react'
import IssueList from '../IssueList/IssueList'
import IssueInput from './IssueInput'
import './IssueForm.css'

const IssueForm = ()=>{
    const [ error, setError ] = useState(null)
    const [ isLoaded, setLoaded ] = useState(null)
    const [ items, setItems ] = useState([])
    const [ selected, setSelected ] = useState([])

    useEffect(() => {
        (()=>{
            if(!isLoaded) return;
            fetch("https://api.github.com/repos/facebook/react/issues")
            .then(res => res.json())
            .then((res) =>{
                // TODO: Add titles and labels to autocomplete filter
                setItems(res.map( el => el.title)) 
            })
            .then(()=> {
                setLoaded(true)
                setSelected(items)
            })
            .catch(err =>{
                setError(err)
                console.log(error)
            })
        })()
        
    },[selected,error,isLoaded,items])

    return (
        <div className="issue-form">
            <form>
                <IssueInput
                    className="form-input"
                    id="search-clause"
                    val=""
                />
            </form>
            <IssueList value={selected}></IssueList>
        </div>
    )
}

export default IssueForm