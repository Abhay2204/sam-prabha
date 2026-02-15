import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, Edit2, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const UserProfile: React.FC = () => {
  const { user, updateProfile, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [fullName, setFullName] = useState(user?.user_metadata?.full_name || '');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError(null);
      await updateProfile({ full_name: fullName });
      setSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFullName(user?.user_metadata?.full_name || '');
    setIsEditing(false);
    setError(null);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-serif text-4xl font-bold text-scientific-textDark mb-8">
            My Profile
          </h1>

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-600">Profile updated successfully!</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-6">
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-scientific-emerald"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-scientific-emerald/10 flex items-center justify-center">
                    <User className="w-12 h-12 text-scientific-emerald" />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-scientific-textDark mb-1">
                    {user.user_metadata?.full_name || 'User'}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-scientific-emerald text-white rounded-lg hover:bg-scientific-emeraldDark transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scientific-emerald focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{user.user_metadata?.full_name || 'Not set'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="flex items-center gap-2 text-gray-900">
                  <Mail className="w-5 h-5 text-scientific-emerald" />
                  {user.email}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Member Since
                </label>
                <div className="flex items-center gap-2 text-gray-900">
                  <Calendar className="w-5 h-5 text-scientific-gold" />
                  {new Date(user.created_at || '').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User ID
                </label>
                <p className="text-gray-600 font-mono text-sm">{user.id}</p>
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-scientific-emerald text-white rounded-lg hover:bg-scientific-emeraldDark transition-colors disabled:opacity-50"
                >
                  {isSaving ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Changes
                    </>
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
