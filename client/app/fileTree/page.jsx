"use client"

import { useState, useEffect } from "react";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";

const CollapsibleBlock = ({ name, isFile, depth, onToggle, isCollapsed, onContextMenu }) => {
    return (
        <div 
            className="mb-1 py-1 px-2 rounded"
            onContextMenu={onContextMenu}
            style={{ marginLeft: depth * 12 }}
        >
            <div 
                className="flex items-center cursor-pointer text-gray-800 dark:text-gray-200"
                onClick={onToggle}
            >
                {isFile ? (
                    <FaFile className="mr-2" />
                ) : (
                    isCollapsed ? <FaFolder className="mr-2" /> : <FaFolderOpen className="mr-2" />
                )}
                <span className="font-semibold">{name}</span>
            </div>
        </div>
    );
};

const TreeView = ({ paths }) => {
    const [collapsed, setCollapsed] = useState({});
    const [contextMenu, setContextMenu] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contextMenu && !event.target.closest('.context-menu')) {
                setContextMenu(null);
            }
        };

        const handleKeyPress = (event) => {
            if (contextMenu && (event.key === 'Escape' || event.key === 'Enter')) {
                setContextMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [contextMenu]);

    const toggleCollapse = (path) => {
        setCollapsed(prev => ({ ...prev, [path]: !prev[path] }));
    };

    const handleContextMenu = (event, path, isFile) => {
        event.preventDefault();
        setContextMenu({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
            path: path,
            isFile: isFile,
        });
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    const sortedPaths = paths.sort();
    const blocks = {};

    sortedPaths.forEach(path => {
        const parts = path.split('/');
        let current = blocks;

        parts.forEach((part, index) => {
            if (!current[part]) {
                current[part] = { children: {}, isFile: false };
            }
            if (index === parts.length - 1) {
                current[part].isFile = true;
            }
            current = current[part].children;
        });
    });

    const renderBlocks = (blocks, depth = 0, parentPath = '') => {
        return Object.keys(blocks).map((key, index) => {
            const path = parentPath ? `${parentPath}/${key}` : key;
            const isCollapsed = collapsed[path];
            return (
                <div key={index}>
                    <CollapsibleBlock 
                        name={key} 
                        isFile={blocks[key].isFile} 
                        depth={depth} 
                        onToggle={() => toggleCollapse(path)} 
                        isCollapsed={isCollapsed} 
                        onContextMenu={(e) => handleContextMenu(e, path, blocks[key].isFile)}
                    />
                    {!isCollapsed && !blocks[key].isFile && renderBlocks(blocks[key].children, depth + 1, path)}
                </div>
            );
        });
    };

    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg dark:bg-gray-800 flex flex-col">
            <h2 className="text-xl font-bold p-2 text-center text-gray-700 dark:text-gray-200">Directory Tree</h2>
            <div className="overflow-y-auto flex-1 p-2">
                {renderBlocks(blocks)}
            </div>
            {contextMenu && (
                <div
                    className="fixed context-menu"
                    style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-md p-4">
                        <div className="mb-4 text-gray-800 dark:text-gray-200">
                            Path: {contextMenu.path}
                        </div>
                        {!contextMenu.isFile && (
                            <>
                                <button className="block text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-md mb-2">
                                    Create File
                                </button>
                                <button className="block text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-md mb-2">
                                    Create Folder
                                </button>
                            </>
                        )}
                        <button className="block text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-md">
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Example usage
const paths = [
    "F1/F2/f3", "F1/f8", "F3/F4/f5", "F3/F4/f6", "F3/F7/f8", "F9/f10", "F11/F12/f13", "F11/F12/f14", "F11/F15/f16", "F11/F15/f17"
];

export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <TreeView paths={paths} />
        </div>
    );
}
