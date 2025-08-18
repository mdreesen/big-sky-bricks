import { Variants } from 'framer-motion';

export function containerVariants(): Variants {
    return {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
            },
        },
    };
};

export function imageVariants(): Variants {
    return {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };
};

export function textVariants(): Variants {
    return {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };
};

export function cardVariants(): Variants {
    return {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };
};

export function itemSpringVariants(): Variants {
    return {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };
}

export function itemVariants(): Variants {
    return {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };
};

export function productVariants(): Variants {
    return {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
};

export function brickVariants(): Variants {
    return {
        hidden: { opacity: 0, y: 5, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };
};

export function menuVariants(): Variants {
    return {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
    };
};

export function navItemVariants(): Variants {
    return {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
};

export function staggerContainerVariants(): Variants {
    return {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger delay for children
                delayChildren: 0.3, // Delay before children start animating
            },
        },
    };
};