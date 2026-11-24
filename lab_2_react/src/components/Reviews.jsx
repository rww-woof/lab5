import { useState, useEffect } from 'react';

function Reviews() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка мережі');
        }
        return response.json();
      })
      .then(data => {
        setReviews(data);
      })
      .catch(error => console.error('Помилка отримання даних:', error));
  }, []);

  return (
    <section className="px-8 md:px-12 py-6">
      <h2 className="text-2xl font-bold mb-4">Відгуки попередніх роботодавців</h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <div
            key={review.id}
            className="bg-white/40 p-4 rounded-lg shadow-sm border border-[#4584d6]/30"
          >
            <h3 className="font-bold text-lg text-[#5d1885]">{review.name}</h3>
            <p className="text-sm text-gray-700 font-semibold mb-2">{review.email}</p>
            <p className="italic text-gray-800">"{review.body}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;