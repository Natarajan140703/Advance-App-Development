

import React from 'react';

const EventRegistrationTable = () => {
  // Dummy data for event registrations
  const registrations = [
    { id: 1, name: 'John Doe', email: 'john@example.com', ticketType: 'VIP' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', ticketType: 'Standard' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', ticketType: 'VIP' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', ticketType: 'Standard' },
  ];

  return (
    <div className="event-registration-table">
      <h2>Event Registration Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Ticket Type</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(registration => (
            <tr key={registration.id}>
              <td>{registration.id}</td>
              <td>{registration.name}</td>
              <td>{registration.email}</td>
              <td>{registration.ticketType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventRegistrationTable;
