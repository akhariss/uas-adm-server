import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-3">
              Konfigura Corp
            </h3>
            <p className="text-primary-200 max-w-md leading-relaxed">
              Perusahaan terpadu yang berkomitmen menciptakan nilai melalui
              teknologi, pertanian, pendidikan, dan pemberdayaan sosial secara
              berkelanjutan.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Unit Bisnis
            </h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>Konfigura Tech</li>
              <li>Konfigura Farm</li>
              <li>Konfigura Institute</li>
              <li>Konfigura Foundation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-200 hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-primary-200 hover:text-white transition">
                  Ekosistem
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-white transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-primary-300">
          <p>© {new Date().getFullYear()} Konfigura Corp. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Jakarta, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
