import 'dotenv/config';
import { prisma } from './src/common/prisma/contect.prisma.js';

async function main() {
  const showtimes = await prisma.lichChieu.findMany({
    where: {
      ngay_gio_chieu: {
        gte: new Date('2026-07-29T00:00:00.000Z')
      }
    },
    select: {
      ngay_gio_chieu: true
    }
  });

  const dates = new Set(showtimes.map(st => {
    const d = new Date(st.ngay_gio_chieu);
    d.setHours(d.getHours() + 7);
    return d.toISOString().split('T')[0];
  }));
  console.log('Unique dates starting from 2026-07-29:', Array.from(dates));
  console.log('Total days:', dates.size);
}
main().catch(console.error).finally(() => prisma.$disconnect());
