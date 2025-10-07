import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import FadeInSection from "./fadeinsection";

function ConnectSection() {
  return (
    <FadeInSection direction="down">
    <section id="contact" className="max-w-3xl mx-auto py-20 px-6 text-center">
      <div className="bg-black border border-green-400 rounded-lg p-6 text-left">
        <p className="text-green-400">visitor@portfolio:~$ send_message</p>
        <p className="mt-2">Let’s build something amazing together!</p>
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://github.com/Olatundeawo"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/babatunde-awotimilehin-284a25180/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="https://x.com/bokinsin" target="_blank" rel="noreferrer">
            <Twitter className="w-6 h-6 hover:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default ConnectSection;
