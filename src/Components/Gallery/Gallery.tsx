import './Gallery.css'
import gallery_1 from '../../assets/WEB/Skela/slika.jpg'
import gallery_2 from '../../assets/Termoizolacija/slika2.jpg'
import gallery_3 from '../../assets/Termoizolacija/slika11.jpg'
import gallery_4 from '../../assets/Vatrostalstvo/slika10.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"



const Gallery = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='layer'>
            <div className="gallery-layer">

            <div className="gallery">
                <img src={gallery_1} alt="" />
                <div className="caption">
                TE Tuzla 20.05.2024
                </div>
            </div>
            <div className="gallery">
                <img src={gallery_2} alt="" />
                <div className="caption">
                    TE Tuzla 20.05.2024
                </div>
            </div>
            <div className="gallery">
                <img src={gallery_3} alt="" />
                <div className="caption">
                    Termoizolacija
                </div>
            </div>
            <div className="gallery">
                <img src={gallery_4} alt="" />
                 <div className="caption">
                    Termoizolacija
                </div>
            </div>
            </div>
            <motion.div 
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='btn-container'>
        <Link to='/images' className='btn dark-btn'>Pogledaj više <FaArrowRight className='arrowIcon' /></Link>
    </motion.div>
           
        </motion.div>
    )
}

export default Gallery