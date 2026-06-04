export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Siapa Kami
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Konfigura Corp adalah perusahaan yang mengintegrasikan berbagai
              sektor dalam satu visi bersama — menciptakan solusi yang
              berdampak bagi masyarakat, mitra, dan generasi mendatang.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Didirikan dengan tekad untuk menjembatani kesenjangan antara
              inovasi teknologi dan kebutuhan dasar masyarakat, kami membangun
              ekosistem bisnis yang saling mendukung dan berkelanjutan.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-sm text-neutral-700">
                Transparansi
              </span>
              <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-sm text-neutral-700">
                Integritas
              </span>
              <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-sm text-neutral-700">
                Kolaborasi
              </span>
              <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-sm text-neutral-700">
                Keberlanjutan
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm">
              <h3 className="font-semibold text-primary-900 mb-2">
                Visi
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Menjadi perusahaan terpadu yang diakui atas kontribusi nyata
                dalam pembangunan bangsa.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm">
              <h3 className="font-semibold text-primary-900 mb-2">
                Misi
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Memberdayakan masyarakat lewat teknologi, pertanian, pendidikan,
                dan programs sosial yang inklusif.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm">
              <h3 className="font-semibold text-primary-900 mb-2">
                Nilai Inti
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Kejujuran, akuntabilitas, dan pemberdayaan sebagai fondasi
                setiap langkah operasional.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm">
              <h3 className="font-semibold text-primary-900 mb-2">
                Komitmen
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Menjalankan bisnis secara bertanggung jawab dan selaras dengan
                tujuan pembangunan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
