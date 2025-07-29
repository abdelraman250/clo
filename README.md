# React clothes App

> A front-end web application built using React.js that retrieves and displays products from the Fake Store API (https://fakestoreapi.com/). The application allows users to browse, search, filter, and add products to a shopping cart, while storing the cart state in the browser's local storage.

## 📸 Screenshots


* **Home Page (Products Showcase):**


* **Shopping Cart:**


* **Search and Category Filter:**



## Main features
* **Product Display:** Fetch and display a list of all products from the Fake Store API.
* **Product Classification:** The ability to filter products by different categories (men's clothing, women's clothing, jewelry, electronics).
* **Product Search:** A dynamic search field allows you to search for products by name or description.
* **Shopping Cart:**
* Add products to the shopping cart.
* Save the contents of the shopping cart to LocalStorage to ensure that products remain even after a page refresh or browser closure.
* Display products added to the cart with the ability to delete them.
* **Loading Screens:** Display a "loading" message while fetching data from the API.
* **State Management:** Use the React Context API to manage the application's shared state across components (such as product data, shopping cart, and loading status).
* **Minimalist Design:** A clean and clear UI focused on product display.

## Technologies used

* **React.js:** A JavaScript library for building user interfaces.
* **HTML/JSX:** For building the structure of components.
* **CSS:** For styling and layout.
* **JavaScript (ES6+):** For programmatic logic and interaction.
* **Fetch API:** For fetching data from external APIs.
* **React Hooks:** (`useState`, `useEffect`, `useContext`) for managing state and the lifecycle of components.
* **Context API:** For managing the overall state of the application and exchanging data between components.
* **LocalStorage:** For persistent storage of shopping cart data in the browser.
* **Fake Store API:** As a source of demo data for products.

## 🚀 How to Run Locally

To get a copy of the project and run it on your machine:

1. **Make sure Node.js and npm/yarn are installed:**
* You can download them from: [https://nodejs.org/](https://nodejs.org/)

2. **Clone the repository:**
```bash
git clone [https://github.com/abdelraman250/clothes-app.git](https://github.com/abdelraman250/clothes-app.git)


3. **Install dependencies:**
```bash
npm install
# or
yarn install
```

4. **Run the application:**
```bash
npm run dev
# or
yarn run dev
```
The application will run in development mode. Open your browser at the address: `http://localhost:3000`.


## Learning from this project
- While building this project, I applied and strengthened my understanding of the following concepts in React:

- Complex state management with useReducer: Understanding how useReducer can be a powerful alternative to useState in more complex state management scenarios.

- Using the Context API: How to pass data at the application level to avoid the problem of "prop drilling."

- Local Storage: Saving and retrieving user data to ensure task persistence across different browser sessions.

- Responsive design with Bootstrap: Integrating the Bootstrap library to create a responsive and beautiful user interface.

- DOM control (limited): Although React encourages avoiding direct manipulation of the DOM, some techniques were used to control the display of completed and incomplete task elements for filtering purposes, while adhering to React principles as closely as possible.

## contact with me
- email: abdobadawy2372000@gmail.com