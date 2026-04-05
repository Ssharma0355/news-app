const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-900 text-white flex flex-col p-5">
        <h2 className="text-2xl font-bold mb-8">Logo</h2>
  
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:text-gray-300">Dashboard</a>
          <a href="#" className="hover:text-gray-300">Users</a>
          <a href="#" className="hover:text-gray-300">Settings</a>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;