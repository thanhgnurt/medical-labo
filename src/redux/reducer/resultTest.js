import * as actionTypes from "./../constantActions/user";

const initialState = {
  resultTest: [
    {
        "name" : "Creatinin",
        "result" : "95"

    },
    {
        "name" : "Ure",
        "result" : "7.6"

    },
    {
        "name" : "Glucose",
        "result" : "9.5"

    },
    {
        "name" : "AST",
        "result" : "45"

    },
    {
        "name" : "ALT",
        "result" : "27"

    },
    {
        "name" : "GGT",
        "result" : "55"

    },
    {
        "name" : "Cholesterol",
        "result" : "5.9"

    },
    {
        "name" : "Triglycerid",
        "result" : "3.5"

    },
    {
        "name" : "Caxi",
        "result" : "3.5"

    },
    {
        "name" : "HDL",
        "result" : "3.5"

    },
    {
        "name" : "LDL",
        "result" : "3.5"

    },
    {
        "name" : "Na",
        "result" : "3.5"

    },
    {
        "name" : "Ka",
        "result" : "3.5"

    },
    {
        "name" : "Cl",
        "result" : "3.5"

    },
    {
        "name" : "Mg",
        "result" : "95"

    }
]
};

const resultTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOADDING_RESULT:
      return { ...state, 
        // reusultTest: []
       };
    case actionTypes.USER_LOADDING_RESULT_SUCCESS:
      const { data } = action.payload.data;
      return { ...state, resultTest: data };
    case actionTypes.USER_LOADDING_RESULT_FAILD:
      return { ...state, 
        // resultTest: [] 
      };
      default:
      return { ...state };
  }
};

export default resultTestReducer;
