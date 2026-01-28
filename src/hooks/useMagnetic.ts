'use client';

import { useState, useEffect } from 'react';

export function useMagnetic(radius = 50, strength = 0.5) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent, element: HTMLElement) => {
        const { left, top, width, height } = element.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius) {
            setPosition({
                x: distanceX * strength,
                y: distanceY * strength
            });
        } else {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return { position, handleMouseMove, handleMouseLeave };
}
