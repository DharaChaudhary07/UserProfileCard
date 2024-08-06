import icon1 from '../../assets/image/social.png'
import icon2 from '../../assets/image/twitter (1).png'
import icon3 from '../../assets/image/facebook (1).png'
import icon4 from '../../assets/image/github.png'
import './ProfileCard.css'
import { useState } from 'react';

const ProfileCard = () => {

    let [name, setName] = useState("Dhara Chaudhary");
    let [age ,setAge] = useState(20);
    let [course , setCourse] = useState("Front-End Developer");
    let [Email , setEmail] = useState("dharachaudhary683@gmail.com");
    let [address , setAddress] = useState("C-13 Surastranagar A.K. Road Surat Gujarat");
    
    return (
        <div>
            <div className="profile-card">
                <div className="profile-card-left w-2">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <h3>Dhara Chaudhary</h3>
                    <span>Web Developer</span>
                </div>
                <div className="profile-card-right w-7">
                    <div>
                        <h2>Profile Details</h2>
                    </div>
                    <h6>Name: {name}</h6>
                    <h6>Age: {age}</h6>
                    <h6>Course: {course}</h6>
                    <h6>Email: {Email}</h6>
                    <h6>Address: {address}</h6>
                <div className='icon'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <div>
                        <img src={icon4} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default ProfileCard ;