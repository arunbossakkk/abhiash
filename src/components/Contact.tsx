"use client";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");


    try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      } else {
        setStatus(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error");
    }
  };

  return (
    <section className="contact-section py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
          We'd love to hear from you! Fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition-colors"
          >
            Send Message
          </button>
          {status && <p className="text-center text-gray-700 dark:text-gray-300 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
