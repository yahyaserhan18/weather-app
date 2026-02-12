import { CloudSunIcon, RadioIcon } from './Icons';

function Header() {
    return (
        <header>
          <div className="flex justify-between items-center gap-2 sm:gap-4">
           <div className="flex items-center gap-2 sm:gap-4">
            <div className="text-blue-400 bg-slate-800 p-2 sm:p-3 rounded-lg">
              <CloudSunIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
                <div>
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-100">Weather App</h1>
                    <h3 className="hidden sm:block text-xs sm:text-sm text-slate-400">Real-time updates every 15 seconds</h3>
                </div>
           </div>
            <div className="bg-slate-800 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 text-green-400 flex-shrink-0">
              <RadioIcon className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Live</span>
            </div>
          </div>
        </header>
    )
}

export default Header;