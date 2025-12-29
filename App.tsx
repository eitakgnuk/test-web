
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  History, 
  Cpu, 
  Gem, 
  Hotel, 
  ArrowUpRight, 
  MessageSquare, 
  Send, 
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import BentoCard from './components/BentoCard';
import { TIMELINE, SKILLS, BRANDS, VALUES } from './constants';
import { getBrandAssistantResponse } from './services/geminiService';

const App: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Royal Pacific. How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsTyping(true);

    const botResponse = await getBrandAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 selection:bg-cyan-500/30">
      {/* Background Decor */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-2">
            Royal <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pacific</span>
          </h1>
          <p className="text-zinc-500 font-medium tracking-widest uppercase text-sm">
            Est. 1996 • Excellence • Reliability • Innovation
          </p>
        </motion.div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all hover:bg-zinc-200"
        >
          View Brands <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </header>

      {/* Bento Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4">
        
        {/* Main Brand Story Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between" delay={0.1}>
          <div>
            <div className="bg-cyan-500/10 w-fit p-3 rounded-2xl mb-6">
              <Layers className="text-cyan-400 w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Bridging Global <br />
              <span className="italic text-zinc-400">Excellence</span> and <br />
              Local <span className="underline decoration-cyan-500/50">Reliability</span>.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Founded in 1996, Royal Pacific is a multi-brand company focused on reliable products and practical solutions across diverse industries. From hospitality to server cooling, we deliver consistency.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
             <div className="h-1 flex-1 bg-cyan-500/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-cyan-500" 
                />
             </div>
             <div className="h-1 flex-1 bg-white/5 rounded-full" />
             <div className="h-1 flex-1 bg-white/5 rounded-full" />
          </div>
        </BentoCard>

        {/* Timeline Card */}
        <BentoCard className="md:col-span-1 md:row-span-2 overflow-y-auto max-h-[600px] scrollbar-hide" delay={0.2}>
          <div className="flex items-center gap-2 mb-8 text-zinc-300">
            <History className="w-5 h-5" />
            <span className="font-semibold uppercase text-xs tracking-wider">Heritage Timeline</span>
          </div>
          <div className="space-y-8 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10" />
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] bg-[#050505] border-2 border-cyan-500 rounded-full z-10" />
                <span className="text-xs font-bold text-cyan-500 mb-1 block">{item.year}</span>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Stats Card */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-zinc-900 to-black border-zinc-800" delay={0.3}>
          <div className="h-full flex flex-col justify-center text-center">
            <h3 className="text-6xl font-serif font-bold text-white mb-2">28+</h3>
            <p className="text-zinc-500 uppercase text-xs tracking-widest font-bold">Years of Trust</p>
          </div>
        </BentoCard>

        {/* Values Card */}
        <BentoCard className="md:col-span-1 md:row-span-1" delay={0.4}>
          <div className="flex flex-col h-full justify-between">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[10px] font-bold">
                  {i}
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Our Values</h3>
              <p className="text-zinc-500 text-xs">Integrity, Innovation, and Service.</p>
            </div>
          </div>
        </BentoCard>

        {/* Capability / Skills Grid */}
        <BentoCard className="md:col-span-2 md:row-span-2" delay={0.5}>
          <div className="flex items-center gap-2 mb-8 text-zinc-300">
            <Cpu className="w-5 h-5" />
            <span className="font-semibold uppercase text-xs tracking-wider">Technical Capabilities</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="group/skill">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <h5 className="text-sm font-semibold text-zinc-300">{skill.name}</h5>
                  </div>
                  <span className="text-[10px] text-zinc-600 group-hover/skill:text-cyan-400 transition-colors">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-cyan-600 to-blue-400"
                  />
                </div>
                <p className="text-[11px] text-zinc-500 mt-2 line-clamp-2 opacity-0 group-hover/skill:opacity-100 transition-opacity">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
            <p className="text-zinc-400 text-sm italic">
              "We don't just supply products; we engineer the supply chains that make them possible."
            </p>
          </div>
        </BentoCard>

        {/* Brand Preview 1: LodgingStar */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-tr from-amber-500/10 to-transparent" delay={0.6}>
           <div className="flex justify-between items-start">
             <Hotel className="text-amber-500 w-6 h-6" />
             <ArrowUpRight className="text-zinc-600 w-4 h-4 group-hover:text-amber-500 transition-colors" />
           </div>
           <div className="mt-8">
             <h3 className="text-lg font-bold text-white">LodgingStar®</h3>
             <p className="text-xs text-zinc-500 mt-1">Hospitality Logistics</p>
           </div>
        </BentoCard>

        {/* Brand Preview 2: D.Cool */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-tr from-blue-500/10 to-transparent" delay={0.7}>
           <div className="flex justify-between items-start">
             <Cpu className="text-blue-500 w-6 h-6" />
             <ArrowUpRight className="text-zinc-600 w-4 h-4 group-hover:text-blue-500 transition-colors" />
           </div>
           <div className="mt-8">
             <h3 className="text-lg font-bold text-white">D.Cool®</h3>
             <p className="text-xs text-zinc-500 mt-1">Data Center Tech</p>
           </div>
        </BentoCard>

        {/* Brand Preview 3: YK Diamond */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-tr from-purple-500/10 to-transparent" delay={0.8}>
           <div className="flex justify-between items-start">
             <Gem className="text-purple-500 w-6 h-6" />
             <ArrowUpRight className="text-zinc-600 w-4 h-4 group-hover:text-purple-500 transition-colors" />
           </div>
           <div className="mt-8">
             <h3 className="text-lg font-bold text-white">YK Diamond®</h3>
             <p className="text-xs text-zinc-500 mt-1">Lab-Grown Brilliance</p>
           </div>
        </BentoCard>

        {/* Contact/Location Card */}
        <BentoCard className="md:col-span-1 md:row-span-1" delay={0.9}>
           <div className="space-y-3">
             <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
               <Mail className="w-4 h-4" />
               <span className="text-xs truncate">victor@royalpacific-us.com</span>
             </div>
             <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
               <Phone className="w-4 h-4" />
               <span className="text-xs">917-767-7373</span>
             </div>
             <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
               <MapPin className="w-4 h-4" />
               <span className="text-xs">New York, NY</span>
             </div>
           </div>
        </BentoCard>

      </main>

      {/* Interactive AI Chat Trigger */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatOpen(true)}
          className="bg-white text-black p-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-24 right-8 w-80 md:w-96 glass rounded-3xl z-50 shadow-2xl flex flex-col border border-white/10"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-sm">Royal Pacific Assistant</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === 'user' 
                    ? 'bg-cyan-500 text-white rounded-br-none' 
                    : 'bg-white/10 text-zinc-300 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white/10 text-zinc-500 px-4 py-2 rounded-2xl text-xs">
                     Typing...
                   </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about our history..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-cyan-500/50"
              />
              <button 
                onClick={handleSendMessage}
                className="bg-cyan-500 p-2 rounded-full hover:bg-cyan-400 transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pb-12 text-center text-zinc-600">
        <div className="h-[1px] w-full bg-white/5 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-widest font-medium">© 1996 - {new Date().getFullYear()} Royal Pacific. All rights reserved.</p>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
