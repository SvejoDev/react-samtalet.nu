import Navbar from "@/components/Navbar";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="p-8 flex flex-col gap-16">
        <h1 className="text-4xl font-bold text-center text-slate-800">
          Welcome to Samtalet.nu
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-600 mb-8">
            Your platform for meaningful conversations
          </p>
          <a
            href="/admin"
            className="bg-slate-800 text-white px-6 py-3 rounded-md hover:bg-slate-700 inline-block"
          >
            Go to Admin
          </a>
        </div>
      </main>
    </div>
  );
}
