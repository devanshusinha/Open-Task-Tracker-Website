export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="max-w-6xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-xl border-2 border-black px-3 py-1 shadow-[6px_6px_0_0_#000]">
              <span className="text-xl font-extrabold tracking-tight">
                Open Task Tracker
              </span>
            </div>
          </div>
          <div>
            <a
              href="https://buymeacoffee.com/devanshusinha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-yellow-300 px-4 py-2 font-semibold shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
            >
              <span>Buy me a coffee</span>
              <span>☕</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="text-center mt-8 mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-[-0.02em]">
            A fully open-source, 100% local task tracker for individuals
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            No servers. No sign-ups. Your tasks, on your machine. Fast, private,
            and delightful.
          </p>
        </section>

        <section>
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://github.com/devanshusinha/open-task-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-black text-white px-4 py-2 font-semibold shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.486 2 12.021c0 4.429 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.01-1.026-.014-1.862-2.782.605-3.369-1.194-3.369-1.194-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.953 0-1.094.39-1.99 1.03-2.691-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.378.202 2.397.1 2.65.64.701 1.028 1.597 1.028 2.691 0 3.848-2.337 4.697-4.566 4.945.36.31.682.921.682 1.856 0 1.34-.012 2.419-.012 2.749 0 .268.18.579.688.48A10.025 10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://storage.opentasktracker.org/Open%20Task%20Tracker-0.0.1-arm64.dmg.zip"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white text-black px-4 py-2 font-semibold shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M16.365 1.43a5.89 5.89 0 0 0-3.953 2.137c-.91 1.099-1.36 2.455-1.271 3.788 1.429.057 2.964-.79 3.914-1.97.95-1.182 1.426-2.6 1.31-3.955ZM18.83 12.8c-.028-2.913 2.38-4.318 2.49-4.387-1.36-1.986-3.47-2.26-4.218-2.287-1.796-.182-3.502 1.04-4.414 1.04-.923 0-2.318-1.02-3.808-.991-1.962.03-3.777 1.147-4.785 2.9-2.066 3.581-.527 8.85 1.484 11.744.984 1.418 2.134 3.01 3.66 2.954 1.483-.058 2.042-.956 3.833-.956 1.78 0 2.31.956 3.82.928 1.58-.03 2.58-1.447 3.558-2.872 1.16-1.699 1.64-3.35 1.66-3.439-.037-.014-3.18-1.213-3.282-4.634Z" />
                </svg>
                <span>Download for Mac (Apple Silicon)</span>
              </a>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-black overflow-hidden shadow-[10px_10px_0_0_#000]">
            <div className="w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/B22ckEoeU5I"
                title="Open Task Tracker Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
