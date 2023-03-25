import typeText from '../../scripts/typeText';
import {useEffect, useState} from 'react';
import Nav from '../../components/Nav/Nav'
import './Projects.scss';

const Projects = ({screen, setScreen}) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/arthvadrr/repos?sort=updated').then(res => {
            if (res.ok) return res.json()
        })
        .then(data => setRepos(data))
        .catch(err => console.log('No repos fetched :: ', err))
        .finally(() => setLoading(false))
    }, [])

    return (
        <div className="crt-on">
            <div className="page-flex">
            <div>
                <h2>Projects</h2>
                <Nav 
                    screen={screen}
                    setScreen={setScreen}
                />
            </div>
            <div className="projects">
                {
                    !loading &&
                    <div className="projects-grid">
                        {repos.map((repo, i) => {
                            let {
                                name, 
                                html_url, 
                                created_at,
                                updated_at,
                                description,
                                language,
                                visibility,
                                fork
                            } = repo;

                            description = description ? description : "I was too lazy to describe this project. Sorry"

                            if (
                                visibility !== "public" ||
                                fork
                                ) return null

                            return (
                                <div key={i} className="project-card">
                                    <h3 className="project-title">{name}</h3>
                                    <div className="content-inner">
                                        <h4>Project Meta</h4>
                                        <dl className="project-meta">
                                            <dt>Created:</dt>
                                            <dd>{created_at}</dd>
                                            <dt>Last Updated:</dt>
                                            <dd>{updated_at}</dd>
                                            <dt>Language:</dt>
                                            <dd>{language}</dd>
                                        </dl>
                                        <h4>Description</h4>
                                        <p>{description}</p>
                                    </div>
                                    <a href={html_url} className="terminal-btn">view on github</a>
                                </div>
                            )
                        })}
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Projects