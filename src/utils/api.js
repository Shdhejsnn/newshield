// API configuration utility
export const getBackendUrl = () => {
  // Temporary hardcoded URL for testing
  return 'https://newshield.onrender.com';
  // return process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
};

export const apiCall = async (endpoint, data, method = 'POST') => {
  const backendUrl = getBackendUrl();
  const url = `${backendUrl}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    });
    
    return await response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
}; 