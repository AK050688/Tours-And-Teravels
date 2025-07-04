import React, { useState, useRef } from 'react';
import { 
  FiUser, 
  FiEdit3, 
  FiSave, 
  FiX, 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiLock, 
  FiUpload,
  FiFileText,
  FiCamera,
  FiCheck,
  FiEye,
  FiEyeOff
} from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { FaBuilding } from "react-icons/fa";


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const kycInputRef = useRef(null);

  // User profile state
  const [profileData, setProfileData] = useState({
    logo: null,
    logoPreview: null,
    userName: 'Dinesh Sharma',
    phone: '+91 8747483838',
    email: 'Dinesh@gmail.com',
    companyName: 'Travel Solutions Pvt Ltd',
    city: 'Mumbai',
    password: 'password123',
    kycDocument: null,
    kycDocumentName: 'Aadhar_Card.pdf',
    kycStatus: 'verified' // verified, pending, rejected
  });

  const [editData, setEditData] = useState({ ...profileData });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle logo upload
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditData(prev => ({
          ...prev,
          logo: file,
          logoPreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle KYC document upload
  const handleKycUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEditData(prev => ({
        ...prev,
        kycDocument: file,
        kycDocumentName: file.name,
        kycStatus: 'pending'
      }));
    }
  };

  // Save profile changes
  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setProfileData({ ...editData });
      setIsEditing(false);
      
      // Show success message (you can implement toast notification here)
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditData({ ...profileData });
    setIsEditing(false);
  };

  // Get KYC status badge
  const getKycStatusBadge = (status) => {
    switch (status) {
      case 'verified':
        return <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
          <FiCheck className="text-xs" /> Verified
        </span>;
      case 'pending':
        return <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
          <FiFileText className="text-xs" /> Pending
        </span>;
      case 'rejected':
        return <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
          <FiX className="text-xs" /> Rejected
        </span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
          <FiFileText className="text-xs" /> Not Uploaded
        </span>;
    }
  };

  const currentData = isEditing ? editData : profileData;

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <FiUser className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">My Profile</h1>
              <p className="text-gray-600">Manage your account information and settings</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FiEdit3 className="text-sm" />
                Edit Profile
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCancelEdit}
                  className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FiX className="text-sm" />
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  disabled={loading}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <FiSave className="text-sm" />
                  )}
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Profile Overview Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-6">
            {/* Profile Logo/Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                {currentData.logoPreview || currentData.logo ? (
                  <img 
                    src={currentData.logoPreview || currentData.logo} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-2xl font-bold">
                    {currentData.userName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              
              {isEditing && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
                >
                  <FiCamera className="text-sm" />
                </button>
              )}
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{currentData.userName}</h2>
              <p className="text-gray-600 mb-2">{currentData.companyName}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FiMapPin className="text-xs" />
                  {currentData.city}
                </span>
                <span className="flex items-center gap-1">
                  <FiMail className="text-xs" />
                  {currentData.email}
                </span>
              </div>
            </div>

            {/* KYC Status */}
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">KYC Status</p>
              {getKycStatusBadge(currentData.kycStatus)}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-500 p-2 rounded-lg">
              <AiOutlineUser className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Profile Details</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiUser className="inline mr-1" /> User Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={currentData.userName}
                  onChange={(e) => handleInputChange('userName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {currentData.userName}
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiPhone className="inline mr-1" /> Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={currentData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter your phone number"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {currentData.phone}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiMail className="inline mr-1" /> Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={currentData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter your email address"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {currentData.email}
                </div>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBuilding  className="inline mr-1" /> Company Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={currentData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter your company name"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {currentData.companyName}
                </div>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiMapPin className="inline mr-1" /> City
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={currentData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter your city"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  {currentData.city}
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiLock className="inline mr-1" /> Password
              </label>
              {isEditing ? (
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={currentData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                  ••••••••••
                </div>
              )}
            </div>
          </div>

          {/* KYC Document Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <BsShieldCheck className="text-white text-xl" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">KYC Document</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FiFileText className="inline mr-1" /> Document Upload
                </label>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => kycInputRef.current?.click()}
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <FiUpload />
                      Upload KYC Document
                    </button>
                    <input
                      ref={kycInputRef}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleKycUpload}
                      className="hidden"
                    />
                    {currentData.kycDocumentName && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                        <FiFileText />
                        {currentData.kycDocumentName}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {currentData.kycDocumentName ? (
                      <div className="flex items-center gap-2 text-gray-800 font-medium">
                        <FiFileText />
                        {currentData.kycDocumentName}
                      </div>
                    ) : (
                      <span className="text-gray-500">No document uploaded</span>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Status
                </label>
                <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                  {getKycStatusBadge(currentData.kycStatus)}
                  {currentData.kycStatus === 'verified' && (
                    <span className="text-xs text-gray-500">Verified on 12/06/2025</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;