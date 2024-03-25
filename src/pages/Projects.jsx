import React from 'react'
import Project from '../components/Project'


const Projects = () => {
    return (
        <div className='projects-containar flex flex-col'>
            <Project title={"MoneyEase"} subTitle={"Hobby Project"} linkTitle={"Go to MoneyEase"} link={"https://github.com/Pushkar2912/moneyEase"}>
                
                    Effortlessly track project expenses and stay on budget with a user-friendly expense tracker web app.<br />
                    Impress clients with accurate reports and gain valuable insights into your project financials.<br />
                    Technologies: React.js, Prisma ORM, react-chartjs-2, Redux.js, Tailwind CSS, JSON Web Token (JWT), Express.js, Bcrypt
                
            </Project>

            <Project title={"Secure Storage on Cloud using Hybrid Cryptography"} subTitle={"Final Year Project (Diploma)"} linkTitle={"Go to Secure Storage"} link={"https://github.com/Pushkar2912/moneyEase"}>
               
                    This project aimed to secure user data on the cloud using multi-layered encryption.<br />
                    Files are split and individually encrypted with industry-standard algorithms (AES, RC4, Blowfish) for enhanced security and performance.<br />
                    Encrypted data is stored in an Amazon S3 bucket for scalability and durability.<br />
                    Metadata is stored in MongoDB for efficient file retrieval and decryption.<br />
                    MERN stack (MongoDB, Express.js, React.js, Node.js) is used for development, ensuring a robust codebase. <br />

                
            </Project>

            <Project title={"Skill Assist"} subTitle={"Hobby Project"} linkTitle={"Go to Skill Assist"} link={"https://github.com/anirudha4/skill-assist"}>
               
                    A social platform for freelancers to create stores to showcase their skills, share their profiles with their customers and make new customers.<br />
                    Technologies: React, Firebase<br />
                
            </Project>
            <Project title={"Skill Assist"} subTitle={"Hobby Project"} linkTitle={"Go to Skill Assist"} link={"https://github.com/anirudha4/skill-assist"}>
               
                    A social platform for freelancers to create stores to showcase their skills, share their profiles with their customers and make new customers.<br />
                    Technologies: React, Firebase<br />
                
            </Project>
        </div>
    )
}

export default Projects