function ContactForm() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-[20px] ring-1 ring-[#EDEDED] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)] py-20 px-12.5">
      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-6">
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="input-field"
          />
        </div>

        {/* Inquiry Type */}
        <input
          type="text"
          placeholder="Inquiry Type"
          className="input-field w-full"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          rows="6"
          className="input-field w-full resize-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-[#3F6FB4] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#345fa0] transition"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
