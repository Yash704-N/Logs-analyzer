import React, { useState } from 'react';
import { Send } from 'lucide-react';


function EmailForm(onSubmit ) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email.trim());
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Send className="h-4 w-4 mr-2" />
        Submit
      </button>
    </form>
  );
}

export default EmailForm;