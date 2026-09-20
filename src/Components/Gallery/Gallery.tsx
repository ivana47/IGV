import './Gallery.css'
import gallery_1 from '../../assets/front_4/slika1.jpg'
import gallery_2 from '../../assets/front_4/slika2.jpg'
import gallery_3 from '../../assets/front_4/slika3.jpg'
import gallery_4 from '../../assets/front_4/slika4.jpg'
import gallery_5 from '../../assets/front_4/slika5.jpg'
import gallery_6 from '../../assets/front_4/slika6.jpg'
import gallery_7 from '../../assets/front_4/slika7.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useEffect, useRef, useState, type CSSProperties } from 'react'

const cards = [
    { src: gallery_1, caption: 'Termoizolacija kotla TE' },
    { src: gallery_2, caption: 'Komora staklarske peći' },
    { src: gallery_3, caption: 'Remont kotla u termoelektrani' },
    { src: gallery_4, caption: 'Zidanje staklarske peći' },
    { src: gallery_5, caption: 'Torkretiranje kanala u TE' },
    { src: gallery_6, caption: 'Priprema mase za torkretiranje' },
    { src: gallery_7, caption: 'Montaža skele u ložištu kotla' },
]

const AUTO_ROTATE_MS = 2800
const RESUME_AFTER_MS = 4000
const DRAG_THRESHOLD = 50

// Vraća relativni pomak kartice u odnosu na trenutno centralnu (npr. -1, 0, 1, 2)
const getOffset = (cardIndex: number, currentIndex: number) => {
    const n = cards.length
    let offset = cardIndex - currentIndex
    if (offset > n / 2) offset -= n
    if (offset < -n / 2) offset += n
    return offset
}

const getCardStyle = (cardIndex: number, currentIndex: number): CSSProperties => {
    const offset = getOffset(cardIndex, currentIndex)
    const abs = Math.abs(offset)
    const dir = Math.sign(offset)

    // Širok, plitak ovalni raspored - kartice dalje od centra blago "padaju"
    // po Y osi, čime nastaje vidljiva zakrivljena (eliptična) putanja.
    const rotateY = -dir * Math.min(abs * 20, 28) // deg
    const scale = Math.max(1 - abs * 0.14, 0.62)
    const opacity = abs > 2 ? 0 : Math.max(1 - abs * 0.25, 0.4)
    const dip = abs * abs * 12 // px

    return {
        transform: `translate(-50%, -50%) translateX(calc(var(--spread) * ${dir * abs})) translateY(${dip}px) translateZ(calc(var(--depth) * ${-abs})) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        zIndex: 10 - abs,
    }
}

const Gallery = () => {
    const [index, setIndex] = useState(0)
    const isPausedRef = useRef(false)
    const isDraggingRef = useRef(false)
    const draggedRef = useRef(false)
    const dragStartXRef = useRef(0)
    const dragDeltaRef = useRef(0)
    const resumeTimeoutRef = useRef<number | undefined>(undefined)

    // Auto-rotacija karusela
    useEffect(() => {
        const id = window.setInterval(() => {
            if (isPausedRef.current || isDraggingRef.current) return
            setIndex((prev) => (prev + 1) % cards.length)
        }, AUTO_ROTATE_MS)
        return () => window.clearInterval(id)
    }, [])

    useEffect(() => {
        return () => window.clearTimeout(resumeTimeoutRef.current)
    }, [])

    const pause = () => {
        isPausedRef.current = true
    }

    const resume = () => {
        isPausedRef.current = false
        isDraggingRef.current = false
    }

    const dragStart = (x: number) => {
        isDraggingRef.current = true
        isPausedRef.current = true
        draggedRef.current = false
        dragStartXRef.current = x
        dragDeltaRef.current = 0
    }

    const dragMove = (x: number) => {
        if (!isDraggingRef.current) return
        const delta = x - dragStartXRef.current
        dragDeltaRef.current = delta
        if (Math.abs(delta) > 8) draggedRef.current = true
    }

    const dragEnd = () => {
        if (!isDraggingRef.current) return
        isDraggingRef.current = false
        const delta = dragDeltaRef.current
        if (delta > DRAG_THRESHOLD) {
            setIndex((prev) => (prev - 1 + cards.length) % cards.length)
        } else if (delta < -DRAG_THRESHOLD) {
            setIndex((prev) => (prev + 1) % cards.length)
        }
        dragDeltaRef.current = 0
    }

    const goTo = (i: number) => {
        if (draggedRef.current) {
            draggedRef.current = false
            return
        }
        setIndex(i)
        isPausedRef.current = true
        window.clearTimeout(resumeTimeoutRef.current)
        resumeTimeoutRef.current = window.setTimeout(() => {
            isPausedRef.current = false
        }, RESUME_AFTER_MS)
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='layer'>
            <div className="gallery-layer">
                <p className="carousel-hint">Prevucite ili kliknite na sliku</p>
                <div
                    className="stage"
                    onMouseEnter={pause}
                    onMouseLeave={() => { dragEnd(); resume() }}
                    onMouseDown={(e) => dragStart(e.clientX)}
                    onMouseMove={(e) => dragMove(e.clientX)}
                    onMouseUp={dragEnd}
                    onTouchStart={(e) => { pause(); dragStart(e.touches[0].clientX) }}
                    onTouchMove={(e) => dragMove(e.touches[0].clientX)}
                    onTouchEnd={() => { dragEnd(); resume() }}
                >
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="card"
                            style={getCardStyle(i, index)}
                            onClick={() => goTo(i)}
                        >
                            <img src={card.src} alt="" draggable={false} />
                            <div className="card-caption">{card.caption}</div>
                        </div>
                    ))}
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
