type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-6 container m-auto gap-6 ">
      {children}
    </div>
  );
};
