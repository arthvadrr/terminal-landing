import { useRef, useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';

const DirView = ({screen, setScreen, directories}) => {
    const dirTree = useRef(null);

    const [treeHTML, setTreeHTML] = useState(null);

    const RenderDirTree = (directories, parent) => {

    }

    useEffect(() => {
        setTreeHTML(RenderDirTree(directories, dirTree));
    }, [])

    return (
        <div className="crt-on">
            <div className="page-flex">
                <header>
                    <h1>Root Directory</h1>
                    <Nav screen={screen} setScreen={setScreen}/>
                </header>
                <main className="dirview-inner">
                    <section className="dir-tree" ref={dirTree}>
                        HI THERE
                    </section>
                    <section className="dir-content">

                    </section>
                </main>
            </div>
        </div>
    );
}

export default DirView;