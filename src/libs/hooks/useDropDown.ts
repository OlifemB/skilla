import React, {useState, useCallback, useRef, useEffect, RefObject} from "react";


const ESC_KEY = 27;

const onEscapeKeyPress = (fn: Function) => ({keyCode}:KeyboardEvent) =>
    keyCode === ESC_KEY ? fn() : null;

const useDropdown = (): [RefObject<HTMLElement>, boolean, (() => void), (() => void)] => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLElement>(null);
    
    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);
    
    useEffect(() => {
        const handleGlobalMouseDown = ({target}:MouseEvent) => {
            // @ts-ignore
            if (!ref.current || ref.current.contains(target)) {
                return;
            }
            close();
        };
        
        const handleGlobalKeydown = onEscapeKeyPress(handleClose);
        
        document.addEventListener("mousedown", handleGlobalMouseDown);
        document.addEventListener("keydown", handleGlobalKeydown);
        
        return () => {
            document.removeEventListener("mousedown", handleGlobalMouseDown);
            document.removeEventListener("keydown", handleGlobalKeydown);
        };
    }, [handleClose]);
    
    return [ref, isOpen, handleOpen, handleClose];
};

export default useDropdown;
