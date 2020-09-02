import * as actionTypes from "./../constantActions/userPape";

const initialState = {
  listNews: [
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-5.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-5.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-5.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "tittle": "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
      "description": "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
      "image": "./images/imgCarousel-5.jpg"
    }
  ],

};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_NEWS:
      return {
        ...state,
        // listNews: [],
      };
    case actionTypes.FETCH_LIST_NEWS_SUCCESS:
        const {data}=action.payload
      return {
        ...state,
        listNews:data
      };
    case actionTypes.FETCH_LIST_NEWS_FAILD:
      return {
        ...state,
        // listNews: [],
      };


    default:
      return { ...state };
  }
};

export default myReducer;
