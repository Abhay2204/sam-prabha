import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, Plus, Edit2, Trash2, ExternalLink, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabaseClient';

interface UserDocument {
  id: string;
  user_id: string;
  user_email: string;
  document_name: string;
  document_url: string;
  status: 'pending' | 'in_progress' | 'completed';
  created_at: string;
  updated_at: string;
}

export const AdminDashboard: React.FC = () => {
  const { user, isAdmin, loading } = useAuth();
  const [documents, setDocuments] = useState<UserDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newDoc, setNewDoc] = useState({
    user_email: '',
    document_name: '',
    document_url: '',
    status: 'pending' as const,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/dashboard');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchDocuments();
    }
  }, [isAdmin]);

  const fetchDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('user_documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddDocument = async () => {
    try {
      // First, get user ID from email
      const { data: userData, error: userError } = await supabase
        .from('auth.users')
        .select('id')
        .eq('email', newDoc.user_email)
        .single();

      const { error } = await supabase.from('user_documents').insert([
        {
          user_id: userData?.id || newDoc.user_email,
          user_email: newDoc.user_email,
          document_name: newDoc.document_name,
          document_url: newDoc.document_url,
          status: newDoc.status,
        },
      ]);

      if (error) throw error;

      setShowAddModal(false);
      setNewDoc({
        user_email: '',
        document_name: '',
        document_url: '',
        status: 'pending',
      });
      fetchDocuments();
    } catch (error) {
      console.error('Error adding document:', error);
      alert('Failed to add document');
    }
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('user_documents')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      fetchDocuments();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this document?')) return;

    try {
      const { error } = await supabase.from('user_documents').delete().eq('id', id);

      if (error) throw error;
      fetchDocuments();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.user_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.document_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-scientific-emerald"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-4xl font-bold text-scientific-textDark mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage user documents and progress</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-scientific-emerald text-white rounded-lg hover:bg-scientific-emeraldDark transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Document
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-8 h-8 text-scientific-emerald" />
                <h3 className="font-semibold text-gray-700">Total Documents</h3>
              </div>
              <p className="text-3xl font-bold text-scientific-textDark">{documents.length}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">P</span>
                </div>
                <h3 className="font-semibold text-gray-700">Pending</h3>
              </div>
              <p className="text-3xl font-bold text-scientific-textDark">
                {documents.filter((d) => d.status === 'pending').length}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">I</span>
                </div>
                <h3 className="font-semibold text-gray-700">In Progress</h3>
              </div>
              <p className="text-3xl font-bold text-scientific-textDark">
                {documents.filter((d) => d.status === 'in_progress').length}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">C</span>
                </div>
                <h3 className="font-semibold text-gray-700">Completed</h3>
              </div>
              <p className="text-3xl font-bold text-scientific-textDark">
                {documents.filter((d) => d.status === 'completed').length}
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by email or document name..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scientific-emerald focus:border-transparent"
              />
            </div>
          </div>

          {/* Documents Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">User</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Document</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Created</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredDocuments.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{doc.user_email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{doc.document_name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={doc.status}
                          onChange={(e) => handleUpdateStatus(doc.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border-0 ${
                            doc.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : doc.status === 'in_progress'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {new Date(doc.created_at).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <a
                            href={doc.document_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-scientific-emerald hover:bg-scientific-emerald/10 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => handleDelete(doc.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No documents found</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Add Document Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <h2 className="font-serif text-2xl font-bold text-scientific-textDark mb-6">
                Add New Document
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User Email
                  </label>
                  <input
                    type="email"
                    value={newDoc.user_email}
                    onChange={(e) => setNewDoc({ ...newDoc, user_email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scientific-emerald focus:border-transparent"
                    placeholder="user@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Document Name
                  </label>
                  <input
                    type="text"
                    value={newDoc.document_name}
                    onChange={(e) => setNewDoc({ ...newDoc, document_name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scientific-emerald focus:border-transparent"
                    placeholder="Research Paper Analysis"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Document URL
                  </label>
                  <input
                    type="url"
                    value={newDoc.document_url}
                    onChange={(e) => setNewDoc({ ...newDoc, document_url: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scientific-emerald focus:border-transparent"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={newDoc.status}
                    onChange={(e) =>
                      setNewDoc({ ...newDoc, status: e.target.value as any })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scientific-emerald focus:border-transparent"
                  >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleAddDocument}
                  className="flex-1 px-6 py-3 bg-scientific-emerald text-white rounded-lg hover:bg-scientific-emeraldDark transition-colors"
                >
                  Add Document
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
