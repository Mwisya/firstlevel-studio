import React, {useState} from 'react'
import './newsletter.css'

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    // const [response, setResponse]= useState('');


    function handleChange(e) {
        setEmail(e.target.value)
    }

    function submit(e) {

        e.preventDefault()

        setEmail("")

    }


    return (
        <div className='newsletter'>

            <div className="title">
                <h2 className='bg'>Get notified on offers not limited to
                </h2>
                <p>
                    Photography | Videography offers | Customers week and much more...
                </p>
            </div>

            <form className="form"
                onSubmit={submit}>
                <input type="text" name="email" id="" placeholder='email@gmail.com'
                    value={email}
                    onChange={handleChange}/>
                <div className='btn-bg'>
                    <button type='submit' className='text'>send</button>
                </div>
            </form>

        </div>
    )
}

export default NewsLetter
