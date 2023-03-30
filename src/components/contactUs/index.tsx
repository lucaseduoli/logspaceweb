import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { MutableRefObject, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import emailkey from "../../keys/emailkey";

export default function ContactUs() {
    const form = useRef(null);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(form !== null){
            emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, e.currentTarget, emailkey.PUBLIC_KEY).then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });emailjs.init(emailkey.PUBLIC_KEY);
        }
    }
  return (
    <section id="contact" className="flex items-center justify-center h-screen min-h-full px-4 py-6 sm:px-6 lg:px-16">
      <div className="w-full max-w-md space-y-8 lg:max-w-3xl">
        <div className="text-center">
          <h2 className="mb-8 text-6xl font-bold leading-none text-white lg:rounded-t-md">
            Contact us
          </h2>
          <strong className="w-full mx-auto mb-8 text-xl font-light text-center text-white text-opacity-60 lg:text-center">
            We are happy to talk about any interesting project you may bring and
            discuss relevant — or just off-topic — stuff.
          </strong>
        </div>
        <div className="py-6 lg:py-4">
          <div className="max-w-xl mx-auto lg:max-w-7xl">
            <h2 className="sr-only">Title text for screen readers</h2>
            <dl className="text-center">
              <div className="h-full space-y-4">
                <dt>
                  <div className="flex items-center justify-center text-moody">
                    <EnvelopeIcon className="h-8" />
                  </div>
                </dt>
                <dd className="text-xs lg:text-base text-santa">
                  <span> contact@logspace.ai </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form className="mt-8 space-y-6" ref={form} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                <label
                  htmlFor="name"
                  className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm focus:ring-moody"
                  placeholder="Your name"
                />
              </div>
              <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                <label
                  htmlFor="phone"
                  className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm focus:ring-moody"
                  placeholder="Your phone number"
                />
              </div>
              <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                <label
                  htmlFor="email"
                  className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm focus:ring-moody"
                  placeholder="email@shadow.com"
                />
              </div>
            </div>
            <div>
              <div className="relative h-full px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                <label
                  htmlFor="email"
                  className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                >
                  {" "}
                  Your Message{" "}
                </label>
                <textarea
                  className="block w-full h-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                  id="message"
                  name="message"
                  placeholder="Message..."
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="items-center block w-full px-8 py-3 mx-auto text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
