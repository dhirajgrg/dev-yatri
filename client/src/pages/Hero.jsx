import React from 'react';
function Hero() {
	return (
		<div className='bg-terminal-green mt-48 mx-28'>
			<div className='px-20 py-10   bg-terminal-black -translate-x-4 -translate-y-4 border-2 border-terminal-black flex flex-col gap-10'>
				<p className='bg-terminal-green w-fit  px-6 py-2 text-terminal-black font-press text-xs'>
					SYSTEM STATUS: ONLINE // NEPAL
				</p>

				<div>
					<h1 className='text-6xl font-black font-press tracking-tighter'>
						THE JOURNEY OF A
					</h1>

					<h1 className=' text-terminal-green  text-6xl font-black font-press tracking-tighter'>
						NEPALI_DEV
					</h1>
				</div>

				<div className='text-start text-terminal-green text-lg font-mono'>
					<p> {'>  '}Initializing connection to digital peaks...</p>
					<p>
						{'>  '}Bridging Himalayan culture with terminal-grade
						precision.
					</p>
				</div>
				<div className='flex gap-10'>
					<button className='px-10 py-3 bg-terminal-green text-terminal-black font-press text-xs'>
						VIEW_PORTFOLIO.EXE
					</button>
					<button className='px-10 py-3 bg-terminal-black border-zinc-700 border-2 text-terminal-white font-press text-xs'>
						LATEST_LOGS.TXT
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
