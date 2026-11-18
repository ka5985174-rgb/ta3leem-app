import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function login(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) return;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.password) return;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return;

  const cookieStore = await cookies();
  cookieStore.set('userId', user.id, { httpOnly: true, path: '/' });
  redirect('/dashboard'); 
}

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 p-4">
      <form action={login} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-5 border border-slate-100">
        <h1 className="text-2xl font-bold text-center text-slate-800">تسجيل الدخول</h1>
        <input name="email" type="email" placeholder="البريد الإلكتروني" className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input name="password" type="password" placeholder="كلمة المرور" className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl transition">دخول للمنصة</button>
        <p className="text-center text-sm text-slate-500">ليس لديك حساب؟ <Link href="/register" className="text-blue-600 font-bold hover:underline">أنشئ حساباً جديداً</Link></p>
      </form>
    </div>
  );
}
EOFmkdir -p app/login && cat << 'EOF' > app/login/page.tsx
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function login(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) return;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.password) return;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return;

  const cookieStore = await cookies();
  cookieStore.set('userId', user.id, { httpOnly: true, path: '/' });
  redirect('/dashboard'); 
}

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 p-4">
      <form action={login} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-5 border border-slate-100">
        <h1 className="text-2xl font-bold text-center text-slate-800">تسجيل الدخول</h1>
        <input name="email" type="email" placeholder="البريد الإلكتروني" className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
        <input name="password" type="password" placeholder="كلمة المرور" className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl transition">دخول للمنصة</button>
        <p className="text-center text-sm text-slate-500">ليس لديك حساب؟ <Link href="/register" className="text-blue-600 font-bold hover:underline">أنشئ حساباً جديداً</Link></p>
      </form>
    </div>
  );
}
