import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, Package, CheckCircle, Shield } from 'lucide-react';

function App() {
  const [stage, setStage] = useState('intro'); // 'intro', 'welcome', 'booth-entry', 'options'
  const [boothNumber, setBoothNumber] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const [introProgress, setIntroProgress] = useState(0);

  // Intro animation sequence - Apple/Google style
  useEffect(() => {
    if (stage === 'intro') {
      // Phase 1: Logo appears (0-1s)
      const timer1 = setTimeout(() => setIntroProgress(1), 300);
      
      // Phase 2: Logo scales and glows (1-2s)
      const timer2 = setTimeout(() => setIntroProgress(2), 1200);
      
      // Phase 3: ExpoFlow text appears (2-3s)
      const timer3 = setTimeout(() => setIntroProgress(3), 2200);
      
      // Phase 4: Transition to main app (3-4.5s)
      const timer4 = setTimeout(() => {
        setIntroProgress(4);
        setTimeout(() => setStage('welcome'), 1000);
      }, 3500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [stage]);

  // Welcome page animation sequence
  useEffect(() => {
    if (stage === 'welcome') {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const ExpoLogo = ({ size = "large" }) => {
    return (
      <div className="flex items-center">
        <img 
          src="https://i.ibb.co/5gdgZVxj/output-onlinepngtools.png" 
          alt="Expo Convention Contractors"
          className={`${size === "large" ? "h-12 md:h-16" : "h-8"} w-auto object-contain`}
        />
      </div>
    );
  };

  const handleBoothSubmit = () => {
    if (boothNumber.trim()) {
      setStage('options');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBoothSubmit();
    }
  };

  // Pure Welcome Animation - Apple Style Minimalism
  if (stage === 'intro') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
        
        <div className="relative text-center">
          
          {/* Pure "Welcome" Text with Letter-by-Letter Animation */}
          <div className={`transition-all duration-1000 ease-out ${
            introProgress >= 1 ? 'opacity-100' : 'opacity-0'
          } ${
            introProgress >= 4 ? 'opacity-0 translate-y-8 scale-95' : 'translate-y-0 scale-100'
          }`}>
            <div className="relative">
              {/* Individual letters of "Welcome" */}
              <div className="flex justify-center">
                {['W', 'e', 'l', 'c', 'o', 'm', 'e'].map((letter, index) => (
                  <span
                    key={index}
                    className={`text-6xl md:text-8xl lg:text-9xl font-light text-black transition-all duration-700 ease-out ${
                      introProgress >= 2 && introProgress < 4 ? 'opacity-100 translate-y-0' : 'opacity-0'
                    } ${
                      introProgress < 2 ? 'translate-y-12' : 'translate-y-0'
                    }`}
                    style={{
                      transitionDelay: introProgress >= 2 && introProgress < 4 ? `${index * 120}ms` : '0ms',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                      letterSpacing: '-0.02em',
                      fontWeight: '300'
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Custom animations for Apple-like smoothness */}
        <style jsx>{`
          @keyframes letterFloat {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @supports (-webkit-backdrop-filter: blur(10px)) {
            .letter-smooth {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          }
        `}</style>
      </div>
    );
  }

  // Welcome Screen - Clean and Professional
  if (stage === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/60 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-50/60 rounded-full blur-3xl"></div>
        </div>

        <div className="relative min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Logo with smooth entrance */}
            <div className={`mb-8 transform transition-all duration-1000 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <ExpoLogo size="large" />
            </div>

            {/* Main Title */}
            <div className={`space-y-6 mb-12 transform transition-all duration-1000 delay-300 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
                ExpoFlow
              </h1>
              <p className="text-xl md:text-2xl text-teal-600 font-medium mb-2">
                Order Tracking System
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Building2 className="w-5 h-5 text-teal-600" />
                <span className="text-gray-600">Expo Convention Contractors</span>
              </div>
            </div>

            {/* Feature Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 delay-600 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Package className="w-10 h-10 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Orders</h3>
                <p className="text-gray-600 text-sm">Real-time order tracking and management</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CheckCircle className="w-10 h-10 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Checklists</h3>
                <p className="text-gray-600 text-sm">Track booth setup progress instantly</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`transform transition-all duration-1000 delay-900 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <button
                onClick={() => setStage('booth-entry')}
                className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <span>Access Your Orders</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* System Status */}
            <div className={`mt-8 transform transition-all duration-1000 delay-1200 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-green-500" />
                <span>System Online • Professional Exhibition Management</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Booth Number Entry Screen
  if (stage === 'booth-entry') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/60 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-2xl">
            
            {/* Header */}
            <div className="text-center mb-8">
              <ExpoLogo size="large" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-6 mb-2">Welcome Back</h2>
              <p className="text-teal-600 font-medium">Enter your booth number to continue</p>
            </div>

            {/* Booth Number Input */}
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Booth Number
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-600" />
                  <input
                    type="text"
                    value={boothNumber}
                    onChange={(e) => setBoothNumber(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., A-123, B-456"
                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                    autoFocus
                  />
                </div>
              </div>

              <button
                onClick={handleBoothSubmit}
                disabled={!boothNumber.trim()}
                className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
                  boothNumber.trim()
                    ? 'bg-gradient-to-r from-teal-600 to-teal-700 hover:shadow-lg hover:scale-105'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setStage('welcome')}
              className="w-full mt-4 text-gray-600 hover:text-gray-900 py-3 px-6 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 text-sm"
            >
              ← Back to Welcome
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Options Selection Screen
  if (stage === 'options') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/60 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <ExpoLogo size="large" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
              Booth {boothNumber}
            </h2>
            <p className="text-teal-600 font-medium text-lg">Choose your action</p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Orders Option */}
            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Package className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Orders</h3>
                  <p className="text-gray-600 mb-6">
                    Track your exhibition orders in real-time
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-teal-600 group-hover:text-teal-700 font-medium">
                    <span>View Orders</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist Option */}
            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Checklist</h3>
                  <p className="text-gray-600 mb-6">
                    Monitor your booth setup progress
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-teal-600 group-hover:text-teal-700 font-medium">
                    <span>View Progress</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setStage('booth-entry')}
              className="text-gray-600 hover:text-gray-900 py-3 px-6 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            >
              ← Change Booth Number
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
