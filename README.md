
# Budget Manager App

Budgety App built with with React.js and Redux Toolkit. Redux Toolkit is used to efficiently manage the application's state, ensuring a single source of truth for the financial data. This enables smooth data flow and real-time updates across the app. Recharts is used for creating interactive charts to visualize the financial data. The financial data is organized in rows and columns with Material UI Pagination. The app also utilizes LocalStorage, a web API that allows data to be stored locally on the user's device



# Live demo

http://budgety.vercel.app/

## Features

- **State Management with Redux Toolkit:** Redux Toolkit efficiently manages the application's state, ensuring a single source of truth for all financial data. This enables smooth data flow and real-time updates across the app.
- **Data Table:** Financial data is displayed in a tabular format. The data table offers a search function for quick access to specific information.
- **Pagination:** The app divides tabular format data into manageable pages with pagination, reducing clutter and improving overall performance.
- **Data Visualization:** A clear overview of the financial data through an interactive chart. Visual representations of the income, expenses, and budget progress will give valuable insights.
- **Responsive Design:** The application is built with responsiveness in mind, ensuring that it's accessible and managable on various devices, including desktops, tablets, and smartphones.
- **framer-motion:** The app incorporates framer-motion to add engaging and smooth animations to different elements, enhancing the overall user experience.
- **Local storage:** The application utilizes Local Storage to persist the state data even when the user closes the browser or refreshes the page. This ensures that the user's financial data is retained across sessions.

## Usage

- **Adding Transactions:** Use the expense or income component to add your expense or income. Add the name, specify the amount, select the date and select the category.

- **Removing Transactions:** Navigate to the table component to delete transactions with the trash button. 

- **Data Table and Pagination:** Utilize the DataTable component with built-in pagination to view and manage your financial data efficiently.

- **Data Visualization:** Gain insights into your spending patterns and budget progress by viewing the interactive income/expense chart on the main dashboard.
  
- **Demo and Reset:** Use the demo version to get a overview of the app with data. Remove all transactions with the reset button.
