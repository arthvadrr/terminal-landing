const directories = [
    {
        name: 'home',
        type: 'dir',
        icon: 'home',
        contents: [
        {
            name: 'not-passwords',
            type: 'file',
            extension: 'txt'
        },
        {
            name: 'txt',
            type: 'file',
            extension: 'bashrc'
        },
        ]
    },
    {
        name: 'documents',
        type: 'dir',
        icon: 'folder',
        contents: [
        {
            name: 'badly-written-story',
            type: 'file',
            extension: 'txt'
        },
        {
            name: 'todo-list',
            type: 'file',
            extension: 'txt'
        },
        {
            name: 'darlenes-note',
            type: 'file',
            extension: 'txt'
        },
        {
            name: 'cat-pics',
            type: 'dir',
            icon: 'folder',
            contents: [
            {
                name: 'old-leo',
                type: 'file',
                extension: 'jpg'
            },
            {
                name: 'bonkers-the-cat',
                type: 'file',
                extension: 'jpg'
            },
            {
                name: 'loony-larry',
                type: 'file',
                extension: 'jpg'
            }
            ]
        },
        ]
    },
    {
        name: 'trash',
        type: 'dir',
        icon: 'trash',
        contents: [
        {
            name: 'important-email',
            type: 'file',
            extension: 'txt'
        },
        {
            name: 'grocery-list',
            type: 'file',
            extension: 'txt'
        }
        ]
    }
];

export default directories;