import { Button, TextInput } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import {
    IconMail,
    IconBrandInstagram,
    IconBrandLinkedin,
  } from "@tabler/icons-react";
  
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate=useNavigate();
  return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my="md" onClick={()=>navigate(-1)} variant="light">Back</Button>
  
    <div className=" flex items-center mt-20 justify-center px-6">
      <div className="backdrop-blur-md bg-white/10  rounded-2xl shadow-2xl p-10 max-w-xl w-full text-white text-center border border-bright-sun-400 hover:cursor-pointer hover:shadow-[0_0_5px_2px_yellow] my-5 transition duration-300 ease-in-out ">
        <h1 className="text-4xl font-bold mb-4">📬 Get in Touch</h1>
        <p className="text-lg text-white/80 mb-8">
          We'd ❤️ to hear from you! Reach out to us anytime through your favorite platform 👇
        </p>
        <div className="flex justify-center gap-10 mt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=j2055923@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-red-400 transition-all duration-300"
            title="Send us an Email 📧"
          >
            <IconMail size={40} />
          </a>
          <a
            href="https://www.instagram.com/sanch0_17"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-pink-300 transition-all duration-300"
            title="Follow us on Instagram 📸"
          >
            <IconBrandInstagram size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanchit-kharade"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-blue-300 transition-all duration-300"
            title="Connect on LinkedIn 💼"
          >
            <IconBrandLinkedin size={40} />
          </a>
        </div>
        <p className="text-sm text-white/50 mt-10">
          🚀 Powered by JobAlchemy team !!!
        </p>
      </div>
    </div>
  
  
    </div>
  
}

export default ContactUs
