import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

type EcosystemItem = {
  name: string;
  description: string;
  image: string;
};

export default async function EcosystemPage() {
  const items = await query<EcosystemItem>(
    "SELECT name, description, image FROM ecosystems ORDER BY id ASC"
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-primary-900 mb-4">
        Ekosistem Bisnis Kami
      </h1>
      <p className="text-lg text-neutral-600 mb-16 max-w-3xl">
        Empat unit bisnis yang saling terhubung, memperkuat fondasi teknologi,
        pertanian, pendidikan, dan kemanusiaan dalam satu ekosistem yang terpadu.
      </p>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center text-neutral-500">
          Belum ada data ekosistem. Silakan tambahkan data dari halaman admin.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-primary-900 mb-2">
                  {item.name}
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
