import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="content">
            <Header />
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/create" element={<CreatePost />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </PostListProvider>
  );
}

export default App;