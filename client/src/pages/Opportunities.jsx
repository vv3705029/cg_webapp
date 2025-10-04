import React from 'react';
// We'll use the 'echarts-for-react' library for a more robust integration.
import ReactECharts from 'echarts-for-react';

// --- Data for the Mind Map ---
// This static data remains the same. It's the "blueprint" for our chart.
const careerData = {
    name: "Career Options",
    children: [
        {
            name: "After 10th Standard",
            children: [
                {
                    name: "Academic Streams",
                    children: [
                        { name: "Science (PCM)", details: "Pathway for engineering, architecture, data science, etc." },
                        { name: "Science (PCB)", details: "Pathway for medical and life sciences." },
                        { name: "Science (PCMB)", details: "Offers flexibility for both engineering and medical fields." },
                        { name: "Commerce", details: "Foundation for business, finance, CA, and management." },
                        { name: "Arts / Humanities", details: "Gateway to civil services, law, journalism, and design." }
                    ]
                },
                {
                    name: "Vocational Paths",
                    children: [
                        { name: "Polytechnic Diploma", details: "3-year track for Junior Engineer roles. Entry via State CETs." },
                        { name: "ITI", details: "1-2 year skill-focused courses for roles like Electrician, Fitter." },
                        { name: "Paramedical Courses", details: "Quick entry into healthcare as Lab Technician, Radiology Tech, etc." },
                        { name: "Digital Skill Diplomas", details: "Courses in Graphic Design, Digital Marketing, Animation." }
                    ]
                }
            ]
        },
        {
            name: "After 12th Standard",
            children: [
                {
                    name: "Science (PCM)",
                    children: [
                        { name: "Engineering (B.Tech)", details: "Exams: JEE Main/Advanced. Roles: Software, Civil, Mechanical Engineer." },
                        { name: "Architecture (B.Arch)", details: "Exams: NATA, JEE Main (Paper 2). 5-year creative program." },
                        { name: "Data Science & AI", details: "Degrees: B.Tech in CS/AI, B.Sc. Stats. Roles: Data Scientist, ML Engineer." },
                        { name: "Commercial Pilot", details: "Requires CPL from a flying school." },
                        { name: "Merchant Navy", details: "Courses: B.Sc. Nautical Science, B.E. Marine Engineering." },
                        { name: "Ethical Hacking", details: "B.Tech in CS with Cybersecurity specialization or certifications like CEH."}
                    ]
                },
                {
                    name: "Science (PCB)",
                    children: [
                        { name: "Medicine (MBBS/BDS)", details: "Single Exam: NEET-UG. Most respected medical profession." },
                        { 
                            name: "Allied Health Sciences",
                            children: [
                                { name: "Physiotherapy (BPT)", details: "4.5-year degree. High demand in sports and healthcare." },
                                { name: "Pharmacy (B.Pharm)", details: "4-year degree for roles in pharmaceutical companies." },
                                { name: "Biotechnology", details: "Research-intensive field in genetics, pharma, agriculture." },
                                { name: "Forensic Science", details: "B.Sc. for roles like Crime Scene Investigator." },
                                { name: "Nursing", details: "B.Sc. Nursing. High demand in India and abroad." },
                                { name: "Radiology", details: "B.Sc. in Radiology/Imaging Technology." }
                            ]
                        }
                    ]
                },
                {
                    name: "Commerce",
                    children: [
                        { 
                            name: "Professional Accounting",
                            children: [
                                { name: "Chartered Accountancy (CA)", details: "3-level exam by ICAI. Prestigious finance qualification." },
                                { name: "Company Secretary (CS)", details: "Focuses on corporate law and governance." },
                                { name: "Cost & Management Acc (CMA)", details: "Specializes in cost accounting and financial planning." }
                            ]
                        },
                        {
                            name: "Management & Business",
                            children: [
                                { name: "BBA / BMS", details: "Leads to managerial roles. Often followed by an MBA." },
                                { name: "Integrated BBA+MBA", details: "5-year dual degree program for a fast-tracked management career." },
                                { name: "Digital Marketing", details: "Skill-based career in SEO, SMM, Content Strategy." }
                            ]
                        },
                        {
                            name: "Other Paths",
                            children: [
                                { name: "Law (B.Com LLB)", details: "5-year integrated course for corporate law." },
                                { name: "Economics (B.A Hons.)", details: "Careers in economic policy, financial analysis." },
                                { name: "Bachelor of Commerce (B.Com)", details: "Foundational degree, best with a professional qualification." }
                            ]
                        }
                    ]
                },
                {
                    name: "Arts & Humanities",
                    children: [
                         { 
                            name: "Public Service & Law",
                            children: [
                                { name: "Civil Services (IAS/IPS)", details: "Exam: UPSC CSE. Requires any graduation degree." },
                                { name: "Law (B.A. LLB)", details: "Exam: CLAT. 5-year integrated course for top NLUs." }
                            ]
                        },
                        {
                            name: "Creative, Media & Social",
                            children: [
                                { name: "Journalism", details: "Roles: Reporter, Content Creator, PR Specialist." },
                                { name: "Design (B.Des)", details: "Exams: NID/NIFT. For Fashion, Graphic, UI/UX Design." },
                                { name: "Psychology", details: "B.A. (Hons.) followed by M.A. for professional roles." },
                                { name: "Filmmaking", details: "High demand for video editors, scriptwriters." },
                                { name: "Event Management", details: "Dynamic career in planning corporate events, weddings." },
                                { name: "Foreign Language Expert", details: "Careers as translator, interpreter." }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "After Engineering",
            children: [
                {
                    name: "Core Tech Roles",
                    children: [
                        { name: "Software Engineer", details: "High demand. Roles: Full Stack, Backend, Frontend." },
                        { name: "AI/ML Engineer", details: "Specialized role. Python, TensorFlow/PyTorch are key skills." },
                        { name: "Cloud Engineer", details: "Works with AWS, Azure, GCP. High growth." },
                        { name: "Cybersecurity Analyst", details: "Protects systems from cyber threats." },
                        { name: "Blockchain Developer", details: "Niche but growing field for dApps and smart contracts." }
                    ]
                },
                {
                    name: "Techno-Managerial",
                    children: [
                        { name: "Management Consulting", details: "Top firms hire from IITs/NITs. Requires case interview prep." },
                        { name: "Product Management", details: "The 'CEO' of a product. Bridges tech and business." },
                        { name: "MBA", details: "Path to leadership. Exams: CAT/GMAT." }
                    ]
                },
                {
                    name: "Government & Research",
                    children: [
                        { name: "PSUs (IOCL, ONGC)", details: "Recruitment through GATE exam." },
                        { name: "IES / ESE", details: "Prestigious Group 'A' officer role via UPSC ESE exam." },
                        { name: "Scientist (ISRO/DRDO)", details: "R&D roles via specific recruitment exams." }
                    ]
                },
                { name: "Entrepreneurship", details: "High-risk, high-reward path of starting your own company." }
            ]
        },
        {
            name: "Futuristic Careers",
            children: [
                {
                    name: "AI & Data Science",
                    children: [
                        { name: "AI Ethics Officer", details: "Ensures responsible and fair use of AI systems." },
                        { name: "AI Governance Specialist", details: "Manages policies and compliance for AI." }
                    ]
                },
                {
                    name: "Sustainability & Climate",
                    children: [
                        { name: "Green Hydrogen Engineer", details: "Works on cutting-edge clean energy technology." },
                        { name: "Carbon Market Specialist", details: "Manages carbon credit trading and compliance." },
                        { name: "ESG Compliance Officer", details: "Ensures companies meet Environmental, Social, and Governance standards." }
                    ]
                },
                {
                    name: "Fintech & Blockchain",
                    children: [
                        { name: "Smart Contract Developer", details: "Builds self-executing contracts on blockchains." },
                        { name: "Fintech Product Manager", details: "Manages financial technology products." }
                    ]
                },
                {
                    name: "Space Tech",
                    children: [
                        { name: "Satellite Systems Engineer", details: "Designs and builds satellites for private companies." },
                        { name: "Space Data Analyst", details: "Analyzes data collected from space assets." }
                    ]
                },
                {
                    name: "Digital Creator Economy",
                    children: [
                        { name: "YouTuber", details: "Creates video content for online audiences." },
                        { name: "Influencer", details: "Builds and monetizes an online following." },
                        { name: "Podcaster", details: "Creates audio content for streaming platforms." }
                    ]
                },
                {
                    name: "Other Futuristic Careers",
                    children: [
                        { name: "UI/UX Designer", details: "Designs user-friendly digital products and interfaces." },
                        { name: "Robotics Engineer", details: "Builds robots for manufacturing, healthcare, etc." },
                        { name: "Esports Player", details: "Professional competitive video gamer." },
                        { name: "Genetic Counselor", details: "Advises families on genetic disorders." }
                    ]
                }
            ]
        }
    ]
};

// --- The CareerMindMapChart Component (Refactored) ---
const CareerMindMapChart = () => {
    // The ECharts configuration object.
    const option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function (params) {
                if (params.data.details) {
                    return `<strong>${params.name}</strong><br/>${params.data.details}`;
                }
                return `<strong>${params.name}</strong>`;
            }
        },
        series: [
            {
                type: 'tree',
                data: [careerData],
                top: '5%',
                left: '15%',
                bottom: '5%',
                right: '15%',
                symbolSize: 10,
                orient: 'LR', // Layout from Left to Right
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12,
                    color: '#333',
                    backgroundColor: '#fff',
                    padding: [4, 8],
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#ccc'
                },
                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },
                emphasis: {
                    focus: 'descendant'
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
                initialTreeDepth: 2 // Start with the first two levels expanded
            }
        ]
    };

    // The ReactECharts component handles rendering and updates automatically.
    return (
        <ReactECharts
            option={option}
            style={{ width: '100%', height: '90vh' }}
        />
    );
};


// --- The Main Opportunities Component ---
export default function Opportunities() {
    // Styles are defined as JavaScript objects for better organization
    const pageStyles = {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: '20px',
        backgroundColor: '#f4f7f9',
        color: '#333',
        minHeight: '100vh',
    };

    const headerStyles = {
        textAlign: 'center',
        color: '#2c3e50'
    };
    
    const containerStyles = {
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#ffffff'
    };

    return (
        <div style={pageStyles}>
            <h1 style={headerStyles}>The India Career Navigator 🗺</h1>
            <div style={containerStyles}>
                 <CareerMindMapChart />
            </div>
        </div>
    );
}

