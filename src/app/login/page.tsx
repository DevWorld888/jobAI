"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';

const ResponsiveLogin = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('johnnybravo@afterglow.com');
  const [password, setPassword] = useState('');

  const slides = [
    {
      title: "Easy To Navigate And Earn Rewards",
      subtitle: "Now you can make reservations and compete against other users.",
      image: "📱",
      cards: [
        { icon: "🎯", title: "Taste of the Week", subtitle: "Try the latest food trends" },
        { icon: "🏆", title: "Win exciting prizes", subtitle: "Complete challenges" },
        { icon: "📍", title: "Open House Day", subtitle: "Visit our locations" },
        { icon: "👥", title: "Who calls the most", subtitle: "Leaderboard competition" }
      ]
    },
    {
      title: "Discover Amazing Features",
      subtitle: "Connect with friends and explore new possibilities.",
      image: "🌟",
      cards: [
        { icon: "💬", title: "Chat & Connect", subtitle: "Talk with other users" },
        { icon: "🎁", title: "Daily Rewards", subtitle: "Claim your bonuses" },
        { icon: "📊", title: "Track Progress", subtitle: "Monitor your achievements" },
        { icon: "🔔", title: "Notifications", subtitle: "Stay updated" }
      ]
    },
    {
      title: "Join The Community",
      subtitle: "Be part of something bigger and share experiences.",
      image: "🤝",
      cards: [
        { icon: "👤", title: "Profile Setup", subtitle: "Customize your presence" },
        { icon: "🌐", title: "Global Network", subtitle: "Connect worldwide" },
        { icon: "⭐", title: "Rate & Review", subtitle: "Share your thoughts" },
        { icon: "🎊", title: "Events", subtitle: "Join special occasions" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Section - Blue Background with Slider */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center items-center text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-orange-400 rounded-full opacity-80"></div>
        <div className="absolute top-20 right-16 w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-20 left-12 w-5 h-5 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-purple-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-4 h-4 bg-pink-300 rounded-full opacity-60"></div>
        
        {/* Slider Content */}
        <div className="relative z-10 max-w-md w-full text-center">
          {/* Main Illustration */}
          <div className="mb-8 text-6xl lg:text-8xl">
            {currentSlideData.image}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {currentSlideData.cards.map((card, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <h4 className="text-sm font-semibold mb-1">{card.title}</h4>
                <p className="text-xs opacity-80">{card.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Title and Subtitle */}
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
            {currentSlideData.title}
          </h2>
          <p className="text-blue-100 mb-8 text-sm lg:text-base">
            {currentSlideData.subtitle}
          </p>

          {/* Slide Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-40'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-800 to-transparent"></div>
      </div>

      {/* Right Section - Login Form */}
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Hello Again!</h1>
            <p className="text-gray-500 text-sm">
              Aliquam consectetur et tincidunt phasellus enim massa
              pellentesque velit odio neque.
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your email"
                />
                <div className="absolute right-3 top-3 text-gray-400">@</div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 pr-12"
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                Recovery Password
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Login
            </button>

            {/* Google Sign In */}
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Sign in with Google</span>
            </button>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-gray-600">
              Don't have an account yet?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ResponsiveLogin;