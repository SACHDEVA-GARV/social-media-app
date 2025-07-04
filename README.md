# Social Media App

A modern, responsive social media feed built with **React**, **React Router**, **Bootstrap**, and **React Icons**. This project demonstrates core React concepts, state management with Context and Reducer, routing, API integration, and clean UI/UX—all suitable for showcasing on your resume.

---

##  Live Demo

[Live Demo Link Here](#) 

---

##  Technologies & Tools Used

- **React**: Component-based UI library for building interactive interfaces.
- **React Router**: For client-side routing and navigation.
- **Bootstrap**: For responsive and modern UI styling.
- **React Icons**: For scalable vector icons (e.g., delete/trash icon).
- **Vite**: Fast development server and build tool.
- **DummyJSON API**: Used for fetching initial posts.
- **ESLint**: For code linting and quality.
- **Context API + useReducer**: For global state management of posts.

---

##  Features & Concepts Demonstrated

- **Post Feed**: View a list of posts fetched from a dummy API.
- **Create Post**: Add a new post using a form (stored locally in app state).
- **Delete Post**: Remove any post instantly from the feed.
- **Routing**: Navigate between Home and Create Post using clean URLs.
- **Responsive Design**: Uses Bootstrap’s grid and utility classes for a layout that adapts to desktop, tablet, and mobile screens.
- **UI Feedback**: Loading spinner, welcome message, and active navigation highlighting.
- **Modern UI**: Custom themed navbar, sidebar, and footer.
- **State Management**: Uses React Context and Reducer for predictable state updates.
- **API Integration**: Fetches initial posts from DummyJSON API.
- **Iconography**: Uses React Icons for intuitive actions.

---

##  How It Works

1. **Home Page (`/`)**  
   - Displays a list of posts.
   - Posts are fetched from the DummyJSON API on first load.
   - Any new post you create appears at the top of the feed.

2. **Create Post (`/create`)**  
   - Fill out the form to add a new post (user ID, title, body, reactions, tags).
   - On submission, the post is added to the top of the feed and you are redirected to Home.

3. **Delete Post**  
   - Click the trash icon on any post to remove it from the feed instantly.

4. **Navigation**  
   - Use the sidebar or navbar to switch between Home and Create Post.
   - Active links are highlighted for better UX.

---

##  How to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sachdeva-garv/social-media.git
   cd social-media
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open in your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

##  Notes

- **Posts are not persisted:**  
  New posts are stored in the app state only. Refreshing the page will reload the original posts from the DummyJSON API and remove your new posts (since the API is read-only).
- **API Used:**  
  [DummyJSON Posts API](https://dummyjson.com/docs/posts)
- **Styling:**  
  Custom theme colors are used for a modern social media look.

---

##  For Users

- **To view posts:**  
  Just open the app and browse the feed.
- **To create a post:**  
  Go to "Create Post", fill in the form, and submit.
- **To delete a post:**  
  Click the trash icon on any post.

---

##  For Developers

- **State Management:**  
  All post data is managed globally using React Context and useReducer.
- **Routing:**  
  React Router is used for navigation.
- **UI Components:**  
  All UI is built with Bootstrap and custom CSS for a clean, responsive look.
- **Icons:**  
  React Icons are used for action buttons.

---

##  License

This project is for educational and portfolio purposes.

---

**Showcase your React, routing, state management, and UI skills with this project!**
