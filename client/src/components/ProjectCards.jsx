import React from 'react';

function ProjectCards() {
	return (
		<div className='max-w-96'>
			<p className='font-press bg-terminal-green text-terminal-black text-xs uppercase  w-fit px-4 translate-y-2 py-1 -translate-x-3'>
				shakari engine
			</p>
			<div className='h-64 bg-red-700 '>
				<img src='' alt='' />
			</div>
			<h1 className='pt-4 font-press text-terminal-green text-lg uppercase'>title</h1>
			<p className='py-4 font-mono text-sm'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quisquam, id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, cumque.
			</p>
			<div className='flex justify-start gap-6 text-terminal-green text-xs pb-4 uppercase'>
				<span>[REACT]</span>
				<span>[NODE]</span>
				<span>[EXPRESS]</span>
			</div>
			<button className='bg-terminal-green text-terminal-black font-press px-6 py-2 text-xs uppercase'>
				LAUNCH_EXE
			</button>
		</div>
	);
}

export default ProjectCards;
