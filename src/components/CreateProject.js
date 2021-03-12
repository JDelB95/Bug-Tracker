import React, { useState } from 'react';

const CreateProject = () => {
    const [projects, setProjects] = useState([
        {name: 'Reddit/Twitch Chat', description:'View reddit comments', developers: 'Hello!'},
        {name: 'Beer Reviews', description: 'Review beer', developers: 'Hello!'}
        ]);
    const [newProject, setnewProject] = useState({name: '', description: ''});

    const handleSubmit = event => {
        setProjects([...projects, newProject]);
        event.preventDefault();
    }

    const handleNameChange = event => {
        setnewProject({...newProject, name: event.target.value});
    }

    const handleDescriptionChange = event => {
        setnewProject({...newProject, description: event.target.value});
    }

    const list = projects.map(project => <li key={project.description}>{project.name + " - " + project.description}</li>)

    if(projects != null) {
        return(
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Add New Project
                            <input type="text" placeholder="Project Name" value={newProject.name} onChange={handleNameChange} />
                        </label>
                        
                        <label>
                            Project description
                            <textarea type="text" placeholder=" Project description" value={newProject.description} onChange={handleDescriptionChange} />
                        </label>
                        <button type="submit">Create Project</button>
                    </form>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }else {
        return(
            <div>Looks like you need to add some projects!</div>
        );
    }
}

export default CreateProject;