const styles = theme =>({
    carouselItem:{
        position :"relative",
        width : "100%"
    },
    divImage :{
        height : 470,

    },
    image :{
        objectFit :"cover",
        position:"absolute",
        zIndex : 1,
        borderRadius : "10px",
    },
    backgroundLayer:{
        position:"absolute",
        zIndex:2,
        backgroundColor : "rgba(0, 0, 0, 0.3)",
        top:0,
        bottom:0,
        left : 0,
        right : 0,
        borderRadius : "10px",
        
    },
    content :{
        position :"absolute",
        width :"100%",
        zIndex : 100,
        top : 30,
        color : "white",
        textAlign : "center",
        margin : "0 auto",
        // top: "50%",
        left: "50%",
        transform: "translate(-50%, 0)"
        
    },
    text :{
        display : "block"

    },
    description:{
        fontSize : 18,
        paddingBottom : 20,
        fontStyle : "italic"
       

    },
    listAsk:{
        textAlign : "left",
        "& li":{
           fontSize : 20,
           color : "white"

        }

    },
    gridContainer:{
        position:"relative",
        width : "100%"

    },
    setSchedule :{
        marginTop : 20,
      
        
    },
    button :{
        marginLeft : 10
    }


});
export default styles;