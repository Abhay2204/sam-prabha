import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, NavLink } from 'react-router-dom';
import { LogOut, User, Mail, Calendar, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Dashboard: React.FC = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-scientific-emerald"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-scientific-textDark mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600 text-lg">
                You're successfully logged in to Samprabha Scientific Services
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </motion.div>

        {/* Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-scientific-emerald to-scientific-emeraldDark rounded-2xl p-8 md:p-12 text-white mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-1">Login Successful!</h2>
              <p className="text-white/90">Your account is now active</p>
            </div>
          </div>
          <p className="text-white/80 text-lg">
            You now have access to all our premium scientific services. Explore our offerings and get started with your research journey.
          </p>
        </motion.div>

        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
        >
          <h2 className="font-serif text-2xl font-bold text-scientific-textDark mb-6">
            Your Profile
          </h2>
          
          <div className="flex items-start gap-6 mb-8">
            {user.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-scientific-emerald"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-scientific-emerald/10 flex items-center justify-center">
                <User className="w-10 h-10 text-scientific-emerald" />
              </div>
            )}
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-scientific-textDark mb-4">
                {user.user_metadata?.full_name || user.email}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-scientific-emerald" />
                  <span>{user.email}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <User className="w-5 h-5 text-scientific-gold" />
                  <span>User ID: {user.id.slice(0, 8)}...</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-scientific-teal" />
                  <span>Joined: {new Date(user.created_at || '').toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-serif text-lg font-bold text-scientific-textDark mb-3">
              Authentication Provider
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-scientific-offWhite rounded-lg border border-gray-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">Google</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <NavLink
            to="/services"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-scientific-emerald/40 transition-all"
          >
            <h3 className="font-serif text-xl font-bold text-scientific-textDark mb-2">
              Academic Services
            </h3>
            <p className="text-gray-600 text-sm">
              Explore our comprehensive research support services
            </p>
          </NavLink>

          <NavLink
            to="/analytical-testing"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-scientific-emerald/40 transition-all"
          >
            <h3 className="font-serif text-xl font-bold text-scientific-textDark mb-2">
              Analytical Testing
            </h3>
            <p className="text-gray-600 text-sm">
              Access state-of-the-art analytical instrumentation
            </p>
          </NavLink>

          <NavLink
            to="/contact"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-scientific-emerald/40 transition-all"
          >
            <h3 className="font-serif text-xl font-bold text-scientific-textDark mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-sm">
              Contact us for personalized assistance
            </p>
          </NavLink>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-scientific-gold/10 border border-scientific-gold/30 rounded-xl p-6 text-center"
        >
          <p className="text-scientific-textDark">
            <span className="font-bold">More features coming soon!</span> We're working on adding project management, 
            document uploads, and real-time collaboration tools to enhance your experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
