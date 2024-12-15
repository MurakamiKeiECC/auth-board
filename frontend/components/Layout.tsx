import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}