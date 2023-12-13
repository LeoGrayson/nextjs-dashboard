export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks:{
        twitter: string;
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: "Explorer",
    description:
        "A minimal and lovely blog which shares experiences agd citiest around the world!",
    currentlyAt: "Budapest",
    socialLinks: {
        twitter: "https://x.com/JerryGachaVer?t=uDaIzOaclW_lmVw9SviNHg&s=08",
        youtube: "https://youtube.com/@makrdev",
        github: "https://github.com/batuhanbilginn",
        linkedin: "https://linkedin.com/in/batuhanbilgin",
        instagram: "https://instagram.com/batuhanbilginn",
    },
};

export default siteConfig;