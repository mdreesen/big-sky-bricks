import { FaBirthdayCake, FaCube, FaUserFriends, FaBoxOpen, FaSearch, FaStar } from 'react-icons/fa';


export function homeCategories() {
    return [
        {
            id: 1,
            name: 'The Architect Series',
            description: 'Iconic landmarks and structural marvels.',
            imageUrl: '/assets/collections/architect.webp',
            category: 'Architecture',
            width: 1600,
            height: 916
        },
        {
            id: 2,
            name: 'The Botanist Collection',
            description: 'Build everlasting floral arrangements.',
            imageUrl: '/assets/collections/botanist.webp',
            category: 'Botanical',
            width: 668,
            height: 382
        },
        {
            id: 3,
            name: 'The Explorer Collection',
            description: 'Travel through design and odyssey.',
            imageUrl: '/assets/collections/explorer.webp',
            category: 'Explorer',
            width: 668,
            height: 382
        },
    ];
};

export function categories() {
    return ['All', 'Architecture', 'Botanical', 'Explorer', 'Technic', 'Ideas'];
}

export function products() {
    return [
        { id: 1, name: 'Eiffel Tower', category: 'Architecture', price: 629.99, imageUrl: '/assets/products/architecture/eiffel_tower.webp' },
        { id: 2, name: 'Orchid Bloom', category: 'Botanical', price: 49.99, imageUrl: '/assets/products/botanical/orchid_bloom.webp' },
        { id: 3, name: 'McLaren P1', category: 'Technic', price: 199.99, imageUrl: '/assets/products/technic/mcLaren_p_one.webp' },
        { id: 4, name: 'The Globe', category: 'Ideas', price: 229.99, imageUrl: '/assets/products/ideas/globe.webp' },
        { id: 5, name: 'Wildflower Bouquet', category: 'Botanical', price: 59.99, imageUrl: '/assets/products/botanical/wildflower_bouquet.webp' },
        { id: 6, name: 'Lamborghini Sián', category: 'Technic', price: 449.99, imageUrl: '/assets/products/technic/lamborghini_sian.webp' },
        { id: 7, name: 'Colosseum', category: 'Architecture', price: 549.99, imageUrl: '/assets/products/architecture/colosseum.webp' },
        { id: 8, name: 'Motorized Lighthouse', category: 'Ideas', price: 299.99, imageUrl: '/assets/products/ideas/motorized_lighthouse.webp' },
        { id: 9, name: 'Lord Of The Rings Revendell', category: 'Explorer', price: 299.99, imageUrl: '/assets/products/explorer/lotr_rivendell.webp' },
        { id: 10, name: 'Star Wars Millennium Falcon', category: 'Explorer', price: 849.99, imageUrl: '/assets/products/explorer/sw_falcon.webp' },
    
    ];
}

export function events() {
    return [
        {
            id: 1,
            title: 'Adults Night: LEGO & Libations',
            date: 'August 22, 2025',
            time: '7:00 PM - 10:00 PM',
            location: 'Big Sky Bricks Showroom, Evergreen, MT',
            description: 'An exclusive evening of complex builds and good company. Challenge your skills with our featured Technic sets.',
            imageUrl: '/assets/events/events_adults.webp',
            googleCalendarLink: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Adults+Night%3A+LEGO+%26+Libations&dates=20250823T010000Z/20250823T040000Z&details=An+exclusive+21%2B+evening+of+complex+builds%2C+craft+beers%2C+and+good+company.+Challenge+your+skills+with+our+featured+Technic+sets.&location=Big+Sky+Bricks+Showroom%2C+Evergreen%2C+MT',
        },
        {
            id: 2,
            title: "Kids' Speed Build Challenge",
            date: 'August 30, 2025',
            time: '1:00 PM - 3:00 PM',
            location: 'Kalispell Community Center',
            description: 'Ready, set, build! A fun-filled afternoon for our younger builders to test their speed and creativity for prizes.',
            imageUrl: '/assets/events/events_speed.webp',
            googleCalendarLink: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Kids%27+Speed+Build+Challenge&dates=20250830T190000Z/20250830T210000Z&details=Ready%2C+set%2C+build!+A+fun-filled+afternoon+for+our+younger+builders+(ages+6-12)+to+test+their+speed+and+creativity+for+prizes.&location=Kalispell+Community+Center',
        },
        {
            id: 3,
            title: 'Montana MOC Showcase',
            date: 'September 20, 2025',
            time: '10:00 AM - 4:00 PM',
            location: 'Big Sky Bricks Showroom, Evergreen, MT',
            description: 'Explore incredible My Own Creations (MOCs) from talented builders across the state. A day of inspiration and community.',
            imageUrl: '/assets/events/events_showcase.webp',
            googleCalendarLink: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Montana+MOC+Showcase&dates=20250920T160000Z/20250920T220000Z&details=Explore+incredible+My+Own+Creations+(MOCs)+from+talented+builders+across+the+state.+A+day+of+inspiration+and+community.&location=Big+Sky+Bricks+Showroom%2C+Evergreen%2C+MT',
        },
    ];
};

export function birthdayPackages() {
    return [
        {
            icon: FaCube,
            title: 'Builder Package',
            price: '$125',
            features: ['Up to 10 guests', '30 minute setup period', '90 minutes of party time', 'Guided free build session', 'Small take-home LEGO set for each guest'],
            color: 'blue',
            googleAppointmentLink: 'https://calendar.google.com/calendar/appointments/schedules/your-unique-id-for-builder-package',
        },
        {
            icon: FaUserFriends,
            title: 'Master Builder Package',
            price: '$200',
            features: ['Up to 10 guests', '30 minute setup period', '90 minutes of party time', 'Bricks provided for building', 'Themed build challenge (e.g., Star Wars, Castles)', 'Special gift for birthday child'],
            color: 'red',
            googleAppointmentLink: 'https://calendar.google.com/calendar/appointments/schedules/your-unique-id-for-master-builder-package',
        },
        {
            icon: FaBirthdayCake,
            title: 'Ultimate Creator Package',
            price: '$325',
            features: ['Up to 10 guests', '30 minute setup period', '90 minutes of party time', 'Everything in Master Builder, plus:', 'Custom LEGO® building activity', 'LEGO® Mini-Figure building activity', 'Party host', 'Exclusive Take home brick bag for birthday child'],
            color: 'yellow',
            googleAppointmentLink: 'https://calendar.google.com/calendar/appointments/schedules/your-unique-id-for-ultimate-creator-package',
        },
    ];
};

export function services() {
    return [
        {
            icon: FaStar,
            title: 'Rare & Exclusive Sets',
            description: 'We specialize in sourcing hard-to-find and retired LEGO sets for the dedicated collector and enthusiast.',
        },
        {
            icon: FaBoxOpen,
            title: 'Custom Build Kits',
            description: 'Commission a one-of-a-kind model. Our master builders will design and source the bricks for your unique vision.',
        },
        {
            icon: FaSearch,
            title: 'Personalized Sourcing',
            description: 'Looking for a specific set or part? Our dedicated team will hunt it down for you through our global network.',
        },
    ];
}