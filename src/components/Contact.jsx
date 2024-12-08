import toast from "react-hot-toast";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target; // Reference to the form
    const formData = new FormData(form);

    formData.append("access_key", "92b9ed97-bed6-4c52-8afc-f6b54f4a1005");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();
      if (data.success) {
        console.log("Success", data);
        toast.success("Message sent successfully.");
        form.reset();
      } else {
        console.log("Error", data);
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Request Failed", error);
      toast.error("Error");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-rose py-20">
      <form
        onSubmit={onSubmit}
        className="w-full bg-white max-w-2xl px-6 py-5 rounded-lg shadow-lg m-6"
      >
        <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-semibold">
          CONTACT
        </h2>
        <div className="mt-5">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full h-12 bg-transparent border-2 border-solid border-gray-300 rounded-md p-4 mt-2 text-base text-slate-900"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mt-5">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="w-full h-12 bg-transparent border-2 border-solid border-gray-300 rounded-md p-4 mt-2 text-base text-slate-900"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mt-5">
          <label>Your Message</label>
          <textarea
            name="message"
            className="w-full bg-transparent border-2 border-solid border-gray-300 rounded-md p-4 mt-2 text-base text-slate-900 h-52 resize-none"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full h-14 rounded-md bg-pink shadow-lg cursor-pointer text-base font-semibold text-slate-50 mt-6"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
