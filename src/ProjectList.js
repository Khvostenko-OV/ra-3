import './ProjectList.css';

export default function ProjectList(projects) {
  return (
    <div className='projects-container'>
      { 
        projects.map(item => 
          <div className='projects-card'>
            <img src={item.img} width='100%' alt='...'/>
          </div>
        )
      }
    </div>
  );
}