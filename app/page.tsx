export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header / Navigation */}
      <nav className="p-6 border-b flex justify-between items-center bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">🛒 MY SHOP THAILAND</h1>
        <div className="space-x-4">
          <button className="hover:underline">หน้าแรก</button>
          <button className="hover:underline">สินค้าทั้งหมด</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-20 text-center bg-blue-50">
        <h2 className="text-4xl font-extrabold mb-4">ยินดีต้อนรับสู่ร้านค้าของเรา</h2>
        <p className="text-lg text-gray-600">แหล่งรวมสินค้าคุณภาพ ส่งตรงถึงบ้านคุณ</p>
      </div>

      {/* Product List (ตัวอย่าง) */}
      <section className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="text-xl font-semibold">สินค้าตัวอย่าง 1</h3>
          <p className="text-blue-600 font-bold mt-2">฿500.00</p>
          <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            เพิ่มลงตะกร้า
          </button>
        </div>
        {/* เพิ่มสินค้าอื่นๆ ได้ที่นี่ */}
      </section>
    </main>
  );
}