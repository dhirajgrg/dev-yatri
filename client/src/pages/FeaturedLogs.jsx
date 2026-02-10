import React from 'react';
import { ArrowRight } from 'lucide-react';

function FeaturedLogs() {
	return (
		<div className='mx-20 mt-28 py-10'>
			<div className='flex justify-between text-md text-terminal-black font-press  border-terminal-black border-b-4 pb-6'>
				<h1>_FEATURED_LOGS</h1>
				<p className='flex items-center'>
					VIEW_ALL
					<span>
						<ArrowRight />
					</span>
				</p>
			</div>
		</div>
	);
}

export default FeaturedLogs;
