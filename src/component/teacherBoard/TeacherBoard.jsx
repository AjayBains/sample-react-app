import React from 'react'
import { BiBlock } from 'react-icons/bi'
import { BsCheckLg, BsFillCalendarFill, BsFillEnvelopeFill } from 'react-icons/bs'
import StudentBoardRight from '../studentBoard/studentBoardRight/StudentBoardRight'
import "./teacherboard.scss"

const TeacherBoard = () => {
    return (
        <div className ="teacherBoard">
            <div className="teacherDashboard">
                <div className="teacherboard__left">
                    <div className="teacher__img">
                        <img src="/images/student1.jpg" alt="teacher" className="teacher__pic" />
                    </div>
                    <div className="accountID"><span className="accId">Accound id:</span>Ewr34234234234</div>
                    <div className="teacher__buttons">
                        <button className="btn btn__text"><span className="btnIcon"><BsFillEnvelopeFill/></span>Message</button>
                        <button className="btn btn__meet"><span className="btnIcon"><BsFillCalendarFill/></span>Hold a spot</button>
                        <button className="btn btn__ban"><span className="btnIcon"><BiBlock/></span>Report/Ban</button>
                    </div>

                    <div className="teacher__box">
                       <div className="teacher__box--left">
                           <h3 className="teacher__heading">Regular  Student</h3>
                           <p className="teacher__text">KAte Speaks Chinese</p>
                           <p className="teacher__text">Private Student</p>
                           <p className="teacher__text">04/27/2021 our last chat</p>
                       </div>
                       <div className="teacher__box--right">
                           <div className="checkIcon"><BsCheckLg/></div>
                           <div className="online__time">
                               <p className = "minsOnline">3324Min</p>
                               <p className = "online__tag">On-Ni-How-World</p>
                           </div>
                       </div>
                        

                    </div>
                </div>
                <StudentBoardRight/>
                

            </div>
            
        </div>
    )
}

export default TeacherBoard
