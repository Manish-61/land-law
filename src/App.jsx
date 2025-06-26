// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/layout';
import LandHqWebsite from './pages/homepg';
import LandHqGetStarted from './pages/getstart';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './assets/theme';
import LandLawSearch from './pages/search';
import LandBlog from './pages/blog';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandHqWebsite />} />
            <Route path="search" element={<LandLawSearch />} />
            <Route path="get-started" element={<LandHqGetStarted />} />
            <Route path="blog" element={<LandBlog />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
