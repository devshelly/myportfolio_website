import { PersonalData } from "../types/personalData";

const LOGOS = {
  mindsquare: "/icons/mindsquare_icon.svg",
  lms: "/icons/lms_icon.svg",
  vehere: "/icons/vehere_icon.svg",
  printlink: "/icons/printlink_icon.svg",
  persistent: "/icons/persistent_icon.svg",
  utkal: "/icons/utkal_icon.svg",
  jkbose: "/icons/jkbose_icon.svg",
};

export const RESUME_OS_MAP: Record<string, string> = {
  fedora: "/resumeCons.pdf",
  ubuntu: "/resume.pdf",
  kali: "/resumeSec.pdf",
};

export const PERSONAL_DATA: PersonalData = {
  personalInfo: {
    name: "Rahul Pradhan",
    shortName: "Rahul",
    title: "IT Administrator | Windows Server | Microsoft 365 | Networking",
    profileImage: "/preload/photo1.jpg",
    fullNameLogo: "/preload/rahulpradhan-full.svg",
    logo: "/preload/favicon.svg",
    email: "imrahulofficial3@gmail.com",
    website: "rahulpradhan.in",
    uname: "rahulpradhan",
    aboutMe:
      "I'm an Infrastructure & IT Administrator based in Noida, India. \n I keep enterprise networks, servers, and people running without a hitch.",
    aboutDescription: `Infrastructure and IT Administrator with 4+ years of hands-on
        experience managing enterprise networks, Windows and Linux servers,
        and IT security systems. Proven ability to deploy and administer
        Microsoft 365, Active Directory, and Windows Server environments.
        Skilled in Layer 2/3 network configuration, system monitoring,
        end-user support, and IT documentation. Backed by a B.Sc. in
        Computer Science from Utkal University, Bhubaneswar. Seeking a role
        as an MS 365 Administrator, IT Administrator, or Windows System
        Administrator.`,
    socials: [
      {
        value: "LinkedIn",
        href: "https://www.linkedin.com/in/rahul-pradhan-1aa911271/",
      },
      {
        value: "Email",
        href: "mailto:imrahulofficial3@gmail.com",
      },
    ],
  },
  quickLinks: [
    {
      href: "https://www.linkedin.com/in/rahul-pradhan-1aa911271/",
      value: "LinkedIn",
      style: {
        color: "#A3BE8C",
        background: "rgba(163, 190, 140, 0.15)",
        border: "1px solid rgba(163,190,140,0.35)",
      },
    },
    {
      href: "mailto:imrahulofficial3@gmail.com",
      value: "Email",
      style: {
        color: "#81A1C1",
        background: "rgba(129, 161, 193, 0.15)",
        border: "1px solid rgba(129,161,193,0.35)",
      },
    },
    {
      href: "", // Will be set dynamically based on theme
      value: "Resume",
      style: {
        color: "#EBCB8B",
        background: "rgba(235, 203, 139, 0.15)",
        border: "1px solid rgba(235,203,139,0.35)",
      },
    },
  ],
  skillsOverview: {
    value: "Technical Skills",
  },
  recommendations: {
    value: "Recommendations",
    data: [],
  },
  experience: {
    value: "Professional Experience",
    description: `4+ years across enterprise IT infrastructure — Windows and Linux
        server administration, Microsoft 365, Active Directory, and Layer 2/3
        networking for organizations in healthcare, manufacturing, and
        network security.`,
    data: [
      {
        href: "https://www.linkedin.com/in/rahul-pradhan-1aa911271/",
        icon: LOGOS.mindsquare,
        value: "Mindsquare Technologies (Client: Manipal Hospitals) — Sr. System Administrator · May 2026 – Present",
        description: `Administer Windows Server environments and Active Directory (OUs, GPOs, replication health) across enterprise infrastructure.
            Manage Microsoft 365 provisioning, mailboxes, DNS/DHCP, and file servers; execute monthly patching and vulnerability remediation.
            Drive Change Requests per ITIL, meet SLA targets on incident/problem tickets, and mentor L1 support engineers.`,
      },
      {
        href: "https://www.linkedin.com/in/rahul-pradhan-1aa911271/",
        icon: LOGOS.lms,
        value: "LMS India Pvt. Ltd. — IT Administrator · Mar 2025 – Feb 2026",
        description: `Deployed a Domain Controller from scratch on Windows Server 2022 with GPOs and account management for 100+ users.
            Ran centralised DHCP/DNS, Zabbix monitoring on Linux, and GrandStream router/switch/AP infrastructure.
            Enforced firewall rules and security audits; ensured LAN/WAN uptime with redundancy and failover.`,
      },
      {
        href: "https://www.linkedin.com/in/rahul-pradhan-1aa911271/",
        icon: LOGOS.vehere,
        value: "Vehere Interactive Pvt. Ltd. — Technical Support Engineer (Linux & Network) · Jan 2024 – Mar 2025",
        description: `Installed and monitored Linux/Windows servers with RAID and automated backups, maintaining 99%+ uptime.
            Administered Layer 3 switching, OSPF/static routing, and segmentation in a hybrid on-prem/cloud environment.
            Managed DNS, Apache, and SSH services; streamlined firewall rules and resolved client connectivity issues within SLA.`,
      },
      {
        href: "https://www.linkedin.com/in/rahul-pradhan-1aa911271/",
        icon: LOGOS.printlink,
        value: "Printlink Computers & Communication — IT Support Engineer, L1 Network · Dec 2022 – Jan 2024",
        description: `Configured Cisco Layer 2/3 switches and VLANs for data centre operations.
            Monitored CPU, memory, and storage health; performed preventive hardware maintenance, backups, and DR drills.`,
      },
      {
        href: "https://www.linkedin.com/in/rahul-pradhan-1aa911271/",
        icon: LOGOS.persistent,
        value: "Persistent Networks Pvt. Ltd. — IT Support Engineer · Jan 2022 – Dec 2022",
        description: `Installed and maintained routers, switches, and user devices for continuous network reliability.
            Performed root cause analysis on network incidents, reducing repeat issues through structured troubleshooting.`,
      },
    ],
  },
  projects: {
    value: "Projects",
    data: [],
  },
  achievements: {
    value: "Key Achievements",
    data: [
      {
        value: "99%+ Uptime",
        description:
          "Kept enterprise Linux and Windows servers running with RAID, automated backups, and proactive monitoring.",
      },
      {
        value: "AD From Scratch",
        description:
          "Deployed and administered a full Windows Server 2022 domain — GPOs, OUs, DHCP/DNS — for 100+ users.",
      },
      {
        value: "Team Leadership",
        description:
          "Mentored L1 support engineers and led ITIL-aligned change management across data centre operations.",
      },
    ],
  },
  education: {
    value: "Education",
    data: [
      {
        href: "https://utkaluniversity.ac.in/",
        icon: LOGOS.utkal,
        value: "BCCST, Utkal University, Bhubaneswar",
        description: "B.Sc. Computer Science — First Class (2018 – 2021)",
      },
      {
        href: "https://jkbose.nic.in/",
        icon: LOGOS.jkbose,
        value: "GBHSC, JKBOSE, Bhaderwah, J&K",
        description: "10+2 (PCM) — First Class (2015 – 2017)",
      },
    ],
  },
  certifications: {
    value: "Certifications",
    data: [],
  },
};
