let heightScreen =window.innerHeight-100 ;
if(heightScreen<550){
    heightScreen = "var(--heightCarousel)"
}

const styles = theme=>({
    carouselItem :{
        height : heightScreen,
        width : "100%",
        padding : "0 10px",
        marginLeft: -128
    },
    iconPre :{
        fontSize : 50
    },
    "@media screen and (max-width: 700px)": {
        carouselItem :{
            padding :0,
            marginLeft: 0
        },
        
      },

});
export default styles;