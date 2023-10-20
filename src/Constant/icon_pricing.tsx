import React, { useState } from 'react'
import Image from 'next/image'


const iconPricing = [
    { name: "verif_icon", icon: "/img/icon_bagde_verified.png", alt: "gyloop-icon-badge-verified" },
    { name: "volunteer_icon", icon: "/img/icon_bagde_volunteer.png", alt: "gyloop-icon-badge-volunter" },
    { name: "functional_icon", icon: "/img/icon_bagde_volunteer.png", alt: "gyloop-icon-badge-functional" },
    { name: "professional_icon", icon: "/img/icon_bagde_professional.png", alt: "gyloop - icon - badge - professional" },
]

export default function IconPricing({ name }: { name: string }) {
    const [icon, setIcon] = useState(iconPricing)

    const iconFilter = icon.filter((item) => item.name === name)

    return (
        <Image
            className="logo-price mr-0"
            src={iconFilter[0].icon}
            alt={iconFilter[0].alt}
            width={0}
            height={0}
            sizes="100"
        />
    )
}
