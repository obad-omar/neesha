import { useState } from "react";
import { ShoppingCart, X, Trash2, Plus, Minus, Send } from "lucide-react";

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface MenuItem {
  name: string;
  price: number;
  img: string;
}

interface MenuSection {
  section: string;
  emoji: string;
  items: MenuItem[];
}

const MENU_DATA: MenuSection[] = [
  {
    section: "المناقيش",
    emoji: "🥙",
    items: [
      { name: "مناقيش دجاج", price: 12, img: "https://raw.githubusercontent.com/obad-omar/naisha/c357f8239142717af50a264157216225db140449/images/WhatsApp%20Image%202026-01-29%20at%2011.25.34%20PM.jpeg" },
      { name: "مناقيش مكس أجبان", price: 12, img: "https://raw.githubusercontent.com/obad-omar/naisha/c357f8239142717af50a264157216225db140449/images/WhatsApp%20Image%202026-01-29%20at%2011.57.10%20PM.jpeg" },
      { name: "مناقيش زعتر", price: 9, img: "https://raw.githubusercontent.com/obad-omar/naisha/c357f8239142717af50a264157216225db140449/images/WhatsApp%20Image%202026-01-29%20at%2011.35.02%20PM.jpeg" },
      { name: "مناقيش محمرة", price: 9, img: "https://raw.githubusercontent.com/obad-omar/naisha/c357f8239142717af50a264157216225db140449/images/WhatsApp%20Image%202026-01-30%20at%2012.01.16%20AM.jpeg" },
      { name: "مناقيش لبنة", price: 9, img: "https://raw.githubusercontent.com/obad-omar/naisha/c357f8239142717af50a264157216225db140449/images/WhatsApp%20Image%202026-01-29%20at%2011.52.32%20PM.jpeg" },
      { name: "مناقيش عكاوي", price: 9, img: "https://raw.githubusercontent.com/obad-omar/naisha/c357f8239142717af50a264157216225db140449/images/WhatsApp%20Image%202026-01-29%20at%2011.56.51%20PM.jpeg" },
      { name: "مناقيش جبن سائل", price: 9, img: "https://raw.githubusercontent.com/obad-omar/naisha/c357f8239142717af50a264157216225db140449/images/WhatsApp%20Image%202026-01-29%20at%2011.58.52%20PM.jpeg" },
    ],
  },
  {
    section: "الخلية",
    emoji: "🐝",
    items: [
      { name: "خلية كلاسيك صغير", price: 16, img: "https://images.unsplash.com/photo-1519869325930-281384150729?w=300" },
      { name: "خلية كلاسيك كبير", price: 35, img: "https://images.unsplash.com/photo-1519869325930-281384150729?w=300" },
      { name: "سينابون صغير", price: 18, img: "https://via.placeholder.com/150?text=سينابون" },
      { name: "سينابون كبير", price: 38, img: "https://via.placeholder.com/150?text=سينابون" },
    ],
  },
  {
    section: "ميني معجنات",
    emoji: "🥐",
    items: [
      { name: "ميني أقمار", price: 9, img: "https://via.placeholder.com/150?text=ميني+أقمار" },
      { name: "أنصاف قمر دجاج", price: 9, img: "https://via.placeholder.com/150?text=أنصاف+قمر" },
      { name: "أنصاف قمر جبن", price: 9, img: "https://via.placeholder.com/150?text=أنصاف+قمر" },
      { name: "ميني كاب", price: 9, img: "https://via.placeholder.com/150?text=ميني+كاب" },
    ],
  },
  {
    section: "إضافات",
    emoji: "➕",
    items: [
      { name: "سمبوسة جبن", price: 9, img: "https://via.placeholder.com/150?text=سمبوسة" },
      { name: "سمبوسة دجاج", price: 9, img: "https://via.placeholder.com/150?text=سمبوسة" },
      { name: "حساوي", price: 10, img: "https://via.placeholder.com/150?text=حساوي" },
      { name: "أنصاف حساوي", price: 9, img: "https://via.placeholder.com/150?text=حساوي" },
      { name: "بسبوسة", price: 10, img: "https://via.placeholder.com/150?text=بسبوسة" },
      { name: "ورق عنب", price: 30, img: "https://raw.githubusercontent.com/obad-omar/naisha/9bc9b7726a8d2134cae2c7f447121215b975ea1a/images/WhatsApp%20Image%202026-01-21%20at%209.24.05%20PM%20(1).jpeg" },
      { name: "حلا نيشا", price: 10, img: "https://via.placeholder.com/150?text=حلا+نيشا" },
    ],
  },
  {
    section: "حمسات",
    emoji: "🍳",
    items: [
      { name: "حمسة دجاج", price: 12, img: "https://via.placeholder.com/150?text=حمسة" },
      { name: "حمسة لحم", price: 13, img: "https://via.placeholder.com/150?text=حمسة" },
      { name: "حمسة بيض", price: 11, img: "https://via.placeholder.com/150?text=حمسة" },
      { name: "حمسة خضار", price: 11, img: "https://via.placeholder.com/150?text=حمسة" },
      { name: "بوكس صباحيات", price: 60, img: "https://via.placeholder.com/150?text=بوكس" },
      { name: "بوكس أمسية", price: 100, img: "https://via.placeholder.com/150?text=بوكس" },
    ],
  },
  {
    section: "البيتزا",
    emoji: "🍕",
    items: [
      { name: "بيتزا دجاج", price: 13, img: "https://raw.githubusercontent.com/obad-omar/naisha/9bc9b7726a8d2134cae2c7f447121215b975ea1a/images/WhatsApp%20Image%202026-01-21%20at%209.24.07%20PM.jpeg" },
      { name: "بيتزا ببروني", price: 16, img: "https://raw.githubusercontent.com/obad-omar/naisha/07db7cffb2fd672b11d84d1cb48278c824595826/images/WhatsApp%20Image%202026-01-27%20at%2011.51.14%20PM.jpeg" },
      { name: "بيتزا نقانق", price: 16, img: "https://raw.githubusercontent.com/obad-omar/naisha/07db7cffb2fd672b11d84d1cb48278c824595826/images/WhatsApp%20Image%202026-01-27%20at%2011.53.42%20PM.jpeg" },
      { name: "بيتزا لحم", price: 18, img: "https://raw.githubusercontent.com/obad-omar/naisha/07db7cffb2fd672b11d84d1cb48278c824595826/images/WhatsApp%20Image%202026-01-27%20at%2011.55.03%20PM.jpeg" },
      { name: "بيتزا رانش", price: 18, img: "https://raw.githubusercontent.com/obad-omar/naisha/07db7cffb2fd672b11d84d1cb48278c824595826/images/WhatsApp%20Image%202026-01-27%20at%2011.58.54%20PM.jpeg" },
      { name: "بيتزا مارجريتا", price: 16, img: "https://raw.githubusercontent.com/obad-omar/naisha/c578c458b1a49211a3eedde8deea8d139e51fbd7/images/WhatsApp%20Image%202026-01-28%20at%2012.15.16%20AM.jpeg" },
      { name: "بيتزا شاورما", price: 17, img: "https://via.placeholder.com/150?text=بيتزا" },
    ],
  },
  {
    section: "شاورما",
    emoji: "🌯",
    items: [
      { name: "شاورما صاروخ", price: 12, img: "https://via.placeholder.com/150?text=شاورما" },
      { name: "عربي كبير", price: 28, img: "https://via.placeholder.com/150?text=عربي" },
      { name: "عربي صغير", price: 14, img: "https://via.placeholder.com/150?text=عربي" },
      { name: "ساندوتش شاورما", price: 7, img: "https://via.placeholder.com/150?text=ساندوتش" },
      { name: "شاورما عائلي", price: 45, img: "https://via.placeholder.com/150?text=عائلي" },
      { name: "شاورما نيشا", price: 100, img: "https://via.placeholder.com/150?text=نيشا" },
    ],
  },
  {
    section: "بوكسات",
    emoji: "📦",
    items: [
      { name: "بوكس لمتنا", price: 23, img: "https://via.placeholder.com/150?text=بوكس" },
      { name: "بوكس جمعتنا", price: 49, img: "https://via.placeholder.com/150?text=بوكس" },
      { name: "بوكس نيشا", price: 60, img: "https://via.placeholder.com/150?text=بوكس" },
      { name: "بوكس نيشا بلس", price: 80, img: "https://via.placeholder.com/150?text=بوكس" },
    ],
  },
];

export default function Store() {
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    type: "delivery",
    notes: "",
  });

  const addToCart = (name: string, price: number) => {
    setCart((prev) => ({
      ...prev,
      [name]: prev[name]
        ? { ...prev[name], qty: prev[name].qty + 1 }
        : { name, price, qty: 1 },
    }));
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[name];
      return newCart;
    });
  };

  const updateQty = (name: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(name);
    } else {
      setCart((prev) => ({
        ...prev,
        [name]: { ...prev[name], qty },
      }));
    }
  };

  const clearCart = () => {
    if (window.confirm("هل تريد حذف جميع الطلبات؟")) {
      setCart({});
    }
  };

  const cartCount = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = Object.values(cart).reduce((sum, item) => sum + item.qty * item.price, 0);

  const sendOrder = () => {
    if (!formData.name.trim()) {
      alert("فضلاً أدخل اسمك");
      return;
    }
    if (!formData.phone.trim()) {
      alert("فضلاً أدخل رقم الجوال");
      return;
    }
    if (Object.keys(cart).length === 0) {
      alert("السلة فارغة!");
      return;
    }

    let message = `🍕 *طلب جديد من نيشا* 🍕\n\n`;
    message += `👤 *الاسم:* <LaTex>${formData.name}\n`;
    message += `📱 *الجوال:* $</LaTex>{formData.phone}\n`;
    message += `📍 *نوع الاستلام:* <LaTex>${formData.type === "delivery" ? "توصيل للموقع" : "استلام من الفرع"}\n`;
    if (formData.address) {
      message += `📌 *العنوان:* $</LaTex>{formData.address}\n`;
    }
    if (formData.notes) {
      message += `📝 *ملاحظات:* <LaTex>${formData.notes}\n`;
    }
    message += `\n━━━━━━━━━━━━━━━━\n`;
    message += `*📋 الطلبات:*\n`;

    Object.values(cart).forEach((item) => {
      message += `• $</LaTex>{item.name} × <LaTex>${item.qty} = $</LaTex>{item.qty * item.price} ر.س\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━\n`;
    message += `*💰 الإجمالي: <LaTex>${cartTotal} ر.س*\n`;
    message += `*📦 عدد الأصناف: $</LaTex>{cartCount}*\n`;

    const waUrl = `https://wa.me/966558608699?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setIsModalOpen(false);
    setCart({});
    setFormData({ name: "", phone: "", address: "", type: "delivery", notes: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#f5f3ed] pb-32">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#4F6F52]/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#4F6F52] rounded-lg flex items-center justify-center text-white font-black text-lg">
            N
          </div>
          <div className="font-black text-[#4F6F52] text-sm">نيشا NEESHA</div>
        </div>
        <div className="text-xs font-bold text-gray-600">اطلب الآن وسنصلك</div>
      </header>

      <nav className="sticky top-[56px] z-30 bg-[#F9F7F2] border-b border-[#4F6F52]/10 overflow-x-auto px-4 py-3 flex gap-2 scrollbar-hide">
        {MENU_DATA.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-bold text-sm transition-all ${
              activeCategory === idx
                ? "bg-[#4F6F52] text-white shadow-lg"
                : "bg-white text-[#4F6F52] border border-[#4F6F52]/20"
            }`}
          >
            {section.emoji} {section.section}
          </button>
        ))}
      </nav>

      <main className="px-4 py-6">
        {MENU_DATA.map((section, sIdx) => (
          <div key={sIdx} className={sIdx !== activeCategory ? "hidden" : ""}>
            <h2 className="text-xl font-black text-[#4F6F52] mb-4 flex items-center gap-2">
              <span className="text-2xl">{section.emoji}</span>
              {section.section}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-32 bg-gray-200">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/150?text=نيشا";
                      }}
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="font-bold text-sm text-[#4F6F52] mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="font-black text-[#4F6F52] text-base mb-2">{item.price} ر.س</p>

                    <button
                      onClick={() => addToCart(item.name, item.price)}
                      className="w-full bg-[#4F6F52] text-white py-2 rounded-lg font-bold text-sm hover:bg-[#3a5139] transition-colors active:scale-95"
                    >
                      + أضف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {cartCount > 0 && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-6 left-6 right-6 bg-[#4F6F52] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center justify-between font-bold z-50 hover:bg-[#3a5139] transition-colors active:scale-95"
        >
          <div className="flex items-center gap-3">
            <ShoppingCart size={24} />
            <span className="bg-white text-[#4F6F52] px-3 py-1 rounded-full font-black">
              {cartCount}
            </span>
            <span>سلة الطلبات</span>
          </div>
          <span className="font-black text-lg">{cartTotal} ر.س</span>
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up sm:animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-black text-[#4F6F52]">🛒 سلة الطلبات</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="px-6 py-4">
              {Object.values(cart).length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 font-bold">السلة فارغة</p>
                </div>
              ) : (
                <div className="space-y-3 mb-6">
                  {Object.values(cart).map((item) => (
                    <div
                      key={item.name}
                      className="bg-gradient-to-r from-[#F9F7F2] to-white p-4 rounded-xl flex items-center justify-between border border-[#4F6F52]/10"
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-[#4F6F52] mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.price} ر.س × {item.qty}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-white border border-[#4F6F52]/20 rounded-lg">
                          <button
                            onClick={() => updateQty(item.name, item.qty - 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={16} className="text-[#4F6F52]" />
                          </button>
                          <span className="px-3 font-bold text-[#4F6F52]">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.name, item.qty + 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={16} className="text-[#4F6F52]" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="p-2 hover:bg-red-100 text-red-500 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="text-right ml-4 font-black text-[#4F6F52] text-lg">
                        {item.qty * item.price} ر.س
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {Object.values(cart).length > 0 && (
                <>
                  <div className="border-t-2 border-dashed border-[#4F6F52]/20 my-4"></div>

                  <div className="bg-gradient-to-r from-[#4F6F52] to-[#3a5139] text-white p-4 rounded-xl mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">عدد الأصناف:</span>
                      <span className="font-black text-lg">{cartCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">الإجمالي:</span>
                      <span className="font-black text-2xl">{cartTotal} ر.س</span>
                    </div>
                  </div>

                  <button
                    onClick={clearCart}
                    className="w-full mb-4 bg-red-100 text-red-600 py-2 rounded-lg font-bold hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} />
                    تنظيف السلة
                  </button>
                </>
              )}
            </div>

            {Object.values(cart).length > 0 && (
              <div className="border-t border-gray-200 px-6 py-6">
                <h3 className="text-lg font-black text-[#4F6F52] mb-4">📋 بيانات الطلب</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-[#4F6F52] mb-2">الاسم *</label>
                    <input
                      type="text"
                      placeholder="مثال: محمد أحمد"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[#4F6F52]/20 rounded-lg bg-[#F9F7F2] focus:outline-none focus:border-[#4F6F52]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#4F6F52] mb-2">رقم الجوال *</label>
                    <input
                      type="tel"
                      placeholder="05xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[#4F6F52]/20 rounded-lg bg-[#F9F7F2] focus:outline-none focus:border-[#4F6F52]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#4F6F52] mb-2">نوع الاستلام</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 border border-[#4F6F52]/20 rounded-lg bg-[#F9F7F2] focus:outline-none focus:border-[#4F6F52]"
                    >
                      <option value="delivery">🚗 توصيل للموقع</option>
                      <option value="pickup">🏪 استلام من الفرع</option>
                    </select>
                  </div>

                  {formData.type === "delivery" && (
                    <div>
                      <label className="block font-bold text-[#4F6F52] mb-2">العنوان</label>
                      <textarea
                        placeholder="أدخل عنوان التوصيل"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 border border-[#4F6F52]/20 rounded-lg bg-[#F9F7F2] focus:outline-none focus:border-[#4F6F52] resize-none"
                        rows={2}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block font-bold text-[#4F6F52] mb-2">ملاحظات إضافية</label>
                    <textarea
                      placeholder="مثال: بدون بصل، إضافة صلصة..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 border border-[#4F6F52]/20 rounded-lg bg-[#F9F7F2] focus:outline-none focus:border-[#4F6F52] resize-none"
                      rows={2}
                    />
                  </div>
                </div>

                <button
                  onClick={sendOrder}
                  className="w-full mt-6 bg-gradient-to-r from-[#4F6F52] to-[#3a5139] text-white py-4 rounded-xl font-black text-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  إرسال الطلب عبر واتساب
                </button>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full mt-3 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  إلغاء
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}