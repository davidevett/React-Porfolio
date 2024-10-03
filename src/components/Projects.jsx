// src/Projects.js

import { useEffect, useState } from 'react';
import 'bulma/css/bulma.css'; // Import Bulma for styling

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/davidevett/repos');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1 className="title">My GitHub Projects</h1>
            <div className="columns is-multiline">
                {projects.map((project) => (
                    <div className="column is-one-third" key={project.id}>
                        <div className="card">
                            <div className="card-content">
                                <h2 className="subtitle">{project.name}</h2>
                                <p>{project.description || 'No description available.'}</p>
                            </div>
                            <footer className="card-footer">
                                <a href={project.html_url} className="card-footer-item">View on GitHub</a>
                            </footer>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
