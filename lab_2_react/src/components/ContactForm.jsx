import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-[#5d1885]">Зворотний зв'язок</h2>

        <form action="https://formspree.io/f/mrpqzeaz" method="POST" className="space-y-4">

          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Ім'я</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#4584d6]" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#4584d6]" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Номер телефону</label>
            <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#4584d6]" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Повідомлення</label>
            <textarea id="message" name="message" rows="4" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#4584d6]"></textarea>
          </div>

          <button type="submit" className="w-full bg-[#4584d6] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Надіслати
          </button>

        </form>
      </div>
    </div>
  );
}

export default ContactForm;