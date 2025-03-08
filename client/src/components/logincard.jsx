import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Logincard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', {email, password});
    axios.post('http://localhost:5000/api/user/login', {email, password})
    .then(result => {
      console.log(res.data);
      if(res.data.status === 'success') {
        console.log('Login successful');
        Navigate('/display');
      } else {
        console.log('Login failed');
      }
    })
    .catch(err => {
      console.log('Error:', err);
    }) 
  };


  return (
    <div className="flex justify-center items-center min-h-screen">  
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full mx-4 border-2 border-white/20 shadow-lg"> 
        
        {/* title */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center" >Welcome</h2>
        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          
          {/* enter email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">email</label>
              <input 
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email" 
              />
            </div>
          {/* enter password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">password</label>
            <div className="relative">
            <input 
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password" 
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
            >{showPassword ? '👁️' : '🗨️'}
            </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </button>

          {/* Social Login */}
            <div className="flex items-center justify-center">
              <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 hover:border-white/30 transition-all">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">G</span>
                </div>
                <span className="text-white text-sm">Continue with Google</span>
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}
