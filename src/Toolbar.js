import './Toolbar.css';

export default function Toolbar(filters, selected, onSelectFilter) {
  return (
    <div className='toolbar-container'>
      {
        filters.map(item => 
          <div className={item === selected? 'toolbar-filter toolbar-selected' : 'toolbar-filter'} 
              onClick={() => onSelectFilter(item)}>{item}</div>
        )
      }
    </div>
  );
}