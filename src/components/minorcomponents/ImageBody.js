import sophie from '../minorcomponents/imgs/home.jpg'
function ImageBody() {
    return(
        <div>
            <img src={sophie} id="homeImage"/>
            <h3 id="textOverImage">Rasta Imagery</h3>
        </div>

        // Would like to use grid to give side bars but small in comparison to the image, image should be the focus
    )
}

export default ImageBody