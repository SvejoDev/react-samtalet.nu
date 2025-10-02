export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white p-4 border-b-2 border-slate-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Samtalet.nu</h1>
          <a
            href="/admin"
            className="bg-slate-800 text-white rounded-md px-4 py-2 hover:bg-slate-700"
          >
            Admin
          </a>
        </div>
      </header>
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
