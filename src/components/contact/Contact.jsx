import React from 'react';
import "./contact.css";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d6b905c-649c-4db0-b24b-78a992cb33dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <section className='contact container section' id='contact'>
            <h2 className='section__title'>Contact</h2>

            <div className='contact__container grid'>
                <div className='contact__info'>
                    <h3 className='contact__title'>Let's Connect!</h3>
                    <p className='contact__details'>Send me an email 📧</p>
                </div>
                    

                <form onSubmit={onSubmit} className='contact__form'>
                <div className='contact__form-group'>
            
                    <div className='contact__form-div'>
                        <input type='text' name='name' className='contact__form-input'
                        placeholder='Insert your name' required/>
                    </div>

                    <div className='contact__form-div'>
                        <input type='email' name='email' className='contact__form-input'
                        placeholder='Insert your email' required/>
                    </div>
                </div>

                {/* <div className='contact__form-div'>
                        <input type='text' className='contact__form-input'
                        placeholder='Insert your subject' />
                </div> */}

                <div className='contact__form-div contact__form-area'>
                    <textarea name='message' id='' cols="30" rows="10" className='contact__form-input' 
                    placeholder='Write your message' required></textarea>

                </div>

            
                <button type="submit" className="btn">Send Email</button>
                

            </form>

            <span>{result}</span>

            </div>


        </section>
    )
}

export default Contact