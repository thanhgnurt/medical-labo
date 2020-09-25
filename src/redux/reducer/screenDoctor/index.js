import * as actionTypes from "./../../constantActions/screenDoctor";


const initialState = {
    listPatients : [
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920001",
            year : 1995,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920002",
            year : 1985,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920003",
            year : 1996,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920004",
            year : 1965,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920005",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920006",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920007",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920008",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920009",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920010",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920011",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920012",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920013",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920014",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920015",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920016",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920017",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920018",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },
        {
            name : "Nguyễn Thị Phương Trinh",
            id:"0920019",
            year : 2000,
            sex: "female",
            address : "152 Nguyễn Ái Quốc , Khu Phố , Biên Hòa , Đồng Nai",


        },

    ]

    
}

const screenDoctor = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_PATIENTS:
      return { ...state};
    case actionTypes.FETCH_LIST_PATIENTS_SUCCESS:
    //   const { data } = action.payload.data;
      return  {...state};
    case actionTypes.FETCH_LIST_PATIENTS_FAILD:
      return  {...state} ;
      default:
      return {...state };
  }
};

export default screenDoctor;
