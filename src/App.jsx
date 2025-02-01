import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import DataTable from './components/DataTable';
import FeedbackForm from './components/FeedbackForm';
import LoginForm from './components/LoginForm';

function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const handleFetchData = async (token) => {
    setLoading(true);
    try {
      // Replace with your actual API endpoint for fetching data
      const response = await fetch('https://logs-analyzer-backend.onrender.com/api/logs/getlogs', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return <LoginForm onLoginSuccess={(newToken) => {
      setToken(newToken);
      handleFetchData(newToken);
    }} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Data Dashboard</span>
            </div>
            <button
              onClick={() => setToken(null)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Data Table</h2>
            <DataTable data={tableData.logs} loading={loading} />
          </section>

          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Feedback Form</h2>
            <FeedbackForm token={token} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;