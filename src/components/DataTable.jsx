import React from 'react';


function DataTable({ data, loading }) {
  console.log(data)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No data available. Please submit an email to fetch data.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bluetooth Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bluetooth Connected</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Anomaly</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.action}</td>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.time}</td> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.details.bluetoothAddress}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  row.details.bluetoothConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {row.details.bluetoothConnected ? 'Connected' : 'Disconnected'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  row.anomaly ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {row.anomaly ? 'Yes' : 'No'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;