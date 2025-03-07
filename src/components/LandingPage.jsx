import React, { useState } from 'react';
import supabase from '../configs/supabaseClient';
import { 
  Users, 
  CreditCard, 
  Shield, 
  ChevronRight, 
  Wallet,
  History,
  Lock,
  Mail,
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  User,
  X,
  Briefcase,
  DollarSign,
  MessageCircle
} from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formdata,setFormdata] = useState({
    name:"",
    email:"",
    company:"",
    phone:"",
    message:"",
    privacy:false
    
  })
  const [interest, setInterest] = useState('product-info');
  
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { data, error } = await supabase.from("contacts").insert([
      {
        full_name: formdata.name,
        email: formdata.email,
        company: formdata.company,
        phone: formdata.phone,
        interest,
        message: formdata.message,
        privacy_agreed: formdata.privacy,
      },
    ]);
  
    if (error) {
      console.error("Error inserting data:", error.message);
    } else {
      console.log("Data inserted successfully:", data);
      alert("Your message has been sent!");
      
      // Reset the form
      setFormdata({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        privacy: false,
      });
    }
  };

  const features = [
    {
      icon: <Wallet className="w-12 h-12 text-indigo-600" />,
      title: "One Shared Account",
      description: "A single family account that everyone can access, eliminating the need for multiple logins."
    },
    {
      icon: <History className="w-12 h-12 text-indigo-600" />,
      title: "Transaction History",
      description: "Complete transparency with a shared ledger of all family expenses and transactions."
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Secure Blockchain",
      description: "Enterprise-grade security using blockchain technology that's completely hidden from users."
    },
    {
      icon: <Zap className="w-12 h-12 text-indigo-600" />,
      title: "Instant Transfers",
      description: "No more waiting - move money between family members instantly without delays."
    }
  ];

  const howItWorks = [
    {
      title: "Create a Family Account",
      description: "Sign up and create a secure shared wallet for your entire family."
    },
    {
      title: "Add Family Members",
      description: "Invite your family to join with their own access credentials."
    },
    {
      title: "Deposit Funds",
      description: "Add money to your shared account (we handle the crypto conversion behind the scenes)."
    },
    {
      title: "Start Tracking Expenses",
      description: "Everyone can make payments and track spending in real-time."
    }
  ];

  const interestOptions = [
    { 
      id: 'product-info',
      icon: <MessageCircle className="h-8 w-8 mr-4 text-indigo-600" />,
      label: 'Product Information',
      description: 'Learn more about SharedLoot and how it works'
    },
    { 
      id: 'investment',
      icon: <DollarSign className="h-8 w-8 mr-4 text-green-600" />,
      label: 'Investment Opportunities',
      description: 'Discuss funding and investment opportunities'
    },
    { 
      id: 'partnership',
      icon: <Briefcase className="h-8 w-8 mr-4 text-purple-600" />,
      label: 'Partnership & Collaboration',
      description: 'Explore ways to collaborate and help build SharedLoot'
    }
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SharedLoot</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition">How It Works</a>
            <a href="#connect" className="text-gray-700 hover:text-indigo-600 transition">Connect With Us</a>
          </div>
          <a href='#connect' className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          Get Involved
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-indigo-800">
                Reimagining Family Finance
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                One Account.<br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Your Entire Family.
                </span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Stop juggling multiple accounts for family expenses. SharedLoot creates a single, secure wallet that everyone in your family can access and manage together.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#connect" className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group">
                  Join Waitlist
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition duration-300" />
                </a>
                <button onClick={() => setModalOpen(true)} className="flex items-center justify-center border-2 border-indigo-600 text-indigo-700 px-8 py-4 rounded-lg hover:bg-indigo-50 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 transform transition hover:scale-105 duration-300">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Sharma Family Wallet</span>
                    <span className="text-2xl font-bold">₹58,240</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full mb-2"></div>
                  <div className="flex justify-between text-sm">
                    <span>Monthly Budget</span>
                    <span>₹75,000</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start p-4 rounded-xl bg-gray-50">
                    <User className="w-10 h-10 text-indigo-600 mt-1" />
                    <div className="ml-4">
                      <div className="flex justify-between w-full">
                        <h3 className="font-bold">Dad paid Electricity</h3>
                        <span className="text-red-600 font-medium">-₹2,450</span>
                      </div>
                      <p className="text-gray-500 text-sm">Today at 10:45 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 rounded-xl bg-gray-50">
                    <User className="w-10 h-10 text-purple-600 mt-1" />
                    <div className="ml-4">
                      <div className="flex justify-between w-full">
                        <h3 className="font-bold">Mom bought Groceries</h3>
                        <span className="text-red-600 font-medium">-₹3,850</span>
                      </div>
                      <p className="text-gray-500 text-sm">Yesterday at 6:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 rounded-xl bg-gray-50">
                    <User className="w-10 h-10 text-green-600 mt-1" />
                    <div className="ml-4">
                      <div className="flex justify-between w-full">
                        <h3 className="font-bold">Son's Allowance Added</h3>
                        <span className="text-green-600 font-medium">+₹5,000</span>
                      </div>
                      <p className="text-gray-500 text-sm">Mar 5 at 9:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </header>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Problem We're Solving</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Today, managing family finances means constant logging in and out of different accounts, 
              sending OTPs, and struggling to keep track of who paid for what. It's inefficient, 
              frustrating, and makes collaboration nearly impossible.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
              <div className="bg-red-50 p-6 rounded-xl max-w-xs">
                <div className="text-red-500 text-center mb-4">
                  <X className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">The Old Way</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Multiple logins and OTPs
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    No shared transaction history
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Manual tracking of who paid what
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Complex money transfers between family
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl max-w-xs">
                <div className="text-green-500 text-center mb-4">
                  <CheckCircle className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">The SharedLoot Way</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    One account, multiple users
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete transaction transparency
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Automatic expense tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Instant transfers between members
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
              Powerful Features, Simple Experience
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We handle the complex blockchain technology behind the scenes, 
              so your family gets all the benefits with none of the confusion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
              How SharedLoot Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Simple steps to revolutionize your family's financial management
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-200 transform -translate-y-1/2 z-0"></div>
            
            {howItWorks.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-4 border-indigo-100 mx-auto mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{index + 1}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section id="connect" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With SharedLoot</h2>
              <p className="text-gray-700 mb-8">
                Interested in our product, investment opportunities, or want to help build SharedLoot? 
                Let us know how you'd like to get involved.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {interestOptions.map((option) => (
                  <div 
                    key={option.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      interest === option.id 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                    }`}
                    onClick={() => setInterest(option.id)}
                  >
                    <div className="flex items-center mb-2">
                      {option.icon}
                      <h3 className="font-bold">{option.label}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      id="name"
                      name='name'
                      value={formdata.name}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      onChange={handleChange}
                      name='email'
                      value={formdata.email}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      onChange={handleChange}
                      name='company'
                      value={formdata.company}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      onChange={handleChange}
                      name="phone"
                      value={formdata.phone}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us more about your interest</label>
                  <textarea
                    id="message"
                    rows="4"
                    name='message'
                    onChange={handleChange}
                    value={formdata.message}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder={interest === 'product-info' 
                      ? "I'd like to know more about how SharedLoot works..."
                      : interest === 'investment'
                        ? "I'm interested in funding opportunities for SharedLoot..."
                        : "I'd like to collaborate on building SharedLoot by..."
                    }
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    name='checkbox'
                    onChange={handleChange}
                    value={formdata.privacy}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  {interest === 'product-info' 
                    ? "Request Product Information"
                    : interest === 'investment'
                      ? "Discuss Investment Opportunities"
                      : "Start Collaboration Discussion"
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SL</span>
                </div>
                <h3 className="text-2xl font-bold text-white">SharedLoot</h3>
              </div>
              <p className="text-gray-400">
                Revolutionizing family finances with secure, shared blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 SharedLoot. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;