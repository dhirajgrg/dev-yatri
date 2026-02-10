import React from 'react';

function Cards() {
	return (
		<div className='bg-terminal-green max-w-72 ml-20'>
			<div className=' max-w-72 bg-terminal-black -translate-x-2 -translate-y-2 border-terminal-black border-4'>
				<div className='h-48 bg-red-500 '>
					<img src='#' alt='#' />
				</div>
				<div className=' py-6'>
					<div  className='px-6'>
						<p className='font-press uppercase border-terminal-green border-2 py-1 w-fit px-4 text-terminal-green text-[7px]'>ui design</p>
						<h1 className='py-4 text-lg font-press uppercase'>heading</h1>
						<p className='pb-10 font-mono text-terminal-green opacity-65 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem atque aut odio iure sit ab!</p>
					</div>
					<div className='pt-6 flex items-center justify-around text-[8px] text-terminal-green border-t-2 border-gray-700'>
						<p className='font-press opacity-55'>2024.01.20</p>
						<button className='uppercase font-press'>READ_LOG</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
