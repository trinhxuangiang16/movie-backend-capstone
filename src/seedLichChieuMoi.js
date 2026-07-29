import 'dotenv/config';
import { prisma } from './common/prisma/contect.prisma.js';

const START_DATE = new Date('2026-07-29T00:00:00.000+07:00'); // Ngày bắt đầu (29/07/2026)
const NUM_DAYS = 6;
const SLOTS_PER_DAY = 12;
const SLOT_INTERVAL_MINUTES = 100;

const PRICE_LIST = [75000, 90000, 120000, 150000];

function randomPrice() {
  return PRICE_LIST[Math.floor(Math.random() * PRICE_LIST.length)];
}

async function seedLichChieuMoi() {
  console.log('Bắt đầu quá trình seed dữ liệu lịch chiếu...');

  try {
    const danhSachPhim = await prisma.phim.findMany({
      where: { isDeleted: false }
    });

    if (danhSachPhim.length === 0) {
      console.log('Không có phim nào trong cơ sở dữ liệu. Vui lòng seed Phim trước.');
      return;
    }

    const heThongRapList = await prisma.heThongRap.findMany({
      include: {
        CumRap: {
          include: {
            RapPhim: true
          }
        }
      }
    });

    const dsLichChieuTaoMoi = [];
    let phimIndex = 0;

    await prisma.lichChieu.deleteMany({
      where: {
        ngay_gio_chieu: {
          gte: START_DATE
        }
      }
    });

    for (const htr of heThongRapList) {
      const cumRaps = htr.CumRap.slice(0, 6);

      for (const cr of cumRaps) {
        const rapPhims = cr.RapPhim.slice(0, 3);

        for (const rp of rapPhims) {
          for (let day = 0; day < NUM_DAYS; day++) {
            const phimChoRap = [];
            for (let i = 0; i < 7; i++) {
              phimChoRap.push(danhSachPhim[(phimIndex + i) % danhSachPhim.length]);
            }
            phimIndex += 7;
            let currentSlotTime = new Date(START_DATE);
            currentSlotTime.setDate(currentSlotTime.getDate() + day);
            currentSlotTime.setHours(8, 0, 0, 0);

            for (let slot = 0; slot < SLOTS_PER_DAY; slot++) {
              const phim = phimChoRap[slot % phimChoRap.length];

              dsLichChieuTaoMoi.push({
                ma_rap: rp.ma_rap,
                ma_phim: phim.ma_phim,
                ngay_gio_chieu: new Date(currentSlotTime),
                gia_ve: randomPrice(),
              });

              currentSlotTime.setMinutes(currentSlotTime.getMinutes() + SLOT_INTERVAL_MINUTES);
            }
          }
        }
      }
    }

    console.log(`Đã chuẩn bị ${dsLichChieuTaoMoi.length} bản ghi lịch chiếu.`);
    console.log('Đang ghi vào cơ sở dữ liệu...');

    const result = await prisma.lichChieu.createMany({
      data: dsLichChieuTaoMoi,
    });

    console.log(`Seed thành công! Đã tạo ${result.count} lịch chiếu mới.`);
  } catch (error) {
    console.error('Lỗi trong quá trình seed dữ liệu:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedLichChieuMoi();
