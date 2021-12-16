import React from 'react'
import "./profile.scss"

const Profile = () => {
    return (
        <div className ="profileC">
            <h3>Pronounced:- Kate</h3>
            <div className="box box__1">
                <p> <strong>From: </strong>Hillcres Drive Washington</p>
                <div className="line line__1">
                    <p> <strong>Level: </strong>Elementary</p>
                    <p> <strong>Goals: </strong>Elementary</p>
                </div>
                <div className="line line__2">
                    <p> <strong>Corrections: </strong>After every Mistake</p>
                    <p> <strong>Current focus: </strong>Self Improvement</p>
                </div>
                <p className='bio'><strong>Bio:</strong></p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, tempore ducimus officiis necessitatibus qui in!</p>
                
            </div>

            <div className="box box__2">

                 <p> <strong>Student Interest: </strong>Painting</p>
                 <p>Over 18 years old</p>

            </div>
        </div>
    )
}

export default Profile
