function Loader() {
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-slate-950 overflow-hidden'>
      {/* Ambient glow */}
      <div className='absolute w-96 h-96 bg-white/5 rounded-full blur-3xl' />

      {/* Name */}
      <div className='relative'>
        <h1 className='text-7xl md:text-9xl font-black tracking-[0.15em] text-slate-800'>
          NAEEM
        </h1>

        {/* Moving shine */}
        <div
          className='
            absolute top-0 bottom-0 -left-1/2 w-1/3
            bg-gradient-to-r
            from-transparent
            via-white/80
            to-transparent
            blur-md
            animate-[shine_1.8s_ease-in-out_infinite]
          '
        />

        {/* Glowing animated text */}
        <h1
          className='
            absolute inset-0
            text-7xl md:text-9xl
            font-black
            tracking-[0.15em]
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-white
            via-slate-400
            to-white
            opacity-0
            animate-[textGlow_1.8s_ease-in-out_infinite]
          '
        >
          NAEEM
        </h1>
      </div>

      {/* Loading text */}
      <div className='mt-10 flex items-center text-sm tracking-[0.3em] uppercase text-slate-500'>
        <span>Loading</span>

        <div className='flex ml-1'>
          <span className='animate-bounce'>.</span>
          <span className='animate-bounce [animation-delay:150ms]'>.</span>
          <span className='animate-bounce [animation-delay:300ms]'>.</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className='mt-5 h-[2px] w-48 overflow-hidden bg-slate-800'>
        <div
          className='
            h-full w-1/2
            bg-white
            shadow-[0_0_15px_rgba(255,255,255,0.8)]
            animate-[progress_1.5s_ease-in-out_infinite]
          '
        />
      </div>

      {/* Inline animations */}
      <style>{`
        @keyframes shine {
          0% {
            left: -50%;
          }

          100% {
            left: 120%;
          }
        }

        @keyframes textGlow {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }

          40% {
            opacity: 0.9;
            transform: scale(1.03);
          }

          70% {
            opacity: 0;
            transform: scale(1);
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-150%);
          }

          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  )
}

export default Loader
