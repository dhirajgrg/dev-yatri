import React from 'react';
import { Share2, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='bg-black text-terminal-green font-mono py-28 px-20 border-t border-gray-900'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start'>
				<div className='flex flex-col space-y-6'>
					<div className='flex items-center gap-3'>
						<div className='border-2 border-terminal-green p-1'>
							<div className='bg-terminal-green text-black px-1 font-bold text-xs'>
								{'>_'}
							</div>
						</div>
						<h2 className='text-2xl font-black tracking-tighter'>
							DEVYATRI
						</h2>
					</div>
					<p className='text-sm leading-relaxed opacity-90'>
						{'>'} A chronicle of code and culture from Nepal. Built
						with terminal aesthetics.
					</p>
					<div className='flex gap-4'>
						<button className='border border-terminal-green p-2 hover:bg-terminal-green hover:text-black transition-all'>
							<Share2 size={18} />
						</button>
						<button className='border border-terminal-green p-2 hover:bg-terminal-green hover:text-black transition-all'>
							<Mail size={18} />
						</button>
					</div>
				</div>
				<div className='flex flex-col md:items-center'>
					<div className='space-y-4'>
						<h3 className='text-xs font-bold tracking-[0.3em] opacity-80'>
							_DIRECTORY
						</h3>
						<ul className='space-y-3 text-sm'>
							{['/home', '/about', '/portfolio', '/contact'].map(
								link => (
									<li key={link}>
										<a
											href={link}
											className='hover:translate-x-2 transition-transform duration-200 ease-out px-1 block w-fit '
										>
											{link}
										</a>
									</li>
								)
							)}
						</ul>
					</div>
				</div>
				<div className='flex flex-col md:items-end'>
					<div className='space-y-4 w-full md:w-auto'>
						<h3 className='text-xs font-bold tracking-[0.3em] opacity-80'>
							_POWER_STATUS
						</h3>
						<div className='border border-terminal-green p-6 min-w-[200px]'>
							<div className='flex items-center gap-4'>
								<div className='w-4 h-4 bg-terminal-green animate-pulse'></div>
								<div>
									<p className='font-bold text-sm'>
										BATTI_AYO
									</p>
									<p className='text-[10px] opacity-60 uppercase tracking-widest'>
										Link: Stable
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-60 tracking-widest gap-4'>
				<p>© 2024 DEVYATRI. ALL PROTOCOLS OBSERVED.</p>
				<div className='flex gap-6'>
					<span className='flex items-center gap-2'>
						<MapPin size={12} /> KATHMANDU.NP
					</span>
					<span className='flex items-center gap-2'>
						<Clock size={12} /> UTC+5:45
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
