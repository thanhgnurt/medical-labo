import * as actionTypes from "./../constantActions/userPape";

const initialState = {
  listNews: [
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-1.jpg"
    },
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-2.jpg"
    },
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-3.jpg"
    },
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-4.jpg"
    },
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-5.jpg"
    },
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-6.jpg"
    },
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-4.jpg"
    },
    {
      "id":"news_001",
      "tittle": "13 cách phòng bệnh tiểu đường trước khi quá muộn",
      "description": "Phòng bệnh tiểu đường trước khi lượng đường và insulin trong máu lên quá cao sẽ giúp bạn tránh được nhiều biến chứng nguy hiểm. Bằng cách duy trì chế độ ăn uống lành mạnh kết hợp với vận động thường xuyên, bạn sẽ không lo mắc phải chứng bệnh phổ biến này!",
      "content":{
        "content_1":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_2":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_3":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
        "content_4":{
          "tittle":"1. Cắt đường và carb để phòng bệnh tiểu đường",
          "description":"Chế độ ăn có các thực phẩm nhiều đường và carb đã qua chế biến có thể đẩy nhanh tiến triển bệnh ở những người đã mắc tiền tiểu đường. Cơ thể nhanh chóng chuyển hóa các loại thực phẩm này thành các phân tử đường nhỏ và hấp thụ vào máu. Sự tăng hàm lượng đường trong máu sẽ kích thích tuyến tụy sản xuất insulin – một loại hormone giúp kiểm soát lượng đường. Ở những người bị tiền tiểu đường, các tế bào của cơ thể kháng insulin nên lượng đường trong máu những bệnh nhân này vẫn ở mức cao. Khi này, tuyến tụy sẽ sản xuất nhiều insulin hơn để hạ thấp lượng đường trong máu xuống mức bình thường. Qua thời gian, quá trình này dẫn tới hệ quả là lượng đường và insulin đều ở mức cao và cuối cùng bệnh sẽ tiến triển qua giai đoạn bệnh tiểu đường tuýp 2.",
          "image":"./images/imgCarousel-1.jpg",

        },
       
      },
      "image": "./images/imgCarousel-1.jpg"
    },


   
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
