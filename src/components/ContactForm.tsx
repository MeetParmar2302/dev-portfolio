import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const form = e.currentTarget; // Explicitly store form reference

  try {
    const response = await fetch("https://formsubmit.co/ajax/meet.parmar.2302@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Form submission failed!");

    toast.success("Message sent successfully!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      theme: "dark",
    });

    if (form) form.reset();
  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Failed to send message.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <main id="contact" className="sm:min-w-screen max-w-screen min-h-screen flex flex-col items-center justify-center text-left space-y-8 px-5">
      
      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar theme="dark" />

      {/* Header Section */}
      <section className="flex flex-col items-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center transition-transform duration-300 hover:scale-105">Get in Touch</h1>
        <p className="md:text-xl max-w-[600px] text-center text-blue-200/60">
          I&apos;m always interested in hearing about new projects and opportunities. Drop me a message!
        </p>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="w-full max-w-lg mx-auto p-4 rounded-md shadow-md">
        <form 
          action="https://formsubmit.co/meet.parmar.2302@gmail.com" 
          method="POST" 
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-2">
          <label className="text-gray-300 text-lg font-semibold">Name</label>
          <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-2 rounded-md border bg-blue-400/10 border-blue-400/40" required />
          </div>

          <div className="flex flex-col space-y-2">
          <label className="text-gray-300 text-lg font-semibold">Email</label>
          <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md border bg-blue-400/10 border-blue-400/40" required />
          </div>

          <div className="flex flex-col space-y-2">
          <label className="text-gray-300 text-lg font-semibold">Message</label>
          <textarea name="message" placeholder="Write your message here..." className="w-full min-h-24 px-4 py-2 rounded-md border bg-blue-400/10 border-blue-400/40 resize-y" required />
          </div>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="" />
          <input type="hidden" name="_subject" value="New submission!" />

          <button type="submit" className="w-full py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition duration-300 flex items-center justify-center gap-2" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

    </main>
  );
};

export default ContactForm;