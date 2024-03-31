import React from 'react'
import Card from '../components/Card'

const About = () => {
    return (
        <div className='p-6 flex flex-col gap-16'>
            <div className='flex  flex-col gap-10'>
                <div className='text-2xl text-heading text-white font-medium'>
                    Education
                </div>
                <div className='flex gap-10'>
                    <Card title={`10th`} college={"Day Care Center"} completed={"2015"} marks={"86%"} />
                    <Card title={"Diploma"} college={"K.K.Wagh Polytechnic"} completed={"2018"} marks={"73.41%"} />
                    <Card title={"BEIT"} college={"Sandip Institute Of Technology And Research Center"} completed={"2021"} marks={"8.00 CGPA"} />
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='text-2xl text-heading text-white font-medium'>
                    Experience
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl font-medium text-white'>Tata Consultancy Services, Pune — Software Engineer</p>
                    <p className='text-xs text-white'>Oct 2021 - Jan 2024</p>
                    <p className='text-slate-400 text-sm'>
                        - Developed features like searching, translation engine etc. using different Web Technologies like HTML5 and CSS3, used Javascript for adding interactivity to the web pages.<br />
                        - Led the translation team to provide internationalization in the product. <br />
                        - Contributed in various internal projects which used React, Redux, Mantine UI etc. This helped me strengthen my understanding of UI Technologies. <br />
                        - Technologies Used - HTML5, CSS3, Javascript, React, NodeJS, SQL <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About