import React from 'react';
import { Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import { GitHubIcon } from '@material-ui/icons';

const Drawer = () => {
    return (
        <Drawer
            variation='permanent'
            style={{ width: '240px' }}
        >
            <List>
                {['test1', 'test2', 'test3'].map(el => {
                    <ListItem>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                    </ListItem>
                })}
            </List>
        </Drawer>
    );
};

export default Drawer;