import {
  FaMicrosoft,
  FaWindows,
  FaUsersCog,
  FaEnvelope,
  FaNetworkWired,
  FaLock,
  FaServer,
  FaUbuntu,
  FaCentos,
  FaAws,
  FaTerminal,
  FaShieldAlt,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";
import { SiCisco, SiApache, SiNginx } from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  icon: IconType;
  href: string;
  label: string;
}
interface Skills {
  [type: string]: Skill[];
}

export const SKILL_DETAILS_MAP: Skills = {
  "Microsoft 365 & Windows": [
    {
      icon: FaMicrosoft,
      href: "https://www.microsoft.com/en-us/microsoft-365",
      label: "Microsoft 365",
    },
    {
      icon: FaWindows,
      href: "https://www.microsoft.com/en-us/windows-server",
      label: "Windows Server 2019/2022",
    },
    {
      icon: FaUsersCog,
      href: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
      label: "Active Directory & GPO",
    },
    {
      icon: FaEnvelope,
      href: "https://www.microsoft.com/en-us/microsoft-365/exchange/email",
      label: "Exchange Online",
    },
  ],
  Networking: [
    {
      icon: SiCisco,
      href: "https://www.cisco.com/",
      label: "Cisco L2/L3 Switching",
    },
    {
      icon: FaNetworkWired,
      href: "https://en.wikipedia.org/wiki/Virtual_LAN",
      label: "VLANs / OSPF / BGP",
    },
    {
      icon: FaServer,
      href: "https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-top",
      label: "DNS / DHCP",
    },
    {
      icon: FaLock,
      href: "https://en.wikipedia.org/wiki/Virtual_private_network",
      label: "VPN / SSL/TLS",
    },
  ],
  "Systems & Cloud": [
    {
      icon: FaUbuntu,
      href: "https://ubuntu.com/",
      label: "Ubuntu",
    },
    {
      icon: FaCentos,
      href: "https://www.centos.org/",
      label: "CentOS",
    },
    {
      icon: FaAws,
      href: "https://aws.amazon.com/",
      label: "AWS (EC2, S3, IAM, VPC)",
    },
    {
      icon: SiApache,
      href: "https://httpd.apache.org/",
      label: "Apache",
    },
    {
      icon: SiNginx,
      href: "https://nginx.org/",
      label: "Nginx",
    },
    {
      icon: FaTerminal,
      href: "https://www.gnu.org/software/bash/",
      label: "Bash Scripting",
    },
  ],
  "Security & Operations": [
    {
      icon: FaShieldAlt,
      href: "https://en.wikipedia.org/wiki/Firewall_(computing)",
      label: "Firewall Management",
    },
    {
      icon: FaChartLine,
      href: "https://www.zabbix.com/",
      label: "Zabbix Monitoring",
    },
    {
      icon: FaDatabase,
      href: "https://en.wikipedia.org/wiki/Backup",
      label: "Backup & Recovery",
    },
  ],
};
