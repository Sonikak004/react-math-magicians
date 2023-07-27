import React, { useState, useEffect } from 'react';
import '../styles/quote.css';

const QuoteComponent = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchQuote = async () => {
      try {
        setLoading(true);
        const category = 'happiness';
        const apiKey = 'ru2MToA9IKd6A56z0JKKOQ==TWthrIzHhMcBxrOu';
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        setQuote(data[0]?.quote); // Assuming the API returns an array of quotes, take the first one
        setLoading(false);
      } catch (error) {
        setError('Error fetching the quote');
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div className="quote font">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div className="quote font"><p>{quote}</p></div>;
};

export default QuoteComponent;
