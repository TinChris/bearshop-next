/**
 * API Configuration
 * Centralized API endpoint management for Next.js
 */

// Base API path
const API_BASE = '/api'

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  contact: `${API_BASE}/contact`,
  newsletter: `${API_BASE}/newsletter`,
}

/**
 * API Request Helper
 * Centralized fetch wrapper with error handling
 *
 * @param {string} endpoint - The endpoint URL
 * @param {Object} data - The data to send
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>} Response data
 */
export const apiRequest = async (endpoint, data, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    })

    // Parse JSON response
    const result = await response.json()

    // Check if request was successful
    if (!response.ok) {
      throw new Error(result.message || 'Request failed')
    }

    return result
  } catch (error) {
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection.')
    }
    throw error
  }
}