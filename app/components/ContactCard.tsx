"use client";

export default function ContactForm() {
  return (
    <section className="relative min-h-[46vh] w-full bg-black text-white flex items-start justify-center overflow-hidden">
      {/* Grid Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto w-full">
        {/* LEFT SIDE — 1/3 width */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:col-span-1">
          <h1 className="text-5xl md:text-5xl font-extrabold text-white/70 leading-tight">
            Contact Us
          </h1>
          <img
            src="/sageroboticslogo.png"
            alt="Logo"
            className="w-40 md:w-44"
          />

          {/* ICONS */}
          <div className="flex space-x-4 mt-2 text-white/70">
            {/* Email icon */}
            <a
              href="mailto:team5835@sagehillschool.org"
              aria-label="Email"
              className="hover:text-sage-light transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25"
                />
              </svg>
            </a>

            {/* Instagram icon */}
            <a
              href="https://www.instagram.com/sagehillrobotics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-sage-light transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 7.5h.008v.008H16.5V7.5zM12 9.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — 2/3 width */}
        <div className="md:col-span-2 flex justify-center">
          <form
            action="https://formspree.io/f/mnngbvro"
            method="POST"
            className="w-full max-w-md space-y-4"
          >
            {/* NAME + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-xs text-white/70 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="Name"
                  required
                  className="w-full bg-transparent border-b border-white/30 focus:border-sage-light text-white px-1.5 py-1 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs text-white/70 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="Phone"
                  type="tel"
                  className="w-full bg-transparent border-b border-white/30 focus:border-sage-light text-white px-1.5 py-1 outline-none text-sm transition-all"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="block text-xs text-white/70 mb-1">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                required
                className="w-full bg-transparent border-b border-white/30 focus:border-sage-light text-white px-1.5 py-1 outline-none text-sm transition-all"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label htmlFor="message" className="block text-xs text-white/70 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/30 focus:border-sage-light text-white px-1.5 py-1 outline-none text-sm transition-all resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="mt-2 rounded-md bg-sage-light px-5 py-1.5 text-sm font-semibold text-black hover:bg-sage-light/80 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
