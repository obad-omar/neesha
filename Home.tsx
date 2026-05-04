import { useState } from "react";
import { X } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#f5f3ed]">
      <div className="sticky top-0 z-50 bg-[#2D4030] border-b border-[#D4AF37]/30 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2.5 px-4 text-[#D4AF37] text-sm font-bold tracking-wide">
          <span className="inline-block pr-12">✨ عرض الاثنين: اطلب فطيرة واحصل على الثانية مجاناً ✨</span>
          <span className="inline-block pr-12">🥐 معجنات طازة يومياً من الفرن إليك 🥐</span>
          <span className="inline-block pr-12">✨ عروض حصرية لمتابعينا على السناب ✨</span>
          <span className="inline-block pr-12">✨ عرض الاثنين: اطلب صاروخ واحصل على الثانية مجاناً ✨</span>
          <span className="inline-block pr-12">🎯 كادر قوي جداً</span>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-8 md:py-10">
        <header className="text-center mb-8 sm:mb-10 animate-fade-in-up">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3014/3014534.png"
              alt="Neesha Logo"
              className="w-16 sm:w-20 md:w-24 h-auto"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D4030] mb-2">نيشا</h1>
          <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide">
            Selected Pastries | معجنات مختارة بعناية
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <a
            href="/store"
            className="sm:col-span-2 bg-[#2D4030] text-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <span className="text-4xl sm:text-5xl">🛒</span>
            <span className="text-lg sm:text-xl font-bold">اطلب الآن</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1L36Z-hx735bBN0PDGL42rwaYL5H4dxpi/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-gray-100"
          >
            <span className="text-3xl sm:text-4xl">📜</span>
            <span className="font-bold text-[#2D4030] text-sm sm:text-base">المنيو</span>
            <span className="text-xs sm:text-sm text-gray-500">قائمة الطعام</span>
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-gray-100"
          >
            <span className="text-3xl sm:text-4xl">📍</span>
            <span className="font-bold text-[#2D4030] text-sm sm:text-base">موقعنا</span>
            <span className="text-xs sm:text-sm text-gray-500">زرنا في الفرع</span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-gray-100 cursor-pointer"
          >
            <span className="text-3xl sm:text-4xl">📞</span>
            <span className="font-bold text-[#2D4030] text-sm sm:text-base">تواصل معنا</span>
            <span className="text-xs sm:text-sm text-gray-500">دائماً في خدمتك</span>
          </button>

          <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-2 shadow-md border border-gray-100">
            <span className="text-3xl sm:text-4xl">⭐</span>
            <span className="font-bold text-[#2D4030] text-sm sm:text-base">4.9/5</span>
            <span className="text-xs sm:text-sm text-gray-500">تقييم عملائنا</span>
          </div>
        </div>

        <section className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 mb-8 sm:mb-10 animate-fade-in-up">
          <h3 className="text-base sm:text-lg font-bold text-[#2D4030] mb-4">ماذا يقولون عن نيشا؟</h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-xl border-r-4 border-[#2D4030] text-sm sm:text-base text-gray-700">
              "المعجنات خفيفة جداً والشاورما طعمه خيالي!"
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border-r-4 border-[#2D4030] text-sm sm:text-base text-gray-700">
              "أفضل مكان للمعجنات في المنطقة بدون منازع."
            </div>
          </div>
        </section>

        <div className="flex justify-center gap-4 sm:gap-5 mb-8 animate-fade-in-up">
          <a
            href="https://tiktok.com/@neesha_sa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-xl sm:text-2xl border border-gray-100"
          >
            📱
          </a>
          <a
            href="https://instagram.com/neesha.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-xl sm:text-2xl border border-gray-100"
          >
            📸
          </a>
          <a
            href="https://snapchat.com/add/neesha_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-xl sm:text-2xl border border-gray-100"
          >
            👻
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:w-full max-w-sm p-6 sm:p-8 shadow-2xl animate-slide-up sm:animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2D4030]">تواصل مباشرة</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-600 text-sm sm:text-base mb-6">اختر الوسيلة المناسبة لك</p>

            <div className="space-y-3">
              <a
                href="tel:+966558608699"
                className="block w-full bg-[#2D4030] text-white font-bold py-3 sm:py-4 rounded-xl text-center hover:bg-[#1a2818] transition-colors active:scale-95 text-sm sm:text-base"
              >
                📞 اتصال هاتفي
              </a>
              <a
                href="https://wa.me/966558608699"
                className="block w-full bg-[#25D366] text-white font-bold py-3 sm:py-4 rounded-xl text-center hover:bg-[#1da853] transition-colors active:scale-95 text-sm sm:text-base"
              >
                💬 محادثة واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}