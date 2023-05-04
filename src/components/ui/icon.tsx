import React from 'react';


interface IconProps {
    icon: React.ReactNode
    variant?: 'sm' | 'md' | 'lg' | 'xl'
}

const Icon = ({icon, variant}: IconProps) => {
    return (
        <div>
            {icon}
        </div>
    );
};

export default Icon;