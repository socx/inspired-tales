import Logo from '@/components/ui/logo'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header className="fixed w-full z-30">
      <div
        className="absolute inset-0 bg-white bg-opacity-70 border-b border-slate-200 backdrop-blur -z-10 dark:bg-slate-900 dark:border-slate-800"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="grow">
            <div className="flex items-center">
              <Logo />
              
              <h1 className="h2 text-slate-800 mb-4 dark:text-slate-200 ml-10">Inspired Tales</h1>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="flex">
            {/* Right side elements links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li className="ml-4">
                <a className="btn-sm inline-flex items-center text-slate-100 bg-blue-600 hover:bg-blue-700 shadow-sm" href="#0">
                  Give Feedback
                </a>
              </li> */}
              {/* Lights switch */}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
