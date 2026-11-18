import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function register(formData: FormData) {
  'use server';
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!name || !email || !password) return;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return;

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed, role: 'STUDENT' }
  });

  const cookieStore = await cookies();
  cookieStore.set('userId', user.id, { httpOnly: true, path: '/' });
  redirect('/dashboard');
}

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 p-4">
      <form action={register} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-5 border border-slate-100">
        <h1 className="text-2xl font-bold text-center text-slate-800">إنشاء حساب جديد</h1>
        <input name="name" placeholder="الاسم بالكامل" className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input name="email" type="email" placeholder="البريد الإلكتروني" className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input name="password" type="password" placeholder="كلمة المرور" className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl transition">تسجيل الحساب</button>
        <p className="text-center text-sm text-slate-500">لديك حساب بالفعل؟ <Link href="/login" className="text-blue-600 font-bold hover:underline">تسجيل الدخول</Link></p>
      </form>
    </div>
  );
}
