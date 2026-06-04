import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80"
          alt="Modern office"
          fill
          className="object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-flex items-center rounded-full bg-primary-50 border border-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 uppercase tracking-wide">
              Perusahaan Terpadu
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-[1.15]">
              Membangun nilai <br />
              yang berkelanjutan
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Teknologi, pertanian, pendidikan, dan sosial — empat pilar yang
              dijalankan oleh Konfigura Corp untuk menciptakan dampak nyata demi
              masa depan yang lebih produktif dan sejahtera.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/ecosystem"
                className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700 transition"
              >
                Lihat Ekosistem
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg border border-neutral-300 px-6 py-3 text-neutral-900 font-semibold hover:border-primary-500 hover:text-primary-700 transition"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <p className="text-3xl font-bold text-primary-900">4+</p>
                <p className="text-sm text-neutral-600 mt-1">Unit Bisnis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-900">200+</p>
                <p className="text-sm text-neutral-600 mt-1">Karyawan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-900">15+</p>
                <p className="text-sm text-neutral-600 mt-1">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Tim Konfigura"
                width={600}
                height={500}
                priority
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
