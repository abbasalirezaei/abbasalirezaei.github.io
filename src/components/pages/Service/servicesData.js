import {
  FaNetworkWired,
  FaCamera,
  FaPython,
  FaServer,
  FaChalkboardTeacher,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    slug: "network-solutions",
    icon: <FaNetworkWired />,
    title: "IT & Network Solutions",
    shortDescription:
      "Professional network design, MikroTik, Cisco, Windows Server and infrastructure services.",

    description:
      "Complete network solutions for businesses including network design, server deployment, VPN configuration, virtualization and troubleshooting.",

    features: [
      "Cisco",
      "MikroTik",
      "Windows Server",
      "Active Directory",
      "VMware",
      "Network Troubleshooting",
      "VPN",
      "Infrastructure Design",
    ],
  },

  {
    id: 2,
    slug: "cctv-installation",
    icon: <FaCamera />,
    title: "CCTV Installation",

    shortDescription:
      "Professional CCTV installation and maintenance for homes, offices and industrial facilities.",

    description:
      "Complete installation, configuration and maintenance of CCTV systems including DVR, NVR and remote monitoring.",

    features: [
      "IP Cameras",
      "Analog Cameras",
      "DVR / NVR",
      "Remote Monitoring",
      "Fiber Optic",
      "Maintenance",
    ],
  },

  {
    id: 3,
    slug: "math-tutoring",

    icon: <FaChalkboardTeacher />,

    title: "Private Mathematics Tutoring",

    shortDescription:
      "Online and in-person mathematics tutoring for school, university and engineering students.",

    description:
      "Personalized tutoring for high school and university mathematics with problem solving techniques.",

    features: [
      "High School",
      "University",
      "Calculus",
      "Linear Algebra",
      "Engineering Mathematics",
      "Online Classes",
    ],
  },

  {
    id: 4,

    slug: "backend-development",

    icon: <FaPython />,

    title: "Backend Development",

    shortDescription:
      "Python backend development, REST APIs and automation.",

    description:
      "Backend systems using Python and REST API architecture.",

    features: [
      "Python",
      "REST API",
      "Automation",
      "Backend Development",
    ],
  },

  {
    id: 5,

    slug: "windows-server",

    icon: <FaServer />,

    title: "Windows Server",

    shortDescription:
      "Deployment and administration of Windows Server environments.",

    description:
      "Professional Windows Server installation, Active Directory, DNS, DHCP and Group Policy configuration.",

    features: [
      "Active Directory",
      "DNS",
      "DHCP",
      "Group Policy",
      "Hyper-V",
      "File Server",
    ],
  },
];

export default servicesData;