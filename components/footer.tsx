export function Footer() {
  return (
    <div className="text-center mt-12 pt-8 border-t border-white/10">
      <p className="text-gray-400 text-sm">
        Made with{' '}
        <a
          href="https://threejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          three.js
        </a>
      </p>
      <p className="text-gray-400 text-sm">
        Andrew Sink - {new Date().getFullYear()}
      </p>
    </div>
  )
}
