const projectData = [
    {title:"Euphoria",image:"assets/img1.jpeg",isAlternate:false},
    {title:"Scratcher",image:"assets/2.avif",isAlternate:false},
    {title:"Ember",image:"assets/3.avif",isAlternate:false},
    {title:"Liquid Soleil",image:"assets/4.avif",isAlternate:false},
    {title:"Vacuum",image:"assets/5.avif",isAlternate:false},
    {title:"Synthesis",image:"assets/6.avif",isAlternate:false},
]
const temp = (start,end,faction)=>start+(end-start)*faction;
const config = {
    SCROLL_SPEED:0.75,
    LERP_FACTOR:0.05,
    BUFFER_SIZE:15,
    CLEANUP_THRESHOLD:50,
    MAX_VELOCITY:120,
    SNAP_DURACTION:500
}
const state = {
    currentY:0,
    targetY:0,
    lastY:0,
    scrollVelocity:0,
    isDragging:false,
    startY:0,
    projects:new Map(),
    parallaxImages:new Map(),
    projectHeight:window.innerHeight,
    isSnapping:false,
    snapStartTime:0,
    snapStartY:0,
    snapTargetY:0,
    lastScrollTime:Date.now(),
    isScrolling:false,

}
const createPanallaxImage = (image)=>{
    let bounds = null
    let currentTranslateY=0;
    let targetTranslateY=0;
    const
}