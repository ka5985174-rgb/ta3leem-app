import { prisma } from '@/lib/prisma';
import HomeClient from '@/components/HomeClient';

export default async function Dashboard() {
  const dbCourses = await prisma.course.findMany({
    orderBy: { createdAt: 'desc' },
    take: 6
  });

  return <HomeClient courses={dbCourses} />;
}
