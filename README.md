# User Search Application

This is a simple React application that allows you to search and filter a list of users.

---

## Features

* **User List:** Displays a predefined list of user names.
* **Search Functionality:** Filters the user list in real-time based on your input in the search bar.
* **Case-Insensitive Search:** The search is not case-sensitive, so "ram" will match "Ram".
* **No Results Message:** Informs you when no users match your search term.
* **Optimized Filtering:** Uses `useMemo` to prevent unnecessary re-renders of the filtered user list, improving performance.

---

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS (Implied):** The provided CSS classes (`bg-gray-900`, `text-white`, `flex`, `p-6`, etc.) suggest the use of Tailwind CSS for styling.

---

## How to Run

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

    This will open the application in your browser, usually at `http://localhost:3000`.

---

## Code Explanation

* **`users` Array:** A static array of objects representing the users with `id` and `name` properties.
* **`useState` Hook:**
    * `searchTerm`: Manages the current value of the search input field.
* **`useMemo` Hook:**
    * `filterUsers`: This memoized function filters the `users` array based on the `searchTerm`. The `console.log("Filtering....")` inside `filterUsers` will only be triggered when the `searchTerm` changes, demonstrating the optimization provided by `useMemo`.
* **JSX Structure:**
    * An `<h1>` for the title.
    * An `<input>` field for the search term, with its `value` bound to `searchTerm` and `onChange` updating `searchTerm`.
    * A `<ul>` to display the filtered user list.
    * Conditional rendering checks if `filterUsers` has any results; if not, it displays "No users found".

---

## Customization

* You can easily modify the `users` array to include your own data.
* Feel free to update the Tailwind CSS classes to change the styling of the application.
