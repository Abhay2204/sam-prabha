-- Create user_documents table
CREATE TABLE IF NOT EXISTS user_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  document_name TEXT NOT NULL,
  document_url TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'in_progress', 'completed')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_user_documents_user_email ON user_documents(user_email);
CREATE INDEX IF NOT EXISTS idx_user_documents_user_id ON user_documents(user_id);
CREATE INDEX IF NOT EXISTS idx_user_documents_status ON user_documents(status);

-- Enable Row Level Security
ALTER TABLE user_documents ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own documents
CREATE POLICY "Users can view own documents"
  ON user_documents
  FOR SELECT
  USING (auth.email() = user_email);

-- Policy: Admins can view all documents
CREATE POLICY "Admins can view all documents"
  ON user_documents
  FOR SELECT
  USING (
    auth.email() IN ('admin@samprabha.com', 'abhaymallick2002@gmail.com')
  );

-- Policy: Admins can insert documents
CREATE POLICY "Admins can insert documents"
  ON user_documents
  FOR INSERT
  WITH CHECK (
    auth.email() IN ('admin@samprabha.com', 'abhaymallick2002@gmail.com')
  );

-- Policy: Admins can update documents
CREATE POLICY "Admins can update documents"
  ON user_documents
  FOR UPDATE
  USING (
    auth.email() IN ('admin@samprabha.com', 'abhaymallick2002@gmail.com')
  );

-- Policy: Admins can delete documents
CREATE POLICY "Admins can delete documents"
  ON user_documents
  FOR DELETE
  USING (
    auth.email() IN ('admin@samprabha.com', 'abhaymallick2002@gmail.com')
  );

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function
CREATE TRIGGER update_user_documents_updated_at
  BEFORE UPDATE ON user_documents
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
