import Navbar from "../features/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center bg-gray-50">
      <Navbar />
      <div className="mt-8 flex-grow mx-20 md:mx-40">{children}</div>
    </div>
  );
}
