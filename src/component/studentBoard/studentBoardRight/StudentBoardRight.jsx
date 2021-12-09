import React,{useState} from 'react'
import "./studentBoardRight.scss"

const StudentBoardRight = () => {
    const [cat,SetCat]= useState('profile');
    
    const click = (e)=>{
        SetCat(e.target.classList[0])
        console.log(cat);

    }
    return (
        <div className ="studentBoardRight">
            <div className="selectionTabs">
                <div className="category 1"><p className ={ `profile ${cat==='profile'?"active":""}`} onClick ={click}>Profile</p></div>
                <div className="category 2" ><p className ={ `chat ${cat==='chat'?"active":""}`}onClick ={click}>Our Chat</p></div>
                <div className="category 3"><p className ={ `notes ${cat==='notes'?"active":""}`}onClick ={click}>My Notes</p></div>
                <div className="category 4"><p className ={ `corrections ${cat==='corrections'?"active":""}`}onClick ={click}>Corrections</p></div>
                <div className="category 5"><p className ={ `courses ${cat==='courses'?"active":""}`}onClick ={click}>Enrolled Courses</p></div>
            </div>
            {cat==="profile" && <h1 style ={{marginTop:"2rem",textAlign:"center"}}>Profile</h1>}
            {cat==="chat" && <h1 style ={{marginTop:"2rem",textAlign:"center"}}>Chat</h1>}
            {cat==="notes" && <h1 style ={{marginTop:"2rem",textAlign:"center"}}>Notes</h1>}
            {cat==="corrections" && <h1 style ={{marginTop:"2rem",textAlign:"center"}}>Corrections</h1>}
            {cat==="courses" && <h1 style ={{marginTop:"2rem",textAlign:"center"}}>Courses</h1>}

         
        </div>
        
    )
}

export default StudentBoardRight
