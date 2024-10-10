import React, { useRef, useState, useEffect } from 'react';
import LogoWithText from './assets/logo.png';
import NoTextLogo from './assets/logo-no-text.png';

import { CgWebsite } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { GiPlatform } from 'react-icons/gi';
import { MdConveyorBelt } from 'react-icons/md';
import { SiSpringsecurity } from 'react-icons/si';
import { GrHost } from 'react-icons/gr';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const App: React.FC = () => {
  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing option for the animations
      once: true, // Whether the animation should happen only once
    });
  }, []);

  const form = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatPhoneNumber = (input: string) => {
    const cleaned = ('' + input).replace(/\D/g, '');

    if (cleaned.length === 0) {
      return '';
    }

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
      setLoading(true); // Set loading to true when starting the request
      setIsSuccess(false); // Reset success state

      const emailData = {
        full_name: form.current.full_name.value,
        email: form.current.email.value,
        phone: form.current.phone.value,
        message: form.current.message.value,
      };

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
        setIsSuccess(true); // Show success state

        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } catch (error) {
        console.log('FAILED...', error);
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    }
  };

  return (
    <div className='flex flex-col min-h-screen max-w-7xl mx-auto px-4 font-custom'>
      <header className='top-0 w-full'>
        <div className=' max-w-7xl mx-auto px-4 flex items-center justify-between h-16'>
          <div className='logo flex items-center'>
            <a href='/'>
              <img
                src={LogoWithText}
                alt='Astronaut Illustration'
                className='max-h-16 object-contain'
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className='navbar hidden lg:flex'>
            <ul className='flex flex-col lg:flex-row lg:gap-8 space-x-6'>
              <li>
                <a
                  href='#services'
                  className='text-gray-600 hover:text-gray-400'
                >
                  Services
                </a>
              </li>
              <li>
                <a href='#about' className='text-gray-600 hover:text-gray-400'>
                  About
                </a>
              </li>

              <li>
                <a
                  href='#pricing'
                  className='text-gray-600 hover:text-gray-400'
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          <div className='logo flex items-center'>
            <a href='#contact'>Contact Us</a>
          </div>
        </div>
      </header>
      <main className='flex-auto text-left'>
        {' '}
        {/* Increased padding-top and set text-left */}
        <div className='grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24'>
          <div>
            <h1
              className='text-black text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter dark:text-white'
              data-aos='fade-up'
            >
              Gergen Software Contracting
            </h1>
            <p
              className='text-lg mt-4 text-slate-600 max-w-xl'
              data-aos='fade-up'
            >
              Your all-in-one software solutions partner, dedicated to
              empowering your business with innovative technology. From custom
              website development to seamless mobile applications, we craft
              tailored solutions to meet your unique business needs.
            </p>
          </div>
          <img
            src={NoTextLogo}
            alt='Astronaut Illustration'
            className='h-full w-2/3 object-contain hidden lg:flex'
          />
        </div>
        <div id='services' className='Container'>
          <div>
            <h1 className='title' data-aos='fade-right'>
              Anything you need to grow your business
            </h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16'>
              <div className='flex flex-col items-start' data-aos='fade-right'>
                <div className='service-card'>
                  <CgWebsite className='service-icon text-2xl mr-2' />
                  <div className='service-title'>Custom Website Creations</div>
                </div>
                <p className='service-description'>
                  Beautifully crafted websites tailored to your business needs.
                </p>
              </div>
              <div className='flex flex-col items-start' data-aos='fade-left'>
                <div className='service-card'>
                  <ImMobile className='service-icon text-2xl mr-2' />
                  <div className='service-title'>Mobile App Solutions</div>
                </div>
                <p className='service-description'>
                  Seamless mobile apps designed to reach your customers on the
                  go.
                </p>
              </div>
              <div className='flex flex-col items-start' data-aos='fade-right'>
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
              <div className='flex flex-col items-start' data-aos='fade-left'>
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
              <div className='flex flex-col items-start' data-aos='fade-right'>
                <div className='service-card'>
                  <SiSpringsecurity className='service-icon text-2xl mr-2' />
                  <div className='service-title'>Security Enhancements</div>
                </div>
                <p className='service-description'>
                  Advanced security solutions to protect your digital assets.
                </p>
              </div>
              <div className='flex flex-col items-start' data-aos='fade-left'>
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
        <div id='about' className='Container' data-aos='fade-left'>
          <div>
            <h1 className='title'>Why Gergen Software</h1>
            <h2 className='text-lg mt-4 text-slate-600'>
              Our approach is hands-on and collaborative. We visit your business
              to experience its unique environment firsthand, ensuring we fully
              understand your goals. As we develop your solution, we keep you
              engaged every step of the way, presenting prototypes and gathering
              your input. This collaborative journey ensures that what we build
              truly meets your needs and helps your business thrive.
            </h2>
          </div>
        </div>
        <div id='pricing' className='Container' data-aos='fade-right'>
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
              <p>info@gergensoftware.com</p>
              <p className='mb-8'>+1 (571) 382-0818</p>
            </div>
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
              <button
                type='submit'
                className={`p-2 rounded-md flex justify-center items-center ${
                  isSuccess ? 'bg-green-500 text-white' : 'bg-black text-white'
                }`}
                disabled={loading || isSuccess}
              >
                {loading ? (
                  <svg
                    className='animate-spin h-5 w-5 mr-3 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8v8z'
                    ></path>
                  </svg>
                ) : isSuccess ? (
                  'Message Sent'
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
