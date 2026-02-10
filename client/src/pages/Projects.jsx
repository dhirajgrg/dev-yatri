import React from 'react';
import { FolderOpen } from 'lucide-react';
import ProjectCards from '../components/ProjectCards';

function Projects() {
	return (
		<div className='bg-terminal-black  py-20 px-10'>
            <div className='flex gap-4 font-press py-10'>
                <FolderOpen color='var(--terminal-green)'/>
                <h1>PROJECTS_ARCHIVE</h1>

            </div>

			<ProjectCards />
		</div>
	);
}

export default Projects;
