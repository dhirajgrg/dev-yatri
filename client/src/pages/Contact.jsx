import React from 'react';

function Contact() {
	return (
		<div className='min-h-screen bg-black  py-28 flex flex-col items-center'>
			<div className='text-center mb-12'>
				<h1 className='text-2xl font-bold font-press text-terminal-green mb-2 '>
					_CONTACT_PROTOCOL
				</h1>
				<p className='text-xs tracking-[0.2em] opacity-80'>
					SEND_MESSAGE_THROUGH_TERMINAL_GATEWAY
				</p>
			</div>

			<form className='w-full max-w-xl space-y-10'>
				<div className='space-y-2'>
					<label className='block text-xs uppercase tracking-widest opacity-70'>
						Identifier:
					</label>
					<div className='flex items-center group'>
						<span className='text-terminal-green mr-4 text-lg font-bold'>
							{'>'}
						</span>
						<input
							type='text'
							placeholder='YOUR_NAME'
							className='bg-transparent border-b border-gray-800 w-full py-2 focus:outline-none focus:border-terminal-green transition-colors placeholder:text-gray-700 caret-terminal-green'
						/>
					</div>
				</div>

				<div className='space-y-2'>
					<label className='block text-xs uppercase tracking-widest opacity-70'>
						Return_Address:
					</label>
					<div className='flex items-center group'>
						<span className='text-terminal-green mr-4 text-lg font-bold'>
							{'>'}
						</span>
						<input
							type='email'
							placeholder='EMAIL@DOMAIN.COM'
							className='bg-transparent border-b border-gray-800 w-full py-2 focus:outline-none focus:border-terminal-green transition-colors placeholder:text-gray-700 caret-terminal-green'
						/>
					</div>
				</div>

				<div className='space-y-2'>
					<label className='block text-xs uppercase tracking-widest opacity-70'>
						Packet_Payload:
					</label>
					<div className='flex items-start group'>
						<span className='text-terminal-green mr-4 text-lg font-bold pt-1'>
							{'>'}
						</span>
						<textarea
							placeholder='TYPE_MESSAGE_HERE...'
							rows='4'
							className='bg-transparent border-b border-gray-800 w-full py-2 focus:outline-none focus:border-terminal-green transition-colors placeholder:text-gray-700 resize-none caret-terminal-green'
						/>
					</div>
				</div>

				{/* Submit Button */}
				<div className='flex justify-center pt-8'>
					<button
						type='submit'
						className='bg-terminal-green text-terminal-black font-press font-black px-10 py-3 '
					>
						INITIALIZE_TRANSMISSION.SH
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
