import React, {RefObject, useState} from 'react';


export const useMUIDropDown = (): [
    HTMLElement | undefined,
    boolean,
    (event: React.MouseEvent<HTMLElement>) => void,
    () => void
] => {
    const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>(undefined);
    const isOpen = Boolean(anchorEl);
    
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(undefined);
    };
    
    
    return [anchorEl, isOpen, handleOpen, handleClose];
};