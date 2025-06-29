import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './components/Layout';
import PublicLayout from './components/PublicLayout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
import FraudDemo from './pages/FraudDemo';
import HowToUse from './pages/HowToUse';
import Login from './pages/Login';
import Landing from './pages/Landing';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ProtectedRoute from './components/ProtectedRoute';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { initializeTheme } from './store/slices/themeSlice';

function AppContent() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicLayout>
              <Landing />
            </PublicLayout>
          } />
          <Route path="/about" element={
            <PublicLayout>
              <About />
            </PublicLayout>
          } />
          <Route path="/features" element={
            <PublicLayout>
              <Features />
            </PublicLayout>
          } />
          <Route path="/pricing" element={
            <PublicLayout>
              <Pricing />
            </PublicLayout>
          } />
          <Route path="/contact" element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          } />
          <Route path="/blog" element={
            <PublicLayout>
              <Blog />
            </PublicLayout>
          } />
          <Route path="/demo/fraud" element={
            <PublicLayout>
              <FraudDemo />
            </PublicLayout>
          } />
          <Route path="/demo/how-to-use" element={
            <PublicLayout>
              <HowToUse />
            </PublicLayout>
          } />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected App Routes */}
          <Route
            path="/app/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/fraud-demo" element={<FraudDemo />} />
                    <Route path="/how-to-use" element={<HowToUse />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;