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

export function productVariants() {
    return {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
}