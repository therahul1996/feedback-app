import React, {useState} from 'react'
import close from '../img/close.png'
import noDataImg from '../img/no-data.png'
import Pagination from './pagination/Pagination'
const ITEMS_PER_PAGE = 6;
const ListContent = ({ feedbacks, deleteFeedback }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(feedbacks.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = feedbacks.slice(startIndex, endIndex);
  return (
    <div className='mainSec'>

      {feedbacks.length > 0 ? (
        <div className='mainContent'>
          <div className='list-group'>
            {currentItems.map(feedback => (
              <div className='list-card' key={feedback.id}>
                <div className='d-flex align-items-center'>
                  <div>
                    <img src={feedback.photo} alt='user-name' className='user-image' />
                  </div>
                  <div className='ml-15'>
                    <h3 className='m-0'>{feedback.title}</h3>
                    <h4 className='m-0'>{feedback.desc}</h4>
                    <p>{feedback.date}</p>
                  </div>
                </div>
                <img src={close} className='close-icon' alt='close-icon' onClick={() => deleteFeedback(feedback.id)} />
              </div>
            ))}
          </div>
        </div>
      )
        : (
          <div className='no-data-sec'>
            <img src={noDataImg} alt='no data' />
            <h3>No Data Found</h3>
          </div>

        )}
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}


export default ListContent