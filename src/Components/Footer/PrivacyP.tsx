import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const PrivacyP = () => {
  const navigate=useNavigate();
  return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my="md" onClick={()=>navigate(-1)} variant="light">Back</Button>
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-mine-shaft-900 shadow-lg rounded-2xl p-10 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-bright-sun-400 mb-4">🔒 Privacy Policy</h1>
        <p className="mb-6">
          Welcome to JobAlchemy ! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-xl font-semibold text-bright-sun-400 mb-2">1️⃣ Information We Collect</h2>
        <p className=" mb-4">
          - Personal details (Name, Email, Contact Number) 📧  <br />
          - Resume and employment history 📄  <br />
          - Login credentials and account activity 🔑  
        </p>

        <h2 className="text-xl font-semibold text-bright-sun-400 mb-2">2️⃣ How We Use Your Information</h2>
        <p className=" mb-4">
          - To help you find job opportunities 💼  <br />
          - To improve user experience and security 🔐  <br />
          - To send important updates and notifications 📢  
        </p>

        <h2 className="text-xl font-semibold text-bright-sun-400 mb-2">3️⃣ Sharing Your Information</h2>
        <p className=" mb-4">
          We do not sell your data. However, we may share necessary details with:  <br />
          - Employers for job applications 🏢  <br />
          - Third-party service providers for analytics 📊  <br />
          - Legal authorities if required by law ⚖️  
        </p>

        <h2 className="text-xl font-semibold text-bright-sun-400 mb-2">4️⃣ Your Rights & Choices</h2>
        <p className=" mb-4">
          - Update or delete your profile anytime ✏️  <br />
          - Control email notifications 📬  <br />
          - Request a copy of your data 🔍  
        </p>

        <h2 className="text-xl font-semibold text-bright-sun-400 mb-2">5️⃣ Security Measures</h2>
        <p className=" mb-4">
          We take data security seriously and use encryption, access controls, and monitoring to protect your information. 🔐
        </p>

        <h2 className="text-xl font-semibold text-bright-sun-400 mb-2">📅 Updates to This Policy</h2>
        <p className=" mb-6">
          We may update this policy from time to time. Check back for changes.
        </p>

        <p >
          If you have any questions, feel free to contact us at{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=j2055923@gmail.com" target="_blank" className="text-blue-500 hover:underline">
          j2055923@gmail.com
          </a>.
        </p>
      </div>
    </div>
    </div>
}

export default PrivacyP
