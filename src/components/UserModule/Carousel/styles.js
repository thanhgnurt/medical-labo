const styles = theme=>({
    carouselItem :{
        height : 470,
        width : "100%",
        padding : "0 10px",
        marginLeft: -128
    },
    iconPre :{
        fontSize : 50
    },
    "@media screen and (max-width: 700px)": {
        carouselItem :{
            height : 470,
            width : "100%",
            padding :0,
            marginLeft: 0
        },
        
      },

});
export default styles;