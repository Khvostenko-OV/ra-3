import './ProjectList.css';

export default function ProjectList(projects) {
  return (
    <div className='projects-container'>
      { 
        projects.map(item => {
        return (
          <div className='projects-card'>
            <img src={item.img} width={200} alt='forever'/>
          </div>
        );
      })}
    </div>
  );
}