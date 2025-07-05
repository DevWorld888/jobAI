"use client";
// This file is a React component for a job posting wizard with multiple steps.
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Briefcase, MapPin, DollarSign, Building, Upload, FileText } from 'lucide-react';

export default function Page ()  {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    title: '',
    description: '',
    company: 'Your Company', // Default company name
    
    // Step 2: Location and Type
    location: '',
    type: '',
    
    // Step 3: Compensation and Logo
    salary: '',
    logo: null,
    
    // Step 4: Confirmation
    acceptTerms: false,
    makePublic: true
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const totalSteps = 4;

  const steps = [
    {
      id: 1,
      title: 'Basic Information',
      icon: FileText,
      fields: ['title', 'description','company'],
      description: 'Job title,description and Company name'
    },
    {
      id: 2,
      title: 'Location & Type',
      icon: MapPin,
      fields: ['location', 'type'],
      description: 'Where and how the job will be performed'
    },
    {
      id: 3,
      title: 'Compensation',
      icon: DollarSign,
      fields: ['salary'],
      description: 'Salary and benefits'
    },
    {
      id: 4,
      title: 'Review',
      icon: Building,
      fields: ['acceptTerms'],
      description: 'Confirm and publish'
    }
  ];

  const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance',
    'Remote',
    'Hybrid',
    'On-site'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
      const reader = new FileReader();
      reader.onload = (e) => setLogoPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const validateStep = (step) => {
    const stepFields = steps[step - 1].fields;
    return stepFields.every(field => {
      if (field === 'acceptTerms') return formData[field];
      return formData[field] && formData[field].toString().trim() !== '';
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps && validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      alert('Job offer published successfully!');
      console.log('Job offer data:', formData);
    }
  };

  const renderProgressBar = () => (
  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-center w-full max-w-3xl mx-auto">
    {steps.map((step, index) => {
      const StepIcon = step.icon;
      const isActive = currentStep === step.id;
      const isCompleted = currentStep > step.id;
      const isAccessible = currentStep >= step.id;

      return (
        <div key={step.id} className="flex flex-col sm:flex-row items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 transform ${
                isCompleted
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 text-white scale-105 sm:scale-110 shadow-lg animate-pulse'
                  : isActive
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 border-blue-500 text-white scale-100 sm:scale-105 shadow-md animate-bounce'
                  : isAccessible
                  ? 'bg-white border-gray-300 text-gray-400 hover:scale-105'
                  : 'bg-gray-100 border-gray-200 text-gray-300'
              }`}
            >
              {isCompleted ? (
                <Check size={22} className="animate-spin" style={{ animationDuration: '2s' }} />
              ) : (
                <StepIcon size={22} className={isActive ? 'animate-pulse' : ''} />
              )}
            </div>
            <div className="mt-2 sm:mt-3 text-center">
              <span className={`block text-xs sm:text-sm font-bold transition-colors duration-300 ${
                isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`sm:flex-1 ${
                'sm:h-2 sm:mx-6 sm:my-0 h-8 w-1 mx-auto my-2'
              } rounded-full transition-all duration-700 ${
                isCompleted
                  ? 'bg-gradient-to-r from-green-400 to-emerald-400 shadow-sm'
                  : 'bg-gray-200'
              }`}
              style={{
                minWidth: '8px',
                minHeight: '2px',
              }}
            />
          )}
        </div>
      );
    })}
  </div>
);

  const renderStep1 = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Basic Job Information</h2>
        <p className="text-gray-600">Define the title and describe the position in detail</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Job Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
            placeholder="e.g. Senior Full Stack Developer"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Job Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="8"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Describe responsibilities, requirements, necessary experience, and any relevant information about the position..."
            required
          />
          <div className="mt-2 text-sm text-gray-500">
            {formData.description.length}/500 characters
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Location & Modality</h2>
        <p className="text-gray-600">Specify where and how the job will be performed</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Location *
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
            placeholder="e.g. Madrid, Spain / Remote / Hybrid"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Job Type *
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
            required
          >
            <option value="">Select job type</option>
            {jobTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Compensation & Company</h2>
        <p className="text-gray-600">Define the salary and add your company logo</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Salary *
          </label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
            placeholder="e.g. €45,000 - €65,000 per year"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Company Logo (Optional)
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-300">
              <Upload size={32} className="text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">Upload Logo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {logoPreview && (
              <div className="w-32 h-32 border-2 border-gray-200 rounded-xl overflow-hidden">
                <img 
                  src={logoPreview} 
                  alt="Logo preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Review & Confirmation</h2>
        <p className="text-gray-600">Review all data before publishing</p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl space-y-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Job Offer Preview</h3>
        
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-800">{formData.title}</h4>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin size={16} className="mr-2" />
                <span>{formData.location}</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {formData.type}
                </span>
              </div>
            </div>
            {logoPreview && (
              <img src={logoPreview} alt="Company logo" className="w-16 h-16 object-cover rounded-lg" />
            )}
          </div>
          
          <p className="text-gray-700 leading-relaxed">{formData.description}</p>
          
          <div className="flex items-center text-green-600 font-semibold">
            <DollarSign size={20} className="mr-2" />
            <span>{formData.salary}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="acceptTerms" className="ml-3 block text-sm text-gray-700">
            I accept the terms and conditions to publish this job offer *
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="makePublic"
            name="makePublic"
            checked={formData.makePublic}
            onChange={handleInputChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="makePublic" className="ml-3 block text-sm text-gray-700">
            Make this offer publicly visible
          </label>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  // ...existing code...
return (
  <div className="max-w-6xl mx-auto p-2 sm:p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
    <div className="bg-white rounded-2xl shadow-xl p-2 sm:p-4 md:p-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Post a Job Offer</h1>
        <p className="text-gray-600 text-sm sm:text-base">Create an attractive offer to find the perfect candidate</p>
      </div>
      
      {renderProgressBar()}
      
      <div className="space-y-4 sm:space-y-6">
        {renderCurrentStep()}
        
        <div className="flex flex-col sm:flex-row justify-between pt-6 sm:pt-8 border-t border-gray-200 gap-4">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center justify-center px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600 transform hover:scale-105'
            }`}
          >
            <ChevronLeft size={18} className="mr-2" />
            Previous
          </button>
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!validateStep(currentStep)}
              className={`flex items-center justify-center px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto ${
                !validateStep(currentStep)
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 shadow-lg'
              }`}
            >
              Next
              <ChevronRight size={18} className="ml-2" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!validateStep(currentStep)}
              className={`flex items-center justify-center px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto ${
                !validateStep(currentStep)
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 shadow-lg'
              }`}
            >
              <Briefcase size={18} className="mr-2" />
              Publish Offer
            </button>
          )}
        </div>
      </div>
    </div>
    
    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.5s ease-out;
      }
    `}</style>
  </div>
);
// ...existing code...
};