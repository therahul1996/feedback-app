import React, {useState} from 'react'
import user from '../img/user.png'
import { Link, useNavigate } from 'react-router-dom'
const AddContent = ({ newData }) => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [photo, setPhoto] = useState(null);
    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [error, setError] = useState({ name: false, photo: false, date: false, title: false, desc: false });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError((prevError) => ({ ...prevError, name: true }));
            return;
          }
          if (!photo) {
            setError((prevError) => ({ ...prevError, photo: true }));
            return;
          }
          if (!date) {
            setError((prevError) => ({ ...prevError, date: true }));
            return;
          }
          if (!title) {
            setError((prevError) => ({ ...prevError, title: true }));
            return;
          }
          if (!desc) {
            setError((prevError) => ({ ...prevError, desc: true }));
            return;
          }
        const newFeedback = {
            name,
            photo,
            date,
            title,
            desc,
        };
        newData(newFeedback);
        navigate('/')
    }
    return (
        <>
            <div className="parent-left active">
                <div className='pl-box'>
                    <div className='modal-sideNav'>
                        <div className='sideContent'>
                            <div className='sideCard mb-15'>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <img src={user} alt='userName' className='prof-img' />
                                    </div>
                                    <div className='ml-15'>
                                        <h3 className='m-0'>Hi Reader,</h3>
                                        <p className='m-0'>Here's your News!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='sideCard mb-15 text-center'>
                                <h2 className='m-0 mb-15'>Haven't a Feedback?</h2>
                                <Link to='/' className='listing-btn red'>Go Back!</Link>
                            </div>
                        </div>
                    </div>
                    <div className='pl-box-right'>
                        <form onSubmit={handleSubmit} className='pl-box-right-content'>
                            <h4>Thank you so much for taking the time!</h4>
                            <p>Please provie the below details!</p>
                            <div className='form-group'>
                                <label>Name:</label>
                                <input
                                    type='text'
                                    className='form-control w-50 md-w-100'
                                    value={name}
                                    onChange={(e) => {setName(e.target.value); setError((prevError) => ({ ...prevError, name: false }))}}
                                    placeholder="Add name here..." />
                                    {error.name && <span className="error-text">Name is required</span>}
                            </div>
                            <div className='form-group'>
                                <label>Photo:</label>
                                <input
                                    type='file'
                                    className='form-control w-50 md-w-100'
                                    onChange={(e) => {setPhoto(URL.createObjectURL(e.target.files[0])); setError((prevError) => ({ ...prevError, photo: false }));}}
                                    />
                                    {error.photo && <span className="error-text">Photo is required</span>}
                            </div>
                            <div className='form-group'>
                                <label>Date:</label>
                                <input
                                    type='date'
                                    className='form-control w-50 md-w-100'
                                    value={date}
                                    onChange={(e) => {setDate(e.target.value); setError((prevError) => ({ ...prevError, date: false }))}}
                                     />
                                     {error.date && <span className="error-text">Date is required</span>}
                            </div>
                            <div className='form-group'>
                                <label>Title:</label>
                                <input
                                    type='text'
                                    className='form-control w-50 md-w-100'
                                    value={title}
                                    onChange={(e) => {setTitle(e.target.value); setError((prevError) => ({ ...prevError, title: false }));}}
                                    placeholder="Add title here..." />
                                    {error.title && <span className="error-text">Title is required</span>}
                            </div>
                            <div className='form-group'>
                                <label>Description:</label>
                                <textarea
                                    className='form-control textArea'
                                    rows={6}
                                    cols={40}
                                    value={desc}
                                    onChange={(e) => {setDesc(e.target.value); setError((prevError) => ({ ...prevError, desc: false }));}}
                                    placeholder="Add desc here..."
                                     />
                                     {error.desc && <span className="error-text">Description is required</span>}
                            </div>
                            <button type='submit' className='submit-feedback-btn'>Submit Feedback</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContent