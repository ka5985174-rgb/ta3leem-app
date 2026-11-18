"use client";

import { useState } from 'react';
import { Search, User, Menu, Coins, BookOpen, PlayCircle, Bookmark, LogIn, UserPlus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function HomeClient({ courses }: { courses: any[] }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { id: 1, title: 'كورسات حالية', count: courses.length, icon: PlayCircle, color: 'text-green-500', bg: 'bg-green-50' },
    { id: 2, title: 'كورسات مكتملة', count: 0, icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 3, title: 'فيديوهات محفوظة', count: 0, icon: Bookmark, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  ];

  const chartData = [
    { name: 'السبت', activity: 0.1 }, { name: 'الأحد', activity: 0.2 }, { name: 'الإثنين', activity: 0 },
    { name: 'الثلاثاء', activity: 0.3 }, { name: 'الأربعاء', activity: 0.5 }, { name: 'الخميس', activity: 0.8 }, { name: 'الجمعة', activity: 1.0 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition"><Menu size={24} /></button>
            <div className="text-xl font-bold text-blue-600 hidden md:block">منصتي التعليمية</div>
          </div>
          <div className="flex-1 max-w-md relative hidden md:block">
            <input type="text" placeholder="ابحث عن كورس أو درس..." className="w-full bg-slate-100 rounded-full py-2 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            <Search className="absolute right-3 top-2.5 text-slate-400" size={18} />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-full text-sm font-bold border border-yellow-100"><Coins size={16} /><span>150</span></div>
            
            {/* أزرار اللوجن وإنشاء الحساب */}
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login" className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 transition bg-blue-50 px-4 py-2 rounded-lg">
                <LogIn size={16} /> دخول
              </Link>
              <Link href="/register" className="flex items-center gap-1 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg">
                <UserPlus size={16} /> حساب جديد
              </Link>
            </div>

            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm cursor-pointer hover:ring-2 ring-blue-100 transition"><User size={20} className="text-slate-500" /></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
              <div><p className="text-slate-500 text-sm mb-1">{stat.title}</p><h3 className="text-3xl font-bold text-slate-800">{stat.count}</h3></div>
              <div className={`${stat.bg} p-4 rounded-xl`}><stat.icon className={stat.color} size={28} /></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90"><circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="8" fill="none" /><circle cx="64" cy="64" r="56" stroke="#0ea5e9" strokeWidth="8" fill="none" strokeDasharray="351" strokeDashoffset="312" strokeLinecap="round" /></svg>
              <span className="absolute text-2xl font-bold text-slate-800">11%</span>
            </div>
            <h3 className="font-bold text-lg text-cyan-600 mb-2">تقدمك</h3>
            <p className="text-slate-500 text-sm text-center mb-4">مقياس لكمية الدروس السابقة والمتبقية.</p>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">كمل مذاكرة</button>
          </div>
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-6">نشاطك التعليمي</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip />
                  <Line type="monotone" dataKey="activity" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">الكورسات المتاحة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full bg-slate-100"><img src={course.image} alt={course.title} className="w-full h-full object-cover" /></div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-sm text-slate-500 mb-2 block">أ. {course.instructor}</span>
                  <h3 className="font-bold text-slate-800 text-lg mb-2 line-clamp-1">{course.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{course.description}</p>
                  <div className="mt-auto"><button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition-colors">الدخول للكورس</button></div>
                </div>
              </div>
            ))}
            {courses.length === 0 && <p className="text-slate-500 col-span-3 text-center">لا يوجد كورسات حالياً. ادخل للوحة التحكم لإضافة كورسات.</p>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
