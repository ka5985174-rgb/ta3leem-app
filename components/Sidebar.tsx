import { X, Home, BookOpen, Bookmark, HelpCircle, Info, Phone, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={onClose} />}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <div className="text-xl font-bold text-blue-600">منصتي التعليمية</div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition"><X size={24} /></button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100vh-70px)]">
          <div className="space-y-1">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium transition"><Home size={20} /> الرئيسية</Link>
            <Link href="/courses" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition"><BookOpen size={20} /> كورساتي</Link>
            <Link href="/saved" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition"><Bookmark size={20} /> المحفوظات</Link>
          </div>
          
          <hr className="my-4 border-slate-100" />
          
          <div className="space-y-1">
            <p className="px-4 text-xs font-bold text-slate-400 mb-2">معلومات تهمك</p>
            <Link href="/about" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition"><Info size={20} /> من نحن</Link>
            <Link href="/faq" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition"><HelpCircle size={20} /> الأسئلة الشائعة</Link>
            <Link href="/contact" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition"><Phone size={20} /> تواصل معنا</Link>
          </div>

          <hr className="my-4 border-slate-100" />
          
          <div className="space-y-1">
            <Link href="/login" className="w-full flex items-center gap-3 px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition text-right"><LogIn size={20} /> تسجيل الدخول</Link>
          </div>
        </div>
      </div>
    </>
  );
}
