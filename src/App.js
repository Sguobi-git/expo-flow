import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Building2, Package, CheckCircle, BarChart3, Zap, Globe, Star } from 'lucide-react';

function App() {
  const [stage, setStage] = useState('welcome'); // 'welcome', 'booth-entry', 'options'
  const [boothNumber, setBoothNumber] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const [particleCount, setParticleCount] = useState(50);

  // Welcome animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Floating particles animation
  const generateParticles = () => {
    return Array.from({ length: particleCount }, (_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-70 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    ));
  };

  const ExpoLogo = ({ size = "large", animated = false }) => {
    return (
      <div className={`flex items-center ${animated ? 'animate-pulse' : ''}`}>
        <img 
          src="https://i.ibb.co/5gdgZVxj/output-onlinepngtools.png" 
          alt="Expo Convention Contractors"
          className={`${size === "large" ? "h-16 md:h-20" : "h-8"} w-auto object-contain`}
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

  // Welcome Screen with Epic Animations
  if (stage === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400/25 to-cyan-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Floating Particles */}
          <div className="particles-container">
            {generateParticles()}
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({length: 144}, (_, i) => (
                <div key={i} className="border border-white/10 animate-pulse" style={{animationDelay: `${i * 50}ms`}}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Logo with Epic Entrance */}
            <div className={`mb-8 ${isAnimating ? 'animate-bounce' : 'animate-pulse'}`}>
              <ExpoLogo size="large" animated={true} />
            </div>

            {/* Main Title with Typewriter Effect */}
            <div className="space-y-6 mb-12">
              <h1 className={`text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 animate-shimmer ${isAnimating ? 'animate-pulse' : ''}`}>
                ExpoFlow
              </h1>
              
              <div className={`transform transition-all duration-2000 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
                <p className="text-2xl md:text-3xl text-white font-light mb-4">
                  The Future of Exhibition Management
                </p>
                <p className="text-lg md:text-xl text-teal-300 font-medium">
                  Powered by Expo Convention Contractors
                </p>
              </div>
            </div>

            {/* Feature Highlights with Staggered Animation */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transform transition-all duration-2000 delay-500 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
                <Package className="w-12 h-12 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Smart Orders</h3>
                <p className="text-gray-300 text-sm">Real-time order tracking and management</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 group delay-200">
                <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Digital Checklists</h3>
                <p className="text-gray-300 text-sm">Track booth setup progress instantly</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 group delay-400">
                <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Live Analytics</h3>
                <p className="text-gray-300 text-sm">Advanced insights and reporting</p>
              </div>
            </div>

            {/* Call to Action with Pulsing Effect */}
            <div className={`transform transition-all duration-2000 delay-1000 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
              <button
                onClick={() => setStage('booth-entry')}
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25"
              >
                <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                <span>Begin Your Journey</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-20 left-10 animate-bounce delay-1000">
              <Building2 className="w-8 h-8 text-teal-400/60" />
            </div>
            <div className="absolute top-32 right-20 animate-bounce delay-2000">
              <Globe className="w-6 h-6 text-blue-400/60" />
            </div>
            <div className="absolute bottom-32 left-20 animate-bounce delay-3000">
              <Zap className="w-7 h-7 text-purple-400/60" />
            </div>
            <div className="absolute bottom-20 right-10 animate-bounce delay-4000">
              <Star className="w-5 h-5 text-pink-400/60" />
            </div>

          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.7;
            }
            33% { 
              transform: translateY(-20px) rotate(5deg); 
              opacity: 1;
            }
            66% { 
              transform: translateY(10px) rotate(-5deg); 
              opacity: 0.5;
            }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .animate-float {
            animation: float linear infinite;
          }
          
          .animate-shimmer {
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  // Booth Number Entry Screen
  if (stage === 'booth-entry') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl transform animate-fadeIn">
              
              {/* Header */}
              <div className="text-center mb-8">
                <ExpoLogo size="large" />
                <h2 className="text-3xl font-bold text-white mt-6 mb-2">Welcome Back!</h2>
                <p className="text-teal-300 text-lg">Enter your booth number to continue</p>
              </div>

              {/* Booth Number Input */}
              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-white font-medium mb-3 text-lg">
                    Booth Number
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-teal-400" />
                    <input
                      type="text"
                      value={boothNumber}
                      onChange={(e) => setBoothNumber(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="e.g., A-123, B-456"
                      className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-lg font-medium backdrop-blur-sm transition-all duration-300"
                      autoFocus
                    />
                  </div>
                </div>

                <button
                  onClick={handleBoothSubmit}
                  disabled={!boothNumber.trim()}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span>Continue</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </button>
              </div>

              {/* Back Button */}
              <button
                onClick={() => setStage('welcome')}
                className="w-full mt-4 text-gray-300 hover:text-white py-3 px-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                ← Back to Welcome
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out;
          }
        `}</style>
      </div>
    );
  }

  // Options Selection Screen
  if (stage === 'options') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-4xl">
            
            {/* Header */}
            <div className="text-center mb-12 animate-slideDown">
              <ExpoLogo size="large" />
              <h2 className="text-4xl font-bold text-white mt-6 mb-4">
                Booth {boothNumber}
              </h2>
              <p className="text-teal-300 text-xl">Choose your action</p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Orders Option */}
              <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 animate-slideLeft">
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-teal-400/50 shadow-2xl hover:shadow-teal-500/25 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                      <Package className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Orders</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Track your exhibition orders in real-time
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-teal-400 group-hover:text-white transition-colors">
                      <span className="font-medium">View Orders</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist Option */}
              <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 animate-slideRight">
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Checklist</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Monitor your booth setup progress
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-purple-400 group-hover:text-white transition-colors">
                      <span className="font-medium">View Progress</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-8 animate-fadeIn delay-500">
              <button
                onClick={() => setStage('booth-entry')}
                className="text-gray-300 hover:text-white py-3 px-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                ← Change Booth Number
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-slideDown {
            animation: slideDown 0.6s ease-out;
          }
          
          .animate-slideLeft {
            animation: slideLeft 0.8s ease-out;
          }
          
          .animate-slideRight {
            animation: slideRight 0.8s ease-out 0.2s both;
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out;
          }
          
          .delay-500 {
            animation-delay: 0.5s;
            animation-fill-mode: both;
          }
        `}</style>
      </div>
    );
  }
}