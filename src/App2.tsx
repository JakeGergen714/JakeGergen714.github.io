import React, { useEffect } from 'react';

import { CgWebsite } from 'react-icons/cg';
import { ImMobile } from 'react-icons/im';
import { GiPlatform } from 'react-icons/gi';
import { MdConveyorBelt } from 'react-icons/md';
import { SiSpringsecurity } from 'react-icons/si';
import { GrHost } from 'react-icons/gr';

import ContactForm from './components/ContactForm';

// New landing focused on a subscription-based, full-service software partnership
const App2: React.FC = () => {
  useEffect(() => {
    // (AOS removed)
  }, []);

  return (
    <div className='flex flex-col mx-auto font-sans w-full'>
      {/* Header + Hero */}
      <div className='min-h-[75vh] bg-[var(--bg-darkest)]'>
        <header className='pt-4'>
          <div className='max-w-7xl mx-auto px-4 flex items-center justify-between h-16 bg-[var(--bg-dark)] rounded-lg'>
            <div className='w-1/3 text-slate-300 font-medium lg:tracking-tight xl:tracking-tighter dark:text-white leading-none flex flex-col'>
              <span>Gergen</span>
              <span>Software</span>
              <span>Partners</span>
            </div>
            <nav className='w-1/3 hidden lg:flex justify-center'>
              <ul className='flex flex-col lg:flex-row lg:gap-8 space-x-6'>
                <li>
                  <a
                    href='#model'
                    className='text-gray-200 hover:text-gray-400'
                  >
                    Model
                  </a>
                </li>
                <li>
                  <a
                    href='#process'
                    className='text-gray-200 hover:text-gray-400'
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href='#coverage'
                    className='text-gray-200 hover:text-gray-400'
                  >
                    Coverage
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-gray-200 hover:text-gray-400'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className='w-1/3 flex justify-end items-center'>
              <a
                href='#contact'
                className='bg-ds-green px-4 py-2 rounded-md text-white'
              >
                Start a conversation
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className='relative flex flex-col md:flex-row justify-between items-center px-8 gap-12 mt-24 max-w-7xl w-full mx-auto'>
          <div className='flex-[1] min-w-0 flex flex-col'>
            <div className='leading-tight pb-8'>
              <span className='text-6xl text-white font-light'>
                Your Full‑Service Software Team
              </span>
              <span className='block text-2xl mt-4 text-[var(--accent)] font-light'>
                Subscription model. Weekly live builds. Ongoing care.
              </span>
            </div>
            <p className='text-2xl text-darkBlue tracking-tighter text-left'>
              We don’t just ship and vanish. We partner long‑term—designing,
              building, deploying, monitoring, and maintaining your software so
              it keeps delivering value as your business evolves.
            </p>
            <div>
              <a
                href='#model'
                className='mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-ds-green rounded-lg hover:opacity-90 transition'
              >
                See how the subscription works
              </a>
            </div>
          </div>
          <div className='flex-[1] flex-shrink-0 w-full'>
            <img
              src='/home-logo.png'
              alt='Home Logo'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>

      {/* Model */}
      <section
        id='model'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-10'
      >
        <div className='width-controller max-w-7xl w-full mx-auto bg-ds-slate rounded-[2rem] pt-10 pb-12'>
          <div className='text-center px-6 md:px-12'>
            <h2 className='text-left text-white font-medium text-5xl'>
              <span className='text-[var(--accent)]'>Subscription‑Based</span>{' '}
              Partnership
            </h2>
            <p className='mt-4 text-darkBlue text-2xl text-left pb-10'>
              Flat monthly pricing starting at $999/mo, scaled to your
              initiative’s size and pace. Pause, upgrade, or continue as your
              needs change—without losing context or momentum.
            </p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-green-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <MdConveyorBelt className='text-3xl' />
                  </div>
                  <div className='service-title'>Weekly Live Builds</div>
                </div>
                <p className='service-description'>
                  Review working software every week. Priorities stay aligned,
                  and you ship value continuously.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-blue-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <GrHost className='text-3xl' />
                  </div>
                  <div className='service-title'>Deploy, Monitor, Maintain</div>
                </div>
                <p className='service-description'>
                  Real engineers on call—updates, observability, incident
                  response, and best practices baked in.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-purple-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <SiSpringsecurity className='text-3xl' />
                  </div>
                  <div className='service-title'>Security & Compliance</div>
                </div>
                <p className='service-description'>
                  Patch management, dependency hygiene, and reviews for a
                  secure, resilient stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities (keeps your previous vibe) */}
      <section
        id='coverage'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-8'
      >
        <div className='width-controller max-w-7xl w-full mx-auto rounded-[2rem] pt-4 pb-4'>
          <div className='text-center p-12'>
            <div className='flex flex-col items-center justify-center mx-auto max-w-7xl'>
              <h2 className='text-left text-white font-medium text-5xl'>
                <span className='text-[var(--accent)]'>Beyond Delivery:</span>{' '}
                Full‑Spectrum Engineering
              </h2>
              <p className='mt-4 text-darkBlue text-2xl text-left pb-12'>
                From greenfield builds to legacy rescue and steady growth. You
                get a cross‑functional team that can handle it end‑to‑end.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-16'>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-yellow-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <CgWebsite className='text-3xl' />
                  </div>
                  <div className='service-title'>Custom Web Apps</div>
                </div>
                <p className='service-description'>
                  Modern, scalable applications tailored to your workflows and
                  customers.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-red-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <ImMobile className='text-3xl' />
                  </div>
                  <div className='service-title'>Mobile‑First Experiences</div>
                </div>
                <p className='service-description'>
                  Responsive by design, seamless across devices.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-blue-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <GiPlatform className='text-3xl' />
                  </div>
                  <div className='service-title'>Internal Platforms</div>
                </div>
                <p className='service-description'>
                  Automations and tools that streamline ops and unlock scale.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-green-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <MdConveyorBelt className='text-3xl' />
                  </div>
                  <div className='service-title'>Automation & Workflows</div>
                </div>
                <p className='service-description'>
                  Integrations, process automation, data pipelines, and QA.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-purple-500 bg-opacity-70 text-white flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <SiSpringsecurity className='text-3xl' />
                  </div>
                  <div className='service-title'>Security Enhancements</div>
                </div>
                <p className='service-description'>
                  Threat modeling, dependency updates, and secure SDLC.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-orange-500 bg-opacity-70 text-white flex items-center justify-center shadow-2xl'>
                    <GrHost className='text-3xl' />
                  </div>
                  <div className='service-title'>Upgrades & SRE Care</div>
                </div>
                <p className='service-description'>
                  Dependency hygiene, performance, observability, and uptime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process (flagship section) */}
      <section
        id='process'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-8 pb-24'
      >
        <div className='width-controller max-w-7xl w-full mx-auto rounded-[2rem] pt-12 pb-12'>
          <div className='text-left p-12'>
            <div className='flex flex-col items-center justify-center mx-auto max-w-7xl'>
              <h2 className='text-white font-medium text-5xl'>
                <span className=''>Our Process:</span>{' '}
                <span className='text-[var(--accent)]'>
                  Product, Delivery, and Ongoing Care
                </span>
              </h2>
              <p className='mt-4 text-lightBlue text-2xl text-left pb-8'>
                A proven loop—discover, build, ship, learn—backed by a standing
                team that keeps your software healthy and moving forward.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16'>
              <div className='flex flex-col items-center bg-green-800 bg-opacity-30 rounded-2xl p-4'>
                <div className='flex rounded-full bg-blue-500 bg-opacity-30 text-3xl text-white items-center justify-center w-16 h-16 shadow-2xl mb-2'>
                  1
                </div>
                <div className='service-card flex flex-col items-center max-w-[320px]'>
                  <div className='service-title'>Kickoff & Roadmap</div>
                  <p className='service-description'>
                    Requirements, outcomes, risks, and a living roadmap. Expect
                    wireframes, milestones, and an initial backlog.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center bg-green-800 bg-opacity-50 rounded-2xl p-4'>
                <div className='flex rounded-full bg-blue-500 bg-opacity-50 text-3xl text-white items-center justify-center w-16 h-16 shadow-2xl mb-2'>
                  2
                </div>
                <div className='service-card flex flex-col items-center max-w-[320px]'>
                  <div className='service-title'>Weekly Live Builds</div>
                  <p className='service-description'>
                    Ship working software every week. You review, we adjust.
                    Fast feedback beats big reveals.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center bg-green-800 bg-opacity-100 rounded-2xl p-4'>
                <div className='flex rounded-full bg-blue-500 bg-opacity-70 text-3xl text-white items-center justify-center w-16 h-16 shadow-2xl mb-2'>
                  3
                </div>
                <div className='service-card flex flex-col items-center max-w-[320px]'>
                  <div className='service-title'>Operate & Improve</div>
                  <p className='service-description'>
                    We deploy, monitor, and maintain. Feature requests flow into
                    the backlog; compliance and updates handled as part of the
                    subscription.
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantees / FAQs inline */}
            <div className='mt-16 grid md:grid-cols-3 gap-8'>
              <div className='bg-[var(--bg-dark)] rounded-2xl p-6'>
                <h3 className='text-white text-2xl font-semibold mb-2'>
                  What you get
                </h3>
                <ul className='list-disc list-inside text-slate-300'>
                  <li>Dedicated team with product + engineering</li>
                  <li>Weekly demos and transparent roadmap</li>
                  <li>Deployment, monitoring, and maintenance</li>
                  <li>Security, performance, and best practices</li>
                </ul>
              </div>
              <div className='bg-[var(--bg-dark)] rounded-2xl p-6'>
                <h3 className='text-white text-2xl font-semibold mb-2'>
                  How pricing works
                </h3>
                <ul className='list-disc list-inside text-slate-300'>
                  <li>Flat monthly fee starting at $999/mo</li>
                  <li>Scale up/down by team size and velocity</li>
                  <li>Pause or resume without losing context</li>
                </ul>
              </div>
              <div className='bg-[var(--bg-dark)] rounded-2xl p-6'>
                <h3 className='text-white text-2xl font-semibold mb-2'>
                  Why it wins
                </h3>
                <ul className='list-disc list-inside text-slate-300'>
                  <li>Continuous value delivery</li>
                  <li>Lower risk vs. big one‑off builds</li>
                  <li>Real partnership and long‑term accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className='w-full flex flex-col justify-center px-4 bg-[var(--bg-dark)] pt-24 pb-24'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='bg-orange-500 p-8 text-white text-left rounded-3xl shadow-2xl flex flex-col'>
            <blockquote className='italic text-white p-10 text-[28px] md:text-[40px] md:leading-[52px] pb-10'>
              “They think through our problems like owners—bringing ideas we
              hadn’t considered—and we iterate to a better product together.”
            </blockquote>
            <div>Farzad Rahimi</div>
            <div>CEO and Founder, Rahimi Construction</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id='contact'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-16 pb-24'
      >
        <div className='width-controller max-w-5xl w-full mx-auto rounded-[2rem]'>
          <h2 className='text-white text-4xl font-semibold mb-6'>
            Tell us about your goals
          </h2>
          <p className='text-slate-300 mb-8'>
            We’ll reply within one business day to schedule a quick intro call.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default App2;
