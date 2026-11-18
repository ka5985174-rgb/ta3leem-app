import Link from 'next/link';
import { LogIn, UserPlus, ArrowLeft, BookOpen, Clock, Map } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* شريط علوي للصفحة العامة */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">م</div>
            <span className="text-xl font-bold text-slate-800">منصتي التعليمية</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="flex items-center gap-2 text-slate-600 hover:text-orange-600 font-bold px-4 py-2 transition">
              <LogIn size={20} /> تسجيل الدخول
            </Link>
            <Link href="/register" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg transition">
              <UserPlus size={20} /> حساب جديد
            </Link>
          </div>
        </div>
      </header>

      {/* قسم الهيرو (الصورة والكلام) */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop" alt="Teacher" className="w-full h-full object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <p className="text-orange-400 font-bold mb-4 text-lg">التاريخ والجغرافيا مع مستر كيرلس</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              افهم اللي حصل... <br />
              واعرف حصل فين وليه
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              شرح منظم بيربط الأحداث ببعضها، وبقول الخرائط والمعلومات من حفظ كتير لفهم أقوى. تقدر ترجع له وقت الحل والمراجعة.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">الصف الأول الثانوي - تاريخ</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">الصف الثاني الثانوي - تاريخ</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">الصف الثالث الثانوي - جغرافيا</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-orange-500/30">
                اختر سنتك الدراسية
              </Link>
              <Link href="/login" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-xl transition">
                شوف الكورسات المتاحة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المميزات واختيار الصفوف */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold mb-2">المحاضرات المختارة</p>
            <h2 className="text-3xl font-extrabold text-slate-800">ابدأ من الكورس المناسب لسنتك</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">اختار التاريخ أو الجغرافيا حسب صفك، وكمل من المكان المناسب ليك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* كارت الصف الأول */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer bg-slate-50 hover:bg-white group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-slate-300 group-hover:text-orange-500 transition-colors">01</span>
                <ArrowLeft className="text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">الصف الأول الثانوي</h3>
              <p className="text-slate-500 text-sm">تاريخ</p>
            </div>

            {/* كارت الصف الثاني */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer bg-slate-50 hover:bg-white group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-slate-300 group-hover:text-orange-500 transition-colors">02</span>
                <ArrowLeft className="text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">الصف الثاني الثانوي</h3>
              <p className="text-slate-500 text-sm">تاريخ</p>
            </div>

            {/* كارت الصف الثالث */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer bg-slate-50 hover:bg-white group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-slate-300 group-hover:text-orange-500 transition-colors">03</span>
                <ArrowLeft className="text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">الصف الثالث الثانوي</h3>
              <p className="text-slate-500 text-sm">جغرافيا</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
EOFcat << 'EOF' > app/page.tsx
import Link from 'next/link';
import { LogIn, UserPlus, ArrowLeft, BookOpen, Clock, Map } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* شريط علوي للصفحة العامة */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">م</div>
            <span className="text-xl font-bold text-slate-800">منصتي التعليمية</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="flex items-center gap-2 text-slate-600 hover:text-orange-600 font-bold px-4 py-2 transition">
              <LogIn size={20} /> تسجيل الدخول
            </Link>
            <Link href="/register" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg transition">
              <UserPlus size={20} /> حساب جديد
            </Link>
          </div>
        </div>
      </header>

      {/* قسم الهيرو (الصورة والكلام) */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop" alt="Teacher" className="w-full h-full object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <p className="text-orange-400 font-bold mb-4 text-lg">التاريخ والجغرافيا مع مستر كيرلس</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              افهم اللي حصل... <br />
              واعرف حصل فين وليه
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              شرح منظم بيربط الأحداث ببعضها، وبقول الخرائط والمعلومات من حفظ كتير لفهم أقوى. تقدر ترجع له وقت الحل والمراجعة.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">الصف الأول الثانوي - تاريخ</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">الصف الثاني الثانوي - تاريخ</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">الصف الثالث الثانوي - جغرافيا</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-orange-500/30">
                اختر سنتك الدراسية
              </Link>
              <Link href="/login" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-xl transition">
                شوف الكورسات المتاحة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المميزات واختيار الصفوف */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold mb-2">المحاضرات المختارة</p>
            <h2 className="text-3xl font-extrabold text-slate-800">ابدأ من الكورس المناسب لسنتك</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">اختار التاريخ أو الجغرافيا حسب صفك، وكمل من المكان المناسب ليك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* كارت الصف الأول */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer bg-slate-50 hover:bg-white group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-slate-300 group-hover:text-orange-500 transition-colors">01</span>
                <ArrowLeft className="text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">الصف الأول الثانوي</h3>
              <p className="text-slate-500 text-sm">تاريخ</p>
            </div>

            {/* كارت الصف الثاني */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer bg-slate-50 hover:bg-white group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-slate-300 group-hover:text-orange-500 transition-colors">02</span>
                <ArrowLeft className="text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">الصف الثاني الثانوي</h3>
              <p className="text-slate-500 text-sm">تاريخ</p>
            </div>

            {/* كارت الصف الثالث */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer bg-slate-50 hover:bg-white group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-slate-300 group-hover:text-orange-500 transition-colors">03</span>
                <ArrowLeft className="text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">الصف الثالث الثانوي</h3>
              <p className="text-slate-500 text-sm">جغرافيا</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
