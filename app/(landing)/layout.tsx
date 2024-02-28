import Mainabar from "@/components/mainbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <main className="h-full bg-[#050b17] overflow-auto relative">
    //   <Mainabar />
    //   <div className="mx-auto max-w-screen-xl h-full w-full">
    //     {children}
    //   </div>
    // </main>
    <div className="h-screen flex flex-col bg-white">
      <Mainabar />
      <div className="flex-grow overflow-auto px-4 py-4">{children}</div>
    </div>
  );
};

export default LandingLayout;
