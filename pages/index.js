import Image from 'next/image'
import Link from "next/link"

import MainLayout from '../layout/main-layout'

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col max-w-2xl">
        <div>
          <Image src="/img/cover.jpg" width="800" height="800" />
        </div>
        <div className="flex justify-center py-4">
          <span className=" text-4xl font-bold text-gray-800">
            หากคุณมีปัญหาสิว?
          </span>
        </div>
        <div className="flex pt-2">
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2">
            <div className="flex flex-col items-center">
              <span className="text-gray-800 font-bold text-2xl pb-2">
                สิวอักเสบ
              </span>
              <Image src="/img/acne-01.png" width="800" height="800" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-800 font-bold text-2xl pb-2">
                สิวอุดตัว
              </span>
              <Image src="/img/acne-02.png" width="800" height="800" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-800 font-bold text-2xl pb-2">
                สิวฮอร์โมน
              </span>
              <Image src="/img/acne-03.png" width="800" height="800" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-800 font-bold text-2xl pb-2">
                สิวผด
              </span>
              <Image src="/img/acne-04.png" width="800" height="800" />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <span className=" text-4xl font-bold text-gray-800">
            วิตามินนี้เหมาะกับคุณ?
          </span>
        </div>
        <div>
          <Image src="/img/why-vita-ac.jpg" width="800" height="760" />
        </div>
        <div>
          <Image src="/img/web.gif" width="800" height="450" />
        </div>
        <div className="flex justify-center py-6">
          <span className=" text-4xl font-bold text-gray-800">
            ทำไมต้อง Vista AC?
          </span>
        </div>
        <Image src="/img/features.jpg" width="800" height="800" />
        <Image src="/img/guarantee.jpg" width="800" height="800" />
        <Image src="/img/review-01.jpg" width="800" height="800" />
        <Image src="/img/review-02.jpg" width="800" height="1066" />
        <Image src="/img/doctor.jpg" width="800" height="800" />
        <div className="flex flex-col flex-wrap gap-2 w-full px-4 py-4">
          <Link href="https://www.lazada.co.th/shop/debest-shop">
            <div className="flex pl-4 py-2 rounded-xl bg-lazada">
              <img className="w-52 object-contain " src="/img/lazada-01.png" />
            </div>
          </Link>
          <Link href="https://shopee.co.th/iounnherbs?smtt=0.0.9">
            <div className="flex pl-4 py-2 rounded-xl bg-shopee">
              <img className="w-52 object-contain " src="/img/shopee-01.png" />
            </div>
          </Link>
          <Link href="https://lin.ee/yB3s6hU">
            <div className="flex pl-4 py-2 rounded-xl bg-line">
              <img className="w-52 object-contain " src="/img/line-01.png" />
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>)
}
