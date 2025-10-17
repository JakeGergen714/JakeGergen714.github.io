import { useState, useRef } from 'react';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Note: Removed AOS animations to prevent extra scrollbar from appearing

  // Format phone number as user types
  const formatPhoneNumber = (input: string): string => {
    const cleaned = input.replace(/\D/g, ''); // Remove non-numeric characters

    if (cleaned.length === 0) return '';

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

  // Handle phone input change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  // Handle form submission
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true); // Show loading state
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
        form.current.reset(); // Reset form fields
        setIsSuccess(true); // Show success message

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('FAILED...', error);
      } finally {
        setLoading(false); // Stop loading state
      }
    }
  };

  return (
    <div id='contact' className='container'>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='flex flex-col gap-4 text-slate-600 leading-relaxed'
      >
        <input
          type='text'
          placeholder='Full Name'
          name='full_name'
          className='border rounded-md p-2'
          required
        />

        <input
          type='text'
          name='phone'
          value={phone}
          onChange={handlePhoneChange}
          placeholder='Enter phone number'
          className='border rounded-md p-2'
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Email Address'
          className='border rounded-md p-2'
          required
        />

        <textarea
          name='message'
          placeholder='How can we help?'
          className='border rounded-md p-2'
          required
        ></textarea>

        <button
          type='submit'
          className={`p-2 rounded-md flex justify-center items-center ${
            isSuccess ? 'bg-green-500 text-white' : 'bg-purple-950 text-white'
          }`}
          disabled={loading || isSuccess}
        >
          {loading ? 'Sending…' : isSuccess ? 'Message Sent' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
