import React from "react";
import { useParams } from "react-router-dom";

export default function TableBody(props) {
  const { resultTest } = props;
  let {id }= useParams();
  const findId = (id, resultTest) => {
    for (let i = 0; i < resultTest.length; i++) {
      if (resultTest[i].id === id) {
        return i;
      }
    }
  };
  const showTableBody = (id, resultTest) => {
    if (true) {
      const index = findId(id, resultTest);
      const results = resultTest[index].ket_qua;
      return results.map((item)=>{
          return (
            <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.name==="Ion" ? "": item.result}</td>
            <td>12.5-14.6</td>
            <td>mg/dl</td>
            <td>Bình thường</td>
          </tr>
          )

      })
      
    }
  };

  return (
    <tbody>
 
      {showTableBody(id, resultTest)}
    </tbody>
  );
}
