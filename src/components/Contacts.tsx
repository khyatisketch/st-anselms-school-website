import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center border-b-2 border-blue-900 inline-block pb-1">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Address:</strong> St. Anselm&rsquo;s Senior Secondary School, Abu Road
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Email:</strong> info@abuanselm.com
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Phone:</strong> +91 12345 67890
            </p>
            <a
  href="https://wa.me/911234567890"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.13 13.5c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.53.12s-.6.77-.73.93c-.13.15-.27.17-.5.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.13-.24-.01-.36.11-.48.11-.11.24-.27.36-.4.12-.13.16-.23.24-.38.08-.16.04-.3-.02-.42-.06-.12-.53-1.27-.73-1.74-.19-.46-.38-.4-.53-.4s-.3-.01-.46-.01-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.3 1 .38c.15 1.49 2.07 3.49 4.3 4.36.6.25 1.07.4 1.43.51.6.19 1.15.16 1.58.1.48-.07 1.43-.58 1.64-1.13.2-.54.2-1 .15-1.12-.05-.12-.2-.19-.44-.3z" />
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.838.495 3.558 1.35 5.044L2 22l5.112-1.3A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
      clipRule="evenodd"
    />
  </svg>
  Chat on WhatsApp
</a>

          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6540236877872!2d72.76798967538042!3d24.46278606105513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2626468b6c65%3A0x3a38fc1a90e98c1c!2sSt.%20Anselm&#39;s%20School%20Abu%20Road!5e0!3m2!1sen!2sin!4v1750052381686!5m2!1sen!2sin"
  width="100%"
  height="300"
  allowFullScreen
  loading="lazy"
  className="border-0 w-full h-72 rounded-lg"
></iframe>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
