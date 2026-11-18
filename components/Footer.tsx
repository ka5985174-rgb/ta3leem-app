import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* القسم الأول: عن المنصة */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">منصتي التعليمية</h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              منصة تعليمية متكاملة تهدف إلى تقديم أفضل تجربة تعليمية للطلاب.
            </p>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">من نحن</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition">الأسئلة الشائعة</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* القسم الثالث: تواصل معنا */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>support@myplatform.com</span>
              </li>
              
              {/* الرقم التفاعلي للواتساب */}
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-green-500" />
                <a href="https://wa.me/201210334425" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition font-medium" dir="ltr">
                  +20 121 033 4425
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* حقوق النشر واسم المطور */}
        <div className="border-t border-slate-800 pt-6 flex flex-col items-center justify-center text-sm text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} منصتي التعليمية. جميع الحقوق محفوظة.</p>
          <p className="text-slate-400 font-medium">تم التطوير بواسطة: <span className="text-blue-400 font-bold">Keroles Ayman</span></p>
        </div>
        
      </div>
    </footer>
  );
}
