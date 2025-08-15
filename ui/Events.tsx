// src/app/events/page.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaBirthdayCake, FaCube, FaUserFriends } from 'react-icons/fa';

// Mock event data with Google Calendar links
const events = [
    {
        id: 1,
        title: 'Adults Night: LEGO & Libations',
        date: 'August 22, 2025',
        time: '7:00 PM - 10:00 PM',
        location: 'Big Sky Bricks Showroom, Evergreen, MT',
        description: 'An exclusive 21+ evening of complex builds, craft beers, and good company. Challenge your skills with our featured Technic sets.',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop',
        googleCalendarLink: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Adults+Night%3A+LEGO+%26+Libations&dates=20250823T010000Z/20250823T040000Z&details=An+exclusive+21%2B+evening+of+complex+builds%2C+craft+beers%2C+and+good+company.+Challenge+your+skills+with+our+featured+Technic+sets.&location=Big+Sky+Bricks+Showroom%2C+Evergreen%2C+MT',
    },
    {
        id: 2,
        title: "Kids' Speed Build Challenge",
        date: 'August 30, 2025',
        time: '1:00 PM - 3:00 PM',
        location: 'Kalispell Community Center',
        description: 'Ready, set, build! A fun-filled afternoon for our younger builders (ages 6-12) to test their speed and creativity for prizes.',
        imageUrl: 'https://images.unsplash.com/photo-1555994285-a614a5e6191b?q=80&w=2940&auto=format&fit=crop',
        googleCalendarLink: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Kids%27+Speed+Build+Challenge&dates=20250830T190000Z/20250830T210000Z&details=Ready%2C+set%2C+build!+A+fun-filled+afternoon+for+our+younger+builders+(ages+6-12)+to+test+their+speed+and+creativity+for+prizes.&location=Kalispell+Community+Center',
    },
    {
        id: 3,
        title: 'Montana MOC Showcase',
        date: 'September 20, 2025',
        time: '10:00 AM - 4:00 PM',
        location: 'Big Sky Bricks Showroom, Evergreen, MT',
        description: 'Explore incredible My Own Creations (MOCs) from talented builders across the state. A day of inspiration and community.',
        imageUrl: 'https://images.unsplash.com/photo-1633436383961-8744c4a331a1?q=80&w=2874&auto=format&fit=crop',
        googleCalendarLink: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Montana+MOC+Showcase&dates=20250920T160000Z/20250920T220000Z&details=Explore+incredible+My+Own+Creations+(MOCs)+from+talented+builders+across+the+state.+A+day+of+inspiration+and+community.&location=Big+Sky+Bricks+Showroom%2C+Evergreen%2C+MT',
    },
];

// Birthday party packages data with Google Calendar Appointment Scheduling links
const birthdayPackages = [
    {
        icon: FaCube,
        title: 'Builder Package',
        price: '$250',
        features: ['Up to 10 guests', '90 minutes of party time', 'Guided free build session', 'Small take-home LEGO set for each guest'],
        color: 'blue',
        googleAppointmentLink: 'https://calendar.google.com/calendar/appointments/schedules/your-unique-id-for-builder-package',
    },
    {
        icon: FaUserFriends,
        title: 'Master Builder Package',
        price: '$400',
        features: ['Up to 15 guests', '2 hours of party time', 'Themed build challenge (e.g., Star Wars, Castles)', 'Personalized birthday banner', 'Medium take-home LEGO set for each guest'],
        color: 'red',
        googleAppointmentLink: 'https://calendar.google.com/calendar/appointments/schedules/your-unique-id-for-master-builder-package',
    },
    {
        icon: FaBirthdayCake,
        title: 'Ultimate Creator Package',
        price: '$600',
        features: ['Up to 20 guests', '3 hours of party time', 'Everything in Master Builder, plus:', 'Custom LEGO birthday cake design', 'Exclusive large LEGO set for the birthday child'],
        color: 'yellow',
        googleAppointmentLink: 'https://calendar.google.com/calendar/appointments/schedules/your-unique-id-for-ultimate-creator-package',
    },
];


/**
 * A modern, responsive page to display upcoming company events.
 */
const Events = () => {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <div className="bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Events & Parties</h1>
                    <p className="text-gray-600 mt-4 text-lg">Join our community of builders at these exciting events.</p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                {/* Upcoming Events Section */}
                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                     {events.map((event) => (
                        <motion.div
                            key={event.id}
                            variants={itemVariants}
                            className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3"
                        >
                            <div className="relative w-full h-64 md:h-full">
                                {/* <Image src={event.imageUrl} alt={event.title || ''} layout="fill" objectFit="cover" /> */}
                            </div>
                            <div className="p-8 md:col-span-2">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
                                <div className="flex flex-col sm:flex-row gap-x-6 gap-y-3 text-gray-600 mb-6">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-lego-blue" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-lego-blue" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-lego-blue" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-8">{event.description}</p>
                                <a href={event.googleCalendarLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-lego-yellow text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                                    Add to Calendar
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Birthday Parties Section */}
                <div className="mt-24 pt-16 border-t border-gray-200">
                     <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Host Your Birthday With Us!</h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">Create unforgettable memories. Select a package below to view available dates and book your party instantly.</p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {birthdayPackages.map((pkg) => (
                            <motion.div 
                                key={pkg.title}
                                variants={itemVariants}
                                className={`bg-white rounded-lg shadow-lg p-8 flex flex-col border-t-4 border-lego-${pkg.color}`}
                            >
                                <div className="flex-grow">
                                    <div className={`bg-lego-${pkg.color} text-white rounded-full p-4 mb-6 inline-block`}>
                                        <pkg.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                                    <p className="text-3xl font-bold text-gray-900 mb-6">{pkg.price}</p>
                                    <ul className="space-y-3 text-gray-600">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className={`text-lego-${pkg.color} mr-3 mt-1`}>&#10003;</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a href={pkg.googleAppointmentLink} target="_blank" rel="noopener noreferrer" className={`mt-8 block text-center w-full bg-lego-${pkg.color} text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300`}>
                                    Schedule Party
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default Events;
