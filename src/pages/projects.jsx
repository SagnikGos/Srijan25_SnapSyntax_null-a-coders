
import './projects.css'

function Projects() {

    return <div className='relative flex flex-col items-center min-h-screen bg-gradient-to-br from-black to-purple-900 p-8 sm:p-2 overflow-hidden'>
        <div className='heading'>
            <div className='heading-text'>
            Projects    
            </div>
        </div>
        <div className='project'>

            <div className='project-item'>
                <div className='project-pic-container'>

                    <img src='https://static.wingify.com/gcp/uploads/sites/3/2021/09/Feature-image-7-ecommerce.png' className='project-pic'></img>
                </div>
                <div className='project-details'>
                    <div className='project-name'>
                        Project 1
                    </div>
                    <div className='project-date'>
                        Sep 2021 - Aug 2021
                    </div>
                </div>
            </div>
            <div className='project-item'>
                <div className='project-pic-container'>

                    <img src='https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-1280x720.png' className='project-pic'></img>
                </div>
                <div className='project-details'>
                    <div className='project-name'>
                        Project 2
                    </div>
                    <div className='project-date'>
                        Nov 2021 - Dec 2021
                    </div>
                </div>
            </div>
            <div className='project-item'>
                <div className='project-pic-container'>

                    <img src='https://images.newsfilecorp.com/files/8653/139048_lunaweb3image.jpg' className='project-pic'></img>
                </div>
                <div className='project-details'>
                    <div className='project-name'>
                        Project 3
                    </div>
                    <div className='project-date'>
                        Jun 2022 - Nov 2022
                    </div>
                </div>
            </div>
            <div className='project-item'>
                <div className='project-pic-container'>

                    <img src='https://serokell.io/files/31/31ybjg0s.Cool_AI_Project__Ideas_pic2.png' className='project-pic'></img>
                </div>
                <div className='project-details'>
                    <div className='project-name'>
                        Project 4
                    </div>
                    <div className='project-date'>
                        Jan 2023 - May 2023
                    </div>
                </div>
            </div>

        </div>
    </div>;
}

export default Projects;
