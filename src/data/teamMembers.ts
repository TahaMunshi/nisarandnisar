export interface TeamMember {
  slug: string;
  name: string;
  office: "Karachi" | "Lahore";
  title: string;
  bio: string[];
  hasDetail: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "omair-nisar",
    name: "Mr. Omair Nisar",
    office: "Karachi",
    title: "Senior Partner",
    hasDetail: true,
    bio: [
      "Mr. Omair Nisar is the Senior Partner in Nisar & Nisar. His specialties include Admiralty, Banking, International Trade Law including WTO, Corporate Law, Intellectual Property Laws, E-commerce & IT Laws, Telecommunication Laws, Civil, Arbitration and Mediation, Policy Consultancy and Company matters. He also specializes in Legislation Drafting.",
      "Besides he specializes in Legal and Policy Opinion writing, Drafting and Vetting of Agreements, Company regulations and procedures, preparation of market analysis, underwriting contracts, and Commercial, Civil and Banking litigation. He also opines in respect of syndicated loans, mergers and acquisitions, regulatory matters of Corporations, large scale corporate matters, issues with Securities and Exchange Commission, issues at high-seas including marine pollution and collision claims.",
      "He has actively conducted a number of litigation matters and has various judgments reported in the law journals of the country.",
      "He has been Accredited by the Centre for Effective Dispute Resolution (CEDR), London UK, as a Professional Mediator, entitling him to mediate in the national as well as international disputes of commercial nature interalia. He is also General Secretary of Council for Arbitration of Pakistan (CAP).",
      "He had been associated with the Work Group formed for reformation and restructuring of the legislation in respect of the trade and transport laws of Pakistan, convened by the UNCTAD, the World Bank and Ministry of Commerce, Government of Pakistan in the year 2003-2004.",
      "He heads our legal audit team which provides services to various Financial Institutions, DFIs and Corporate entities in identifying the discrepancies in their internal documents and advising them to overcome those incongruities for effective achievement of their targets.",
      "He has also authored two books on various disciplines of law, while his work on Maritime and Banking law and practice in Pakistan is underway.",
      "He also lectures in British Constitution and Negotiable Instruments Act at Hamdard Law School, Karachi.",
    ],
  },
  {
    slug: "syed-zeeshan-ali",
    name: "Mr. Syed Zeeshan Ali",
    office: "Karachi",
    title: "Associate",
    hasDetail: true,
    bio: [
      "Mr. Zeeshan has been with us for last three years. He is a graduate from S. M. Law College, Karachi. His areas of practice include Civil, Family, Rent, Property and Banking matters.",
    ],
  },
  {
    slug: "zafar-islam-siddiqui",
    name: "Mr. Zafar Islam Siddiqui",
    office: "Karachi",
    title: "HR Consultant",
    hasDetail: true,
    bio: [
      "Mr. Zafar I. Siddiqui has over 29 years of experience with several multinationals covering a broad spectrum of managerial activities. Specializing in Human Resources Management, he has served, in Senior Management positions with reputable organizations such as, ANZ Grindlays Bank, Toyota (IMC), Gillette, Dewan Mushtaq Group, Bank Al-Habib, Parke Davis, and Singer Pakistan.",
      "He is a member of managing committee of Pakistan Institute of Personnel Administration and has also held a similar position in the Employers Federation of Pakistan previously. Owing to his extensive experience, Z.I. Siddiqui has excellent connections with leading professionals in both public and private sector organizations.",
    ],
  },
  {
    slug: "zameer-hussain",
    name: "Mr. Zameer Hussain",
    office: "Karachi",
    title: "Associate",
    hasDetail: true,
    bio: [
      "Mr. Zameer is a graduate from Sindh University. He is in the Firm for last one year. His areas of practice include civil, criminal, Family, Rent, Property, Land Acquisition and Banking matters.",
    ],
  },
  {
    slug: "khursheed-khoso",
    name: "Mr. Khursheed Khoso",
    office: "Karachi",
    title: "Associate",
    hasDetail: false,
    bio: [],
  },
  {
    slug: "osman-khan",
    name: "Mr. Osman Khan",
    office: "Lahore",
    title: "Senior Associate",
    hasDetail: true,
    bio: [
      "Mr. Khan is a senior member of our team at Lahore Office. His main areas of practice include International Law, Civil, Corporate, Taxation, Customs, Banking and Commercial Laws.",
      "Mr. Khan is also acting as Executive Director of Research Society on International Law. He has been involved in some of the very important cases pertaining to taxation and commercial side.",
    ],
  },
  {
    slug: "wasif-majeed",
    name: "Mr. Wasif Majeed",
    office: "Lahore",
    title: "Senior Associate",
    hasDetail: true,
    bio: [
      "Mr. Majeed is also a senior member of our team at Lahore Office. His main areas of practice involve Alternative Dispute Resolution, Civil, Taxation, Customs, Banking, Commercial Transactions etc.",
      "He has been involved in some of very high-profile cases and has rendered valuable assistance to senior counsels in cases related to 18th amendment in the Constitution of Pakistan before the Honorable Supreme Court.",
    ],
  },
];
