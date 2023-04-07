import { 
    createElement, 
    useState,
    useEffect 
}                        from 'react';
import Nav               from '../../components/Nav/Nav';
import Icon              from '../../components/Icon/Icon';
import BadlyWrittenStory from './files/BadlyWrittenStory';
import NotPasswords      from './files/NotPasswords';
import DarlenesNote      from './files/DarlenesNote';
import BashRc            from './files/BashRc';
import CatPicture        from './files/CatPicture';
import GroceryList       from './files/GroceryList';
import ImportantEmail    from './files/ImportantEmail';
import TodoList          from './files/TodoList';
import bonkersTheCat     from './files/assets/bonkers-the-cat.jpg';
import loonyLarry        from './files/assets/loony-larry.jpg';
import oldLeo            from './files/assets/old-leo.jpg'
import                        './DirView.scss';

const DirView = (
    {
        screen, 
        setScreen, 
        directories
    }) => {

    const scrollToId = () => window.location.hash='dirView';

    const [dirView, setDirView] = useState('Root');

    const renderDirTree = (directories, dirName, icon) => {
        const children = [];

        if (!dirName) dirName = 'root';

        const summaryChildren = [
            <Icon key={`summary-icon-${dirName}`} type={icon}/>, 
            <span key={`summary-text-${dirName}`} className="summary-text">{dirName}</span>
        ];

        if (!icon) icon = '';

        const summary = createElement('summary', {}, summaryChildren);
        children.push(summary);

        for (const dir of directories) {
            if (dir.type === 'dir') {
                children.push(renderDirTree(dir.contents, dir.name, dir.icon))
            } else {
                const buttonChildren = [<Icon key={`icon-${dir.name}`} type="file"/>, <span key={`span-${dir.name}`} className="file-btn-text">{`${dir.name}.${dir.extension}`}</span>]

                const button = createElement('button', { 
                    className: `file-btn ${dirView === dir.name ? 'active' : ''}`,
                    onClick: () => setDirView(`${dir.name}`),
                    key: `file-btn-${dir.name}`
                }, buttonChildren) 

                children.push(createElement('div', {}, button));
            }
        }

        const details = createElement('details', { 
            open: true,
            className: 'root-details',
        }, ...children);

        return details
    }

    return (
        <div className="crt-on dirview">
            <div className="page-flex">
                <header>
                    <h1>Root Directory</h1>
                    <aside className="dir-tree">
                        <h2>Files</h2>
                        {renderDirTree(directories)}
                    </aside>
                    <Nav screen={screen} setScreen={setScreen}/>
                    <div className="file-preview">

                    </div>
                </header>
                <main className="dirview-inner">
                    <section className="dir-content">
                        {dirView === "badly-written-story" && (
                            <BadlyWrittenStory scrollToId={scrollToId}/>
                        )}
                        {dirView === 'not-passwords' && (
                            <NotPasswords scrollToId={scrollToId}/>
                        )}
                        {dirView === 'txt' && (
                            <BashRc scrollToId={scrollToId}/>
                        )}
                        {dirView === 'bonkers-the-cat' && (
                            <CatPicture scrollToId={scrollToId} pic={bonkersTheCat} alt="Bonkers the cat."/>
                        )}
                        {dirView === 'old-leo' && (
                            <CatPicture pic={oldLeo} scrollToId={scrollToId} alt="Old (and grumpy) Leo."/>
                        )}
                        {dirView === 'loony-larry' && ( 
                            <CatPicture scrollToId={scrollToId} pic={loonyLarry} alt="That cat's CRAZY."/>
                        )}
                        {dirView === 'grocery-list' && (
                            <GroceryList scrollToId={scrollToId}/>
                        )}
                        {dirView === 'important-email' && (
                            <ImportantEmail scrollToId={scrollToId}/>
                        )}
                        {dirView === 'todo-list' && (
                            <TodoList scrollToId={scrollToId}/>
                        )}
                        {dirView === 'darlenes-note' && (
                            <DarlenesNote scrollToId={scrollToId}/>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}

export default DirView;