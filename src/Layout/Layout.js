import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="flex flex-col flex-1">
        <Navbar  />
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
            <MainContent />
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;