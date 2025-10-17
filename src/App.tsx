import React, { useEffect } from 'react';

import { CgWebsite } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { GiPlatform } from 'react-icons/gi';
import { MdConveyorBelt } from 'react-icons/md';
import { SiSpringsecurity } from 'react-icons/si';
import { GrHost } from 'react-icons/gr';

// Legacy page kept for reference; not part of main routes

const App: React.FC = () => {
  // AOS initialization
  useEffect(() => {
    // (AOS removed)
  }, []);

  return (
    <div className='flex flex-col mx-auto font-sans w-full'>
      <div className='min-h-[75vh] bg-[var(--bg-darkest)] '>
        <header className='pt-4'>
          <div className=' max-w-7xl mx-auto px-4 flex items-center justify-between h-16 bg-[var(--bg-dark)] rounded-lg'>
            <div className='w-1/3 text-slate-300 font-medium lg:tracking-tight xl:tracking-tighter dark:text-white leading-none flex flex-col'>
              <span>Gergen</span>
              <span>Application</span>
              <span>Development</span>
            </div>
            {/* Navigation */}
            <nav className='w-1/3 hidden lg:flex justify-center'>
              <ul className='flex flex-col lg:flex-row lg:gap-8 space-x-6'>
                <li>
                  <a
                    href='#services'
                    className='text-gray-200 hover:text-gray-400'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#process'
                    className='text-gray-200 hover:text-gray-400'
                  >
                    How it works
                  </a>
                </li>

                <li>
                  <a
                    href='#pricing'
                    className='text-gray-200 hover:text-gray-400'
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>

            <div className='w-1/3 flex justify-end items-center'>
              <a href='#contact'>Contact Us</a>
            </div>
          </div>
        </header>
        {/* Hero */}
        <div className='relative flex justify-between items-center px-8 gap-12 mt-24 max-w-7xl w-full mx-auto'>
          {/* Left Side - Text (Grows More) */}
          <div className='flex-[1] min-w-0 flex flex-col'>
            <div className='leading-tight pb-8'>
              <span className='text-6xl text-white font-light'>
                Web Application Developers:
              </span>
              {'  '}
              <span className='text-6xl text-[var(--accent)] pb-2 font-light'>
                Driving Your Business Forward.
              </span>
            </div>

            <div>
              <p className='text-2xl text-darkBlue tracking-tighter text-left'>
                We specialize in crafting modern, scalable web applications
                tailored to your unique business needs. Our solutions empower
                businesses to operate efficiently and grow sustainably.
              </p>
              <div>
                <button className='bg-ds-green mt-6 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition'>
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image (Shrinks, but stays reasonable) */}
          <div className='flex-[1] flex-shrink-0 w-auto w-full'>
            <img
              src='/home-logo.png'
              alt='Home Logo'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>

      <div
        id='services'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-8 shadow-2xl'
      >
        <div className='width-controller max-w-7xl w-full mx-auto bg-ds-slate rounded-[2rem] pt-4 pb-4'>
          <div className='text-center p-12'>
            <div className='flex flex-col items-center justify-center mx-auto max-w-7xl'>
              <h1 className='text-left text-white font-medium text-5xl'>
                <span className='text-[var(--accent)]'>
                  Beyond Expectations:
                </span>{' '}
                <span className='text-5xl'>The Power of Web Apps</span>
              </h1>
              <p className='mt-4 text-darkBlue text-2xl text-left pb-16'>
                Web applications are more than just a good looking website—they
                are powerful tools that drive innovation, streamline processes,
                and create seamless digital experiences. Let’s build something
                extraordinary together.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-16'>
              {/* Service Card 1 */}
              <div className='flex flex-col items-start '>
                <div className='service-card flex items-center space-x-4 '>
                  <div className='rounded-full p-4 bg-yellow-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform '>
                    <CgWebsite className='text-3xl' />
                  </div>
                  <div className='service-title'>Custom Website Creations</div>
                </div>
                <p className='service-description'>
                  Beautifully crafted websites packed with custom features to
                  meet your business needs.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className='flex flex-col items-start  '>
                <div className='service-card flex items-center space-x-4 '>
                  <div className='rounded-full p-4 bg-red-500 bg-opacity-70  text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform '>
                    <ImMobile className='text-3xl' />
                  </div>
                  <div className='service-title'>Mobile App Solutions</div>
                </div>
                <p className='service-description'>
                  Everything we build is designed to look great on any device.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className='flex flex-col items-start'>
                <div className='service-card flex items-center space-x-4'>
                  <div className='rounded-full p-4 bg-blue-500 bg-opacity-70  text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform '>
                    <GiPlatform className='text-3xl' />
                  </div>
                  <div className='service-title'>
                    All-in-One Business Platforms
                  </div>
                </div>
                <p className='service-description'>
                  Integrated platforms that streamline your business operations.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className='flex flex-col items-start '>
                <div className='service-card flex items-center space-x-4'>
                  <div className='rounded-full p-4 bg-green-500 bg-opacity-70  text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform '>
                    <MdConveyorBelt className='text-3xl' />
                  </div>
                  <div className='service-title'>
                    Automation and Workflow Tools
                  </div>
                </div>
                <p className='service-description'>
                  Tools to automate and enhance your daily workflow efficiently.
                </p>
              </div>

              {/* Service Card 5 */}
              <div className='flex flex-col items-start '>
                <div className='service-card flex items-center space-x-4'>
                  <div className='rounded-full p-4 bg-purple-500 bg-opacity-70  text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform '>
                    <SiSpringsecurity className='text-3xl' />
                  </div>
                  <div className='service-title'>Security Enhancements</div>
                </div>
                <p className='service-description'>
                  Advanced security solutions to protect your digital assets.
                </p>
              </div>

              {/* Service Card 6 */}
              <div className='flex flex-col items-start'>
                <div className='service-card flex items-center space-x-4'>
                  <div className='rounded-full p-4 bg-orange-500 bg-opacity-70  text-white flex items-center justify-center shadow-2xl transition-transform '>
                    <GrHost className='text-3xl' />
                  </div>
                  <div className='service-title'>
                    Application Upgrades & Maintenance
                  </div>
                </div>
                <p className='service-description'>
                  Keeping Your Application Secure, Scalable, and Up-to-Date
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id='process'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-4 pb-80'
      >
        <div className='width-controller max-w-7xl w-full mx-auto bg-opacity-80 rounded-[2rem] pt-12 pb-12'>
          <div className='text-left p-12'>
            <div className='flex flex-col items-center justify-center mx-auto max-w-7xl'>
              <h1 className=' text-white font-medium text-5xl'>
                <span className=''>Our Process:</span>{' '}
                <span className='text-[var(--accent)]'>
                  From Idea to Execution
                </span>
              </h1>
              <p className='mt-4 text-lightBlue text-2xl text-left pb-8'>
                We follow a simple and effective, step-by-step approach to
                deliver high-quality web applications that align with your goals
                and your business needs.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16'>
              {/* Step 1 */}

              <div className='flex flex-col items-center bg-green-800 bg-opacity-30 rounded-2xl p-4'>
                <div className='flex rounded-full bg-blue-500 bg-opacity-30  text-3xl text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform mb-2'>
                  1
                </div>
                <div className='service-card flex flex-col items-center max-w-[300px]'>
                  <div className='service-title'>
                    Requirements Gathering & Planning
                  </div>
                  <p className='service-description'>
                    We start by understanding your business needs, objectives,
                    and project requirements. We create a detailed project
                    roadmap, wireframes, and UI/UX designs for the best user
                    experience.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center bg-green-800 bg-opacity-50 rounded-2xl p-4'>
                <div className='flex rounded-full bg-blue-500 bg-opacity-50  text-3xl text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform mb-2'>
                  2
                </div>
                <div className='service-card flex flex-col items-center max-w-[300px]'>
                  <div className='service-title'>Development & Testing</div>
                  <p className='service-description'>
                    Our team of expert web developers and software engineers
                    starts creating the application with your business objects
                    as our top priority. We rigorously test the software to
                    ensure it is bug-free, secure, and performs well under all
                    conditions.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center bg-green-800 bg-opacity-100 rounded-2xl p-4'>
                <div className='flex rounded-full bg-blue-500 bg-opacity-70  text-3xl text-white flex items-center justify-center w-16 h-16 shadow-2xl transition-transform mb-2'>
                  3
                </div>
                <div className='service-card flex flex-col items-center max-w-[300px]'>
                  <div className='service-title'>Deployment & Support</div>
                  <p className='service-description'>
                    Once approved, we deploy the software to your preferred
                    hosting or cloud platform. We provide ongoing support,
                    updates, and improvements to keep your software running
                    smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id='about'
        className='w-full flex flex-col justify-center px-4 bg-[var(--bg-dark)] pt-32 pb-32'
      >
        <div className='w-full max-w-7xl mx-auto -mt-96'>
          <div className='bg-orange-500 p-8 text-white text-left rounded-3xl shadow-2xl flex flex-col'>
            <blockquote className='text-[32px] italic text-white p-10 text-white text-[32px] md:text-[45px] md:leading-[58.5px] pb-16'>
              “They would think through these problems and challenges and
              opportunities like they were their own, bring these ideas that I
              hadn't even been thinking of and together we'd make the product
              better on an iterative basis. I love that teamwork."
            </blockquote>
            <div>Farzad Rahimi</div>
            <div>CEO and Founder of Rahimi Construction</div>
          </div>
        </div>

        <div className='flex width-controller max-w-7xl w-full mx-auto bg-opacity-80 rounded-[2rem] pt-24 pb-12'>
          <div className='text-left p-12'>
            <div className='flex flex-col items-center justify-center mx-auto max-w-7xl'>
              <h1 className=' text-white font-medium text-5xl'>
                <span className='text-[var(--accent)] '>Gergen Software:</span>{' '}
                <span className='leading-[1.1]'>
                  Delivering Gauranteed Results
                </span>
              </h1>
              <p className='mt-4 text-lightBlue text-lg text-left pb-8'>
                We have a winning process based on how the world’s smartest
                product teams are run. This takes the hassle of management off
                your shoulders while simultaneously making us faster (and
                therefore more affordable) than any other software development
                shop you’ve encountered.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16'>
              {/* Step 1 */}

              <div className='flex flex-col items-center bg-opacity-30 rounded-2xl p-4'>
                <div className='service-card flex flex-col items-center max-w-[300px]'>
                  <div className='service-title'>Breathe easy</div>
                  <p className='service-description'>
                    With our plug-and-play development process
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center bg-opacity-50 rounded-2xl p-4'>
                <div className='service-card flex flex-col items-center max-w-[300px]'>
                  <div className='service-title'>Pay as you go</div>
                  <p className='service-description'>
                    Monthly subscription based on how many developers you need
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center bg-opacity-100 rounded-2xl p-4'>
                <div className='service-card flex flex-col items-center max-w-[300px]'>
                  <div className='service-title'>Build smarter</div>
                  <p className='service-description'>
                    We help tighten features based on the product's business
                    value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
