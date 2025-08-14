'use client';

import { motion, useAnimation, PanInfo } from 'framer-motion';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

// Define the structure for a brick object
interface Brick {
    id: number;
    color: string;
    width: number;
    height: number;
    x: number;
    y: number;
    rotation: number;
}

// Define the properties for a brick in the palette
interface PaletteBrickProps {
    color: string;
    width: number;
    height: number;
    onDrop: (x: number, y: number, color: string, width: number, height: number) => void;
}

const GRID_SIZE = 20; // The size of the grid for snapping bricks

/**
 * A single draggable brick component from the palette.
 */
const DraggableBrick = ({ color, width, height, onDrop }: PaletteBrickProps) => {
    const controls = useAnimation();
    return (
        <motion.div
            className="cursor-grab active:cursor-grabbing"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color,
                borderRadius: '3px',
                boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.2)',
            }}
            drag
            dragMomentum={false}
            onDragEnd={(event, info) => {
                onDrop(info.point.x, info.point.y, color, width, height);
                controls.start({ x: 0, y: 0 }); // Snap back to palette
            }}
            animate={controls}
        />
    );
};

/**
 * The main interactive Hero Section component.
 * It features a scenic background and allows users to drag, place, and stack LEGO bricks.
 */
const Hero = () => {
    const [placedBricks, setPlacedBricks] = useState<Brick[]>([]);

    const paletteBricks = [
        { color: '#d90000', width: 80, height: 40 },
        { color: '#0055bf', width: 80, height: 40 },
        { color: '#f2cd00', width: 40, height: 40 },
        { color: '#009624', width: 40, height: 40 },
        { color: '#ff8c00', width: 120, height: 40 },
        { color: '#ffffff', width: 40, height: 40 },
    ];

    /**
     * Handles adding a new brick to the canvas, snapping it to the grid.
     */
    const handleDrop = (x: number, y: number, color: string, width: number, height: number) => {
        const newBrick: Brick = {
            id: Date.now(),
            color,
            width,
            height,
            x: Math.round((x - width / 2) / GRID_SIZE) * GRID_SIZE,
            y: Math.round((y - height / 2) / GRID_SIZE) * GRID_SIZE,
            rotation: 0, // Keep rotation at 0 for easier stacking
        };
        setPlacedBricks(prevBricks => [...prevBricks, newBrick]);
    };

    /**
     * Handles moving an already placed brick, snapping its new position to the grid.
     */
    const handlePlacedBrickDragEnd = (id: number, info: PanInfo) => {
        setPlacedBricks(prevBricks =>
            prevBricks.map(b => {
                if (b.id === id) {
                    // Update position based on drag offset and snap to grid
                    return {
                        ...b,
                        x: Math.round((b.x + info.offset.x) / GRID_SIZE) * GRID_SIZE,
                        y: Math.round((b.y + info.offset.y) / GRID_SIZE) * GRID_SIZE,
                    };
                }
                return b;
            })
        );
    };

    /**
     * Clears all placed bricks from the canvas.
     */
    const handleReset = () => {
        setPlacedBricks([]);
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568819139371-a7b36b414973?q=80&w=2940&auto=format&fit=crop')" }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

            {/* Area for Placed Bricks */}
            <div className="absolute top-0 left-0 w-full h-full z-20">
                {placedBricks.map(brick => (
                    <motion.div
                        key={brick.id}
                        className="absolute cursor-grab active:cursor-grabbing"
                        style={{
                            width: brick.width,
                            height: brick.height,
                            backgroundColor: brick.color,
                            borderRadius: '3px',
                            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
                        }}
                        drag
                        dragMomentum={false}
                        onDragEnd={(event, info) => handlePlacedBrickDragEnd(brick.id, info)}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: brick.x,
                            y: brick.y,
                            rotate: brick.rotation
                        }}
                        whileDrag={{ scale: 1.1, zIndex: 50, boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                ))}
            </div>

            {/* Centered Title Content */}
            <div className="relative z-30 flex flex-col items-center text-white px-4 pointer-events-none">
                <h1 className="text-5xl md:text-8xl lego-font text-lego-yellow">
                    Big Sky Bricks
                </h1>
                <p className="mt-4 text-lg md:text-2xl max-w-2xl">
                    Drag the bricks below to build your own creation!
                </p>
            </div>

            {/* Reset Button */}
            <button
                onClick={handleReset}
                className="absolute top-5 right-5 z-40 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors"
                aria-label="Reset canvas"
            >
                <FaTrash size={20} />
            </button>

            {/* Brick Palette */}
            <div className="absolute bottom-0 left-0 right-0 z-40 p-4 flex justify-center">
                <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center gap-4 shadow-lg">
                    {paletteBricks.map((brick, i) => (
                        <DraggableBrick key={i} {...brick} onDrop={handleDrop} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;