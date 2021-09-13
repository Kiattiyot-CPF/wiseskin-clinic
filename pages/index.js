import Image from 'next/image'

import MainLayout from '../layout/main-layout'

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col  max-w-2xl">
        <div>
          <Image src="/img/ads01.jpg" width="800" height="800" />
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
          <Image src="/img/ads-02.jpg" width="800" height="760" />
        </div>
        <div>
          <button className="px-5 py-8 w-full text-white text-3xl bg-green-600">
            @Line ปรึกษาคุณหมอ (รอภาพ)
          </button>
        </div>
        <div className="flex justify-center py-6">
          <span className=" text-4xl font-bold text-gray-800">
            ทำไมต้อง Vista AC?
          </span>
        </div>
        <Image src="/img/ads-03.jpg" width="800" height="800" />
        <Image src="/img/award-01.png" width="800" height="800" />
        <Image src="/img/review-01.png" width="800" height="800" />
        <Image src="/img/review-01.png" width="800" height="800" />
        <div className="flex flex-col gap-2 pb-8 px-4">
          <button className="px-5 py-5 bg-green-600 text-2xl font-bold text-white rounded-md">
            @LINE
          </button>
          <button className="px-5 py-5 bg-yellow-500 text-2xl font-bold text-white rounded-md">
            Shopee
          </button>
          <button className="px-5 py-5 bg-indigo-800 text-2xl font-bold text-white rounded-md">
            Lazada
          </button>
        </div>
      </div>
    </MainLayout>)
}
