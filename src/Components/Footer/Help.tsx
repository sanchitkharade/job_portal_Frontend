
import { Button } from '@mantine/core';
import { IconArrowLeft, IconMail, IconMessageCircle, IconPhone } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate=useNavigate();
  return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my="md" onClick={()=>navigate(-1)} variant="light">Back</Button>
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-mine-shaft-900 shadow-lg rounded-2xl p-10 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-bright-sun-400 mb-6"> Help & Support</h1>
        <p className=" mb-8">
          Need assistance? We're here to help! Check out the FAQs below or contact us directly.
        </p>


        {/* Contact Support */}
        <h2 className="text-xl font-semibold  mt-8 mb-3 text-bright-sun-400">📞 Contact Support</h2>
        <p className=" mb-6">Still need help? Reach out to us through any of these channels:</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <IconMail size={30} className="text-blue-500" />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=j2055923@gmail.com" className="text-blue-500 hover:underline"
            target="_blank">
            j2055923@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <IconPhone size={30} className="text-green-500" />
            <p className="text-gray-700">+91 8010193186</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <IconMessageCircle size={30} className="text-purple-500" />
            <a href="https://wa.me/918010193186" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        {/* Help Center */}
        <h2 className="text-xl font-semibold  mt-8 mb-3 text-bright-sun-400">📚 Help Center</h2>
        <p className="">
          Visit our <a href="/Help" className="text-blue-500 hover:underline">Help Center</a> for more guides and support articles.
        </p>
      </div>
    </div>
    </div>
}

export default Help
