import React from 'react'
import {Link} from 'react-router-dom';
import './gallery.css'

const Gallery = ({name}) => {
    // const [modal, setModal] = useState(false);
    // const [modalImage, setModalImage] = useState('');

    // const getimage = (item) => {
    //     setModalImage(item.img);
    //     setModal(true);
    // }
    // const closemodal = () => {
    //     setModal(false)
    // }

    return (
        <div className='gallery'>
            <div className='gallery-top'>
                <img src="" alt=""/>
                {/* <span>scroll down &gt;&gt;&gt;</span> */}
                <h2>{name}</h2>
                <Link to={'/packages'}
                    className='booking-link'>Book shoot</Link>
            </div>

            {/* {
          images.map((item,index)=>{
            return(
            <div className={modal? 'modal open' : 'modal'}>
              <i className="close" onClick={closemodal}>&times;</i>
              <img src={modalImage} alt={modalImage} />
            </div>

            )
          })
      } */}

            {/* {
          images.map((item,index)=>{
            return(
              <div className='studio-img-container'>
              <img src={item.img} className='studio-img' alt={item.img} key={index} onClick={()=> getimage(item)} />
              </div>
            )
          })
        } */}
            <div className='gallery-bottom'>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>
            </div>


        </div>
    )
}

export default Gallery
