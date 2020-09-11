import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

function RenalFunction(props) {
  const { groupTest, classes } = props;
  return (
    <div className={classes.paper}>
      <div>
        <h3>Ý nghĩa của các xét nghiệm đánh giá chức năng thận</h3>
        <div className={classes.summary}>
          <p>
            Thận là nhiệm vụ loại bỏ chất thải và dịch thừa từ máu. Chức năng
            thận được đánh giá qua các xét nghiệm máu, nước tiểu hoặc xét nghiệm
            chẩn đoán hình ảnh,... Người bệnh thường được chỉ định thực hiện kết
            hợp nhiều xét nghiệm để đánh giá chính xác nhất hoạt động của thận.
          </p>
        </div>
        <img src={groupTest.image} alt={groupTest.nameTest}></img>
      </div>
      <div className={classes.listHeader}>
        <ul className={classes.ul_main}>
          <li>
            <h5>1. Các xét nghiệm sinh hóa máu</h5>
            <ul className={classes.ul_secondary}>
              <li>
                <h6>1.1 Xét nghiệm ure máu</h6>
                <ul>
                  <li>
                    <p>
                      Ure là sản phẩm thoái hóa của protein, được lọc qua cầu
                      thận và đào thải ra ngoài cơ thể qua nước tiểu. Xét nghiệm
                      ure máu được dùng để đánh giá chức năng thận và theo dõi
                      các căn bệnh về thận. Chỉ số chức năng thận bình thường
                      nếu giá trị ure máu dao động trong khoảng 2.5 - 7.5
                      mmol/l.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ure máu tăng trong trường hợp mắc các bệnh như viêm cầu
                      thận, viêm ống thận, sỏi thận, suy thận, sỏi niệu quản,
                      mất nước do sốt cao, tiêu chảy, suy tim sung huyết,... Ure
                      máu giảm khi người bệnh ăn ít protein, suy giảm chức năng
                      gan, truyền nhiều dịch,...
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>1.2 Xét nghiệm Creatinin huyết thanh</h6>
                <ul>
                  <li>
                    <p>
                      Creatinin là sản phẩm của sự thoái hóa creatin trong các
                      cơ, được đào thải qua thận. Chỉ số creatinin trong máu
                      được dùng để đánh giá chức năng thận. Giá trị creatinin
                      bình thường đối với nam giới là 0.6 -1.2 mg/dl và nữ giới
                      là 0.5 - 1.1 mg/dl. Khi nồng độ creatinin tăng cao đồng
                      nghĩa với việc có rối loạn chức năng thận. Nguyên nhân là
                      vì khi chức năng thận suy giảm thì khả năng lọc creatinin
                      sẽ giảm, dẫn tới nồng độ chất này trong máu sẽ tăng cao
                      hơn bình thường. Ví dụ: chỉ số creatinin trong suy thận
                      tăng lên theo từng cấp độ suy thận. Chỉ số creatinin dưới
                      130 mmol/l - suy thận độ I, 130 - 299 mmol/l - suy thận độ
                      II, 300 - 499 mmol/l - suy thận độ IIIa, 500 - 899 mmol/l
                      - suy thận độ III b, trên 900 mmol/l - suy thận độ IV.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>1.3 Điện giải đồ</h6>
                <h6>
                  Rối loạn chức năng thận gây mất cân bằng các chất điện giải
                  trong cơ thể. Cụ thể:
                </h6>
                <ul>
                  <li>
                    <p>
                      Sodium (Natri): natri máu ở người bình thường dao động
                      trong khoảng 135 - 145 mmol/L. Ở người bị suy thận, natri
                      máu giảm có thể do mất natri qua da, qua thận, qua đường
                      tiêu hóa hoặc do thừa nước.
                    </p>
                  </li>
                  <li>
                    <p>
                      Potassium (Kali): kali máu ở người bình thường là 3,5- 4,5
                      mmol/L. Bệnh nhân suy thận thường bị tăng kali máu vì khả
                      năng đào thải kali của thận bị suy giảm.
                    </p>
                  </li>
                  <li>
                    <p>
                      Canxi máu: canxi máu ở người khỏe mạnh là 2.2-2.6 mmol/L.
                      Suy thận gây giảm canxi máu kèm theo tăng phosphat.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>1.4 Xét nghiệm rối loạn cân bằng kiềm toan</h6>
                <ul>
                  <li>
                    <p>
                      Đây là một xét nghiệm chức năng thận thường được bác sĩ
                      chỉ định cho người nghi ngờ mắc bệnh thận. Thông thường,
                      pH máu được duy trì ở mức 7,37 - 7,43 để đảm bảo hoạt động
                      tối ưu của các men tế bào, yếu tố đông máu và các protein
                      co cơ. Suy thận sẽ làm giảm thải các acid trong quá trong
                      quá trình chuyển hóa hoặc gây mất bicarbonat, làm tăng
                      nồng độ acid trong máu và các cơ quan trong cơ thể.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>1.5 Xét nghiệm acid uric máu</h6>
                <ul>
                  <li>
                    <p>
                      Đây là xét nghiệm được sử dụng để chẩn đoán bệnh gout,
                      bệnh thận,... Bình thường nồng độ acid uric trong máu của
                      nam giới là 180 - 420 mmol/l, nữ giới là 150 - 360 mmol/l.
                      Acid uric máu tăng ở những người mắc bệnh suy thận, gout,
                      vẩy nến,...
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>1.6 Một số xét nghiệm khác</h6>
                <ul>
                  <li>
                    <p>
                      Albumin huyết thanh: thông thường, chỉ số albumin huyết
                      thanh là 35 - 50g/L, chiếm 50 - 60% protein toàn phần.
                      Albumin giảm mạnh ở những người mắc bệnh lý cầu thận cấp
                      như viêm cầu thận cấp.
                    </p>
                  </li>
                  <li>
                    <p>
                      Protein toàn phần huyết tương: là chỉ số phản ánh chức
                      năng lọc của cầu thận. Chỉ số protein trong máu bình
                      thường ở mức 60 - 80 g/L. Người mắc bệnh thận thường bị
                      giảm protein toàn phần do màng lọc cầu thận bị tổn thương.
                    </p>
                  </li>
                  <li>
                    <p>
                      Tổng phân tích tế bào máu: người bị giảm số lượng hồng cầu
                      thường mắc suy thận mạn tính.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <img src="/images/imgCarousel-3.jpg" alt="vidu"></img>
          </li>
          <li>
            <h5>2. Xét nghiệm nước tiểu</h5>
            <ul className={classes.ul_secondary}>
              <li>
                <h6>2.1 Tổng phân tích nước tiểu</h6>
                <ul>
                  <li>
                    <p>
                      Tỷ trọng nước tiểu: tỉ trọng nước tiểu bình thường là 1,01
                      - 1,020. Suy giảm chức năng thận giai đoạn sớm có thể làm
                      giảm độ cô đặc của nước tiểu, dẫn đến giảm tỉ trọng nước
                      tiểu. Trong trường hợp nghi ngờ mắc bệnh thận, người bệnh
                      có thể được chỉ định thực hiện thêm các xét nghiệm như
                      nghiệm pháp cô đặc nước tiểu, nghiệm pháp pha loãng nước
                      tiểu, so sánh tỷ trọng nước tiểu ngày và đêm,...
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      Protein: mẫu tổng phân tích nước tiểu có protein hỗ trợ
                      bác sĩ chỉ định bệnh nhân thực hiện thêm xét nghiệm định
                      lượng đạm niệu 24 giờ.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>2.2 Định lượng đạm niệu (protein nước tiểu) 24 giờ</h6>
                <ul>
                  <li>
                    <p>
                      Protein trong nước tiểu ở người khỏe mạnh là 0 -
                      0.2g/l/24h. Ở người mắc bệnh thương tổn cầu thận, viêm cầu
                      thận cấp, suy thận, các bệnh lý toàn thân có ảnh hưởng tới
                      thận (đái tháo đường, lupus ban đỏ, tăng huyết áp),...
                      thường bị tăng protein niệu lên trên 0.3g/l/24h.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <img src="/images/imgCarousel-2.jpg" alt="vidu"></img>
          </li>
          <li>
            <h5>3. Xét nghiệm chẩn đoán hình ảnh</h5>
            <ul className={classes.ul_secondary}>
              <li>
                <h6>3.1 Siêu âm bụng</h6>
                <ul>
                  <li>
                    <p>
                      Giúp phát hiện tình trạng thận ứ nước do tắc nghẽn niệu
                      quản. Nếu thận người bệnh bị ứ nước hai bên có thể gây suy
                      thận cấp tính hoặc suy thận mạn tính, phát hiện các trường
                      hợp bệnh thận đa nang bẩm sinh, di truyền. Hình ảnh siêu
                      âm thấy thận có kích thước nhỏ, thay đổi cấu trúc, có
                      nhiều nang hoặc mất phân biệt vỏ tủy,... gợi ý bệnh thận
                      mạn tính. Ngoài ra, phương pháp siêu âm cũng có thể giúp
                      phát hiện sỏi thận hoặc khối u trong thận.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>3.2 Chụp CT Scan bụng</h6>
                <ul>
                  <li>
                    <p>
                      Là phương pháp sử dụng tia X thăm dò hình ảnh, cho phép
                      bác sĩ thấy rõ hình ảnh toàn bộ hệ tiết niệu. Phương pháp
                      chụp CT scan bụng thường chỉ sử dụng trong các trường hợp
                      nghi ngờ suy thận do tắc nghẽn đường tiết niệu. Chụp CT
                      scan có tiêm thuốc cản quang bằng máy chụp đa lát cắt có
                      thể dựng hình toàn bộ đường tiết niệu, giúp bác sĩ phát
                      hiện được vị trí và nguyên nhân gây bế tắc niệu quản.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h6>3.3 Xạ hình thận bằng đồng vị phóng xạ</h6>
                <ul>
                  <li>
                    <p>
                      Là xét nghiệm duy nhất cho phép đánh giá chức năng từng
                      bên thận. Phương pháp này giúp bác sĩ nhìn rõ chức năng
                      lọc của từng thận, tỷ lệ phần trăm tưới máu và tham gia
                      chức năng của từng thận. Ngoài ra, nếu làm thêm nghiệm
                      pháp tiêm thuốc lợi tiểu, phương pháp xét nghiệm này cũng
                      giúp bác sĩ đánh giá được mức độ tắc nghẽn niệu quản hai
                      bên.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <img src="/images/imgCarousel-1.jpg" alt="vidu"></img>
          </li>
          <li>
            <h5>4. Chỉ định các xét nghiệm chức năng thận</h5>
            <ul>
              <li>
                <p>
                  Kiểm tra sức khỏe định kỳ hằng năm: làm các xét nghiệm đơn
                  giản có tính định hướng như xét nghiệm sinh hóa máu, tổng phân
                  tích nước tiểu, công thức máu và siêu âm bụng.
                </p>
              </li>
              <li>
                <p>
                  Tiền căn gia đình có các bệnh di truyền về thận hoặc có người
                  thân bị suy thận: cần thực hiện xét nghiệm sinh hóa máu, công
                  thức máu, tổng phân tích nước tiểu, siêu âm bụng và các xét
                  nghiệm chuyên biệt về di truyền.
                </p>
              </li>
              <li>
                <p>
                  Khi có các biểu hiện suy thận: nên thực hiện xét nghiệm sinh
                  hóa máu, tổng phân tích nước tiểu, công thức máu và siêu âm
                  bụng. Nếu phát hiện các nguyên nhân gây tắc nghẽn hệ niệu cần
                  thực hiện thêm các xét nghiệm hình ảnh. Nếu không tìm thấy tắc
                  nghẽn thì có thể thực hiện sinh thiết thận.
                </p>
              </li>
              <li>
                <p>
                  Có tiền căn can thiệp thủ thuật, phẫu thuật trên đường tiết
                  niệu hoặc các cơ quan vùng bụng: nên làm các xét nghiệm sinh
                  hóa máu, công thức máu, tổng phân tích nước tiểu và siêu âm
                  bụng. Nếu có dấu hiệu tắc nghẽn hệ niệu nên làm thêm các xét
                  nghiệm hình ảnh.
                </p>
              </li>
            </ul>
            <img src="/images/imgCarousel-4.jpg" alt="vidu"></img>
          </li>
        </ul>
        <div>
          <h5>Xem Thêm : </h5>
          <ul >
              <li>Ý nghĩa của các chỉ số xét nghiệm sinh hóa máu</li>
              <li>Ý nghĩa của các chỉ số xét nghiệm sinh hóa máu</li>
              <li>Ý nghĩa của các chỉ số xét nghiệm sinh hóa máu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(RenalFunction);
