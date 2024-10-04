import React, { useRef, useState } from 'react';
import Header from './components/Header';
import { CgWebsite } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { GiPlatform } from 'react-icons/gi';
import { MdConveyorBelt } from 'react-icons/md';
import { SiSpringsecurity } from 'react-icons/si';
import { GrHost } from 'react-icons/gr';

const App: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState('');

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const formatPhoneNumber = (input: string) => {
    const cleaned = ('' + input).replace(/\D/g, '');

    // Check if the input is empty
    if (cleaned.length === 0) {
      return '';
    }

    // Format the input
    const areaCode = cleaned.slice(0, 3);
    const middlePart = cleaned.slice(3, 6);
    const lastPart = cleaned.slice(6, 10);

    let phoneNumber = '';

    if (areaCode) {
      phoneNumber += `(${areaCode}`;
    }
    if (areaCode.length === 3 && middlePart) {
      phoneNumber += `) ${middlePart}`;
    }
    if (middlePart.length === 3 && lastPart) {
      phoneNumber += `-${lastPart}`;
    }

    return phoneNumber;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const emailData = {
        full_name: form.current.full_name.value,
        email: form.current.email.value,
        phone: form.current.phone.value,
        message: form.current.message.value,
      };

      console.log(emailData);

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }

        console.log('SUCCESS!');
        form.current.reset(); // Reset the form
        setShowSuccessPopup(true); // Show success popup

        // Hide the popup after 3 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      } catch (error) {
        console.log('FAILED...', error);
      }
    }
  };

  return (
    <div className='flex flex-col min-h-screen max-w-7xl mx-auto px-4 font-custom'>
      <Header />
      <main className='flex-auto pt-24 text-left'>
        {' '}
        {/* Increased padding-top and set text-left */}
        <div className='pt-16 flex justify-start gap-x-1'>
          <div>
            <h1 className=' text-black text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter'>
              Gergen Software Contracting
            </h1>
            <p className='text-lg mt-4 text-slate-600 max-w-xl'>
              Your all-in-one software solutions partner, dedicated to
              empowering your business with innovative technology. From custom
              website development to seamless mobile applications, we craft
              tailored solutions to meet your unique business needs.
            </p>
          </div>
        </div>
        <div id='services' className='Container'>
          <div>
            <h1 className='title'>Anything you need to grow your business</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16'>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <CgWebsite className='service-icon text-2xl mr-2' />
                  <div className='service-title'>Custom Website Creations</div>
                </div>
                <p className='service-description'>
                  Beautifully crafted websites tailored to your business needs.
                </p>
              </div>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <ImMobile className='service-icon text-2xl mr-2' />
                  <div className='service-title'>Mobile App Solutions</div>
                </div>
                <p className='service-description'>
                  Seamless mobile apps designed to reach your customers on the
                  go.
                </p>
              </div>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <GiPlatform className='service-icon text-2xl mr-2' />
                  <div className='service-title'>
                    All-in-One Business Platforms
                  </div>
                </div>
                <p className='service-description'>
                  Integrated platforms that streamline your business operations.
                </p>
              </div>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <MdConveyorBelt className='service-icon text-2xl mr-2' />
                  <div className='service-title'>
                    Automation and Workflow Tools
                  </div>
                </div>
                <p className='service-description'>
                  Tools to automate and enhance your daily workflow efficiently.
                </p>
              </div>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <SiSpringsecurity className='service-icon text-2xl mr-2' />
                  <div className='service-title'>Security Enhancements</div>
                </div>
                <p className='service-description'>
                  Advanced security solutions to protect your digital assets.
                </p>
              </div>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <GrHost className='service-icon text-2xl mr-2' />
                  <div className='service-title'>
                    Cloud Services and Hosting Management
                  </div>
                </div>
                <p className='service-description'>
                  Reliable cloud services to host and manage your applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='about' className='Container'>
          <div>
            <h1 className='title'>Why G.S.C</h1>
            <h2 className='text-lg mt-4 text-slate-600'>
              We add a personal touch to our development process that seperates
              us from everyone else. We want to get to know you, your business,
              employees and your customers to build the perfect tools just for
              you and your business. We are passionate about what we do and
              specialize in using the latest and greatest tools to deliver the
              best possible products for our customers!
            </h2>
          </div>
        </div>
        <div id='pricing' className='Container'>
          <div>
            <h1 className='title'>Pricing</h1>
            <h2 className='text-lg mt-4 text-slate-600'>
              At Gergen Software Contracting, we believe in transparency and
              integrity when it comes to pricing. That's why we offer
              straightforward price guarantees: the quote we provide is the
              final amount you will pay. You can trust that there are no hidden
              fees or unexpected costs. Additionally, we understand the
              importance of your investment, which is why{' '}
              <b>
                you won't pay anything until your project is fully completed to
                your satisfaction
              </b>
              . Our commitment is to deliver exceptional results while ensuring
              peace of mind throughout the entire process.
            </h2>
          </div>
        </div>
        <div id='contact' className='Container mb-16'>
          <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
          <div className='grid md:grid-cols-2 max-w-4xl mt-8'>
            <div className='flex flex-col gap-4 text-left text-slate-600 leading-relaxed'>
              <p>✉️ info@gergensoftware.com</p>
              <p className='mb-8'>+1 (123) 456-7890</p>
            </div>
            {/* Success Popup */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-4 text-slate-600 leading-relaxed service-description'
            >
              <input
                type='text'
                placeholder='Full Name'
                name='full_name'
                className='border rounded-md p-2'
              />
              <input
                type='text'
                name='phone'
                value={phone}
                onChange={handlePhoneChange}
                placeholder='Enter phone number'
                className='border rounded-md p-2'
              />
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                className='border rounded-md p-2'
              />
              <textarea
                name='message'
                placeholder='How can we help?'
                className='border rounded-md p-2'
              ></textarea>
              {showSuccessPopup && (
                <div className='bg-green-500 text-white py-2 px-4 rounded-md shadow-md'>
                  Message sent successfully!
                </div>
              )}
              <button
                type='submit'
                className='bg-black text-white p-2 rounded-md'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
