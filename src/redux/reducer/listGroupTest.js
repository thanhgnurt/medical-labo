import * as actionTypes from "./../constantActions/test";

const initialState = {
  listGroupTest: [
    {
      id: "001",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image: "/images/imgCarousel-6.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "002",
      nameTest: "Chức năng thận",
      include: "(Ure, Cre)",
      image: "/images/imgCarousel-5.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "003",
      nameTest: "Bộ mỡ",
      include: "(Cholesterol, Triglycerid, HDL, LDL)",
      image: "/images/imgCarousel-4.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "004",
      nameTest: "Đường Huyết máu",
      include: "(Glucose, HbA1C)",
      image: "/images/imgCarousel-3.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "005",
      nameTest: "Men tim",
      include: "(CK-MB, CK, Troponin T, Troponin I)",
      image: "/images/imgCarousel-2.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "006",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image: "/images/imgCarousel-1.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "007",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image: "/images/imgCarousel-5.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "008",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image: "/images/imgCarousel-5.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "009",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image:
        "https://vinmec-prod.s3.amazonaws.com/images/20190524_053937_118581_cach-chua-dieu-tri-.max-1800x1800.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "010",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image:
        "https://vinmec-prod.s3.amazonaws.com/images/20190524_053937_118581_cach-chua-dieu-tri-.max-1800x1800.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "011",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image:
        "https://vinmec-prod.s3.amazonaws.com/images/20190524_053937_118581_cach-chua-dieu-tri-.max-1800x1800.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "012",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image:
        "https://vinmec-prod.s3.amazonaws.com/images/20190524_053937_118581_cach-chua-dieu-tri-.max-1800x1800.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
    {
      id: "013",
      nameTest: "Chức năng gan",
      include: "(ALT, AST, GGT)",
      image:
        "https://vinmec-prod.s3.amazonaws.com/images/20190524_053937_118581_cach-chua-dieu-tri-.max-1800x1800.jpg",
      description:
        "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      detail: {
        tittle:
          "Xét nghiệm chức năng gan thường được khuyến nghị trong các tình huống sau:",
        content:
          "Các xét nghiệm chức năng gan giúp bác sĩ kiểm tra chức năng của gan và phát hiện các tổn thương gan. Những xét nghiệm máu này đo nồng độ protein và enzyme trong máu của bạn.",
      },
    },
  ],
  paperSelect: 1,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GROUP_TEST:
      return {
        ...state,
      };
    case actionTypes.FETCH_GROUP_TEST_SUCCESS:
      const { data } = action.payload.data;
      return {
        ...state,
        listGroupTest: data,
      };
    case actionTypes.FETCH_GROUP_TEST_FAILD:
      return {
        ...state,
        // listGroupTest: [],
      };
    case actionTypes.SELECT_PAPER_TEST:
      return {
        ...state,
        paperSelect: action.paper,
      };

    default:
      return { ...state };
  }
};

export default myReducer;
