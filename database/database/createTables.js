const db = require('./db')

const createAppointmentsTable = async () => {
  try {
      // SQL script to create the table
      const createTableQuery = `
          CREATE TABLE IF NOT EXISTS book_appts (
              AppointmentID INT AUTO_INCREMENT PRIMARY KEY, 
              AppointmentTicketNo VARCHAR(255) NOT NULL,
              SearchEvent VARCHAR(20) NOT NULL,
              Place VARCHAR(20) NOT NULL,
              AppointmentTime VARCHAR(45) NOT NULL,
              AppointmentDate VARCHAR(45) NOT NULL,
              PhoneNo INT
              
          );
      `;

      // Execute the SQL script
      await db.query(createTableQuery);

      console.log('book_appts table created or already exists.');
  } catch (error) {
      console.error('Error creating book_appts table:', error);

  }
}
module.exports.createAppointmentsTable = createAppointmentsTable


