import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Geliştirme sunucusunu telefondan açabilmek için: bilgisayar iPhone erişim noktasına
  // bağlıyken aldığı IP. Bu adres dışından açılan sayfada Next dev, JS dosyalarını engeller.
  allowedDevOrigins: ["172.20.10.7"],
  // Sol alttaki "N" geliştirme göstergesi kapalı (yayındaki sitede zaten hiç görünmez)
  devIndicators: false,
};

export default nextConfig;
