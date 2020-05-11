import React, { Children } from 'react';
import { 
    Drawer as MiniDrawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText 
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Drawer = props => {
    const { data } = props;

    return (
        <div className="drawer-container">
            <img className="user-image" src={data.avatar_url} />
        </div>
    );
};

export default Drawer;