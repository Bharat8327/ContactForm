import React from 'react';
import Swal from 'sweetalert2';
function Contact() {
  const [result, setResult] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'db925b55-8526-4580-a3be-18baedfe2d53');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully',
        icon: 'success',
      });
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <section className=" flex justify-center items-center h-screen bg-blue-400 px-3">
      <form
        className="max-w-150 w-[100%] bg-white p-10 rounded-lg  "
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-3xl text-center animate-bounce text-blue-400">
          Contact Form
        </h2>
        <div className="my-2">
          <label htmlFor="name" className="items-start">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-[100%] mt-2  border-2 border-[#ddd]  rounded-2xl outline-none px-3 py-2"
            placeholder="Enter Your name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            className="w-[100%] mt-2 border-2 border-[#ddd]  rounded-2xl outline-none px-3 py-2"
            type="email"
            id="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile No</label>
          <input
            className="w-[100%] mt-2 border-2 border-[#ddd]  rounded-2xl outline-none px-3 py-2"
            type="tel"
            id="mobile"
            placeholder="Enter Your mobile no"
            name="number"
            required
          />
        </div>
        <div>
          <label htmlFor="msg">Your Message</label>
          <textarea
            className="w-[100%] mt-2 transform outline-none min-h-50 border-2 border-[#ddd]    rounded-2xl px-3 py-2"
            type="text"
            id="msg"
            required
            placeholder="enter your mssg"
            name="message"
          ></textarea>
        </div>
        <div onSubmit={handleSubmit}>
          <button className="text-center w-full  py-4 rounded-lg font-bold bg-amber-300 hover:bg-amber-400 active:bg-amber-500">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
