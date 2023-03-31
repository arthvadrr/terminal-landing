import { useRef, useEffect, useState, createElement } from 'react';
import Nav from '../../components/Nav/Nav';
import Icon from '../../components/Icon/Icon';
import './DirView.scss';

const DirView = ({screen, setScreen, directories}) => {
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
                    className: `file-btn ${screen === dir.name ? 'active' : ''}`,
                    onClick: () => setScreen(`${dir.name}`),
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
        <div className="crt-on">
            <div className="page-flex">
                <header>
                    <h1>Root Directory</h1>
                    <Nav screen={screen} setScreen={setScreen}/>
                    <aside className="dir-tree">
                        <h2>Files</h2>
                        {renderDirTree(directories)}
                    </aside>
                </header>
                <main className="dirview-inner">
                    <section className="dir-content">

                    </section>
                </main>
            </div>
        </div>
    );
}

export default DirView;