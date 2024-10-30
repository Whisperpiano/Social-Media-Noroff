import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import AuthLayout from "./components/layouts/AuthLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AppLayout from "./components/layouts/AppLayout";
import ProfileEdit from "./pages/ProfileEdit";
import ExplorePosts from "./components/explore/ExplorePosts";
import ExploreHashtags from "./components/explore/ExploreHashtags";
import ExplorePeople from "./components/explore/ExplorePeople";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        {/* Auth */}
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
          {/* Login */}
          <Route path="login" element={<Login />} />
          {/* Register */}
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          {/* Home */}
          <Route path="home" element={<Home />} />
          {/* Explore */}
          <Route path="explore" element={<Explore />}>
            <Route index element={<Navigate to="posts" replace />} />
            <Route path="posts" element={<ExplorePosts />} />
            <Route path="hashtags" element={<ExploreHashtags />} />
            <Route path="people" element={<ExplorePeople />} />
          </Route>
          {/* Search */}
          <Route path="search" element={<Search />}>
            <Route index element={<Navigate to="all" replace />} />
            <Route path="all" element={<p>all</p>} />
            <Route path="posts" element={<p>posts</p>} />
            <Route path="profiles" element={<p>people</p>} />
            <Route path="hashtags" element={<p>hashtags</p>} />
          </Route>
          {/* Profile */}
          <Route path="profile" element={<Profile />} />
          <Route path="profile/edit" element={<ProfileEdit />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
