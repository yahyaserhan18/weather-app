function Header() {
    return (
        <header>
          <div className="flex justify-between items-center">
           <div className="flex items-center gap-2">
            <div className="text-2xl bg-gray-100  p-2 rounded">🌦️</div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-700">Weather App Dashboard</h1>
                    <h3 className="text-sm text-gray-500">Real-time weather updates every 15 seconds</h3>
                </div>
           </div>
            <div className="bg-gray-100 rounded-full px-2 py-1">🔴Live</div>
          </div>
        </header>
    )
}

export default Header;