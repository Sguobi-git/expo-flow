import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, Package, CheckCircle, Shield } from 'lucide-react';

function App() {
  const [stage, setStage] = useState('intro'); // 'intro', 'welcome', 'options'
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

  // ExpoFlow Main Page with Booth Input
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
          <div className="text-center max-w-md mx-auto w-full">
            
            {/* Logo with smooth entrance */}
            <div className={`mb-8 transform transition-all duration-1000 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <ExpoLogo size="large" />
            </div>

            {/* Main Title */}
            <div className={`space-y-6 mb-12 transform transition-all duration-1000 delay-300 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                ExpoFlow
              </h1>
              <p className="text-xl text-teal-600 font-medium mb-2">
                Order Tracking System
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Building2 className="w-5 h-5 text-teal-600" />
                <span className="text-gray-600">Expo Convention Contractors</span>
              </div>
            </div>

            {/* Booth Number Input Card */}
            <div className={`transform transition-all duration-1000 delay-600 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-lg">
                
                {/* Input Section */}
                <div className="space-y-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Enter Your Booth Number
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-600" />
                      <input
                        type="text"
                        value={boothNumber}
                        onChange={(e) => setBoothNumber(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="e.g., A-123, B-456"
                        className="block w-full pl-10 pr-4 py-4 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg font-medium"
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
              </div>
            </div>

            {/* System Status */}
            <div className={`mt-8 transform transition-all duration-1000 delay-900 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
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

  // Options Selection Screen - Full Page Cards
  if (stage === 'options') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/60 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-50/60 rounded-full blur-3xl"></div>
        </div>

        <div className="relative min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-5xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <div className="mb-6">
                <ExpoLogo size="large" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Booth {boothNumber}
              </h2>
              <p className="text-xl text-teal-600 font-medium">Choose your action</p>
            </div>

            {/* Large Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              {/* Orders Card */}
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 border border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl transition-all duration-300 h-80 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Package className="w-14 h-14 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Orders</h3>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      Track your exhibition orders in real-time with detailed progress updates
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-teal-600 group-hover:text-teal-700 font-semibold text-lg">
                      <span>View Orders</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist Card */}
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 border border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl transition-all duration-300 h-80 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-14 h-14 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Checklist</h3>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      Monitor your booth setup progress with comprehensive tracking
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-teal-600 group-hover:text-teal-700 font-semibold text-lg">
                      <span>View Progress</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <button
                onClick={() => setStage('welcome')}
                className="text-gray-600 hover:text-gray-900 py-3 px-6 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                ← Back to Booth Entry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
