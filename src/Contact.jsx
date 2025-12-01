import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import FadeInSection from "./fadeinsection";

function ConnectSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <FadeInSection direction="up">
      <section id="contact" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block pb-2">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Socials & Info */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-gray-300 text-lg">
              Let’s build something amazing together! Feel free to reach out for collaborations, freelance projects, or just to say hi.
            </p>

            <div className="flex space-x-6 text-gray-300">
              <a
                href="https://github.com/Olatundeawo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/babatunde-awotimilehin-284a25180/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://x.com/bokinsin"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-xl shadow-2xl flex flex-col space-y-6"
          >
            {submitted && (
              <p className="text-green-400 font-medium">Thank you! Your message has been sent.</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </FadeInSection>
  );
}

export default ConnectSection;
