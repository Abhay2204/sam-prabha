import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, NavLink } from 'react-router-dom';
import { LogOut, User, Mail, Calendar, FileText, ExternalLink, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabaseClient';

interface UserDocument {
  id: string;
  document_name: string;
  document_url: string;
  status: 'pending' | 'in_progress' | 'completed';
  created_at: string;
  updated_at: string;
}

export const Dashboard: React.FC = () => {
  const { user, loading, signOut, isAdmin } = useAuth();
  const [documents, setDocuments] = useState<UserDocument[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchUserDocuments();
    }
  }, [user]);

  const fetchUserDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('user_documents')
        .select('*')
        .eq('user_email', user?.email)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoadingDocs(false);
    }
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'in_progress':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-yellow-100 text-yellow-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in_progress':
        return 'In Progress';
      default:
        return 'Pending';
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-scientific-textDark mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600 text-lg">
                {user.user_metadata?.full_name || user.email}
              </p>
            </div>
            <div className="flex gap-3">
              {isAdmin && (
                <NavLink
                  to="/admin"
                  className="flex items-center gap-2 px-6 py-3 bg-scientific-gold text-white rounded-lg font-medium hover:bg-scientific-goldDim transition-colors"
                >
                  <Shield className="w-5 h-5" />
                  Admin Panel
                </NavLink>
              )}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>

          {/* User Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-scientific-textDark">
                Your Profile
              </h2>
              <NavLink
                to="/profile"
                className="text-scientific-emerald hover:text-scientific-emeraldDark font-medium"
              >
                Edit Profile →
              </NavLink>
            </div>

            <div className="flex items-start gap-6">
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

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-scientific-emerald" />
                  <span>{user.email}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-scientific-gold" />
                  <span>
                    Joined: {new Date(user.created_at || '').toLocaleDateString()}
                  </span>
                </div>

                {user.app_metadata?.provider && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Signed in with:</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                      {user.app_metadata.provider === 'google' ? 'Google' : 'Email'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Documents Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-scientific-textDark">
                My Documents
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <FileText className="w-5 h-5" />
                <span className="font-medium">{documents.length} Documents</span>
              </div>
            </div>

            {loadingDocs ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-scientific-emerald mx-auto"></div>
              </div>
            ) : documents.length > 0 ? (
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-scientific-emerald/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-scientific-emerald/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-scientific-emerald" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {doc.document_name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              doc.status
                            )}`}
                          >
                            {getStatusText(doc.status)}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(doc.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={doc.document_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-scientific-emerald hover:bg-scientific-emerald/10 rounded-lg transition-colors"
                    >
                      <span className="font-medium">View</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">No documents yet</p>
                <p className="text-sm text-gray-400">
                  Your documents will appear here once they're added by our team
                </p>
              </div>
            )}
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
        </motion.div>
      </div>
    </div>
  );
};
