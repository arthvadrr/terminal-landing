import {useEffect, useState} from 'react';

import './Projects.scss';

const Projects = () => {
    const [repos, setRepos] = useState('')
    const [loading, setLoading] = useState('')
        
    useEffect(() => {
        fetch('https://api.github.com/users/arthvadrr/repos').then(res => {
            if (res.ok) return res.json()
        })
        .then(data => setRepos(data))
        .catch(err => console.log('No repos fetched :: ', err))
        .finally(() => setLoading(false))


        console.log(repos)
    }, [])

    return (
        <div className="crt-on">
            <h2>Projects</h2>
        </div>
    )
}

export default Projects