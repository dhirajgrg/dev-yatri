import React from 'react';
import { MountainSnow } from 'lucide-react';

function Navbar() {
	return (
		<div className='fixed top-0 left-0 w-full z-50   h-20 bg-terminal-black flex justify-around items-center  border-terminal-green border-b-8 font-press text-sm'>
			<div className='flex items-center gap-1 justify-center'>
				<MountainSnow color='var(--terminal-green)' />
				<p className='text-terminal-green font-black '>DEV.YATRI</p>
			</div>
			<div className='flex gap-10'>
				<div>BLOG</div>
				<div>PROJECTS</div>
				<div>JOURNEY</div>
				<div>CONTACT</div>
			</div>
			<div>THEME TOOGLE</div>
		</div>
	);
}

export default Navbar;
