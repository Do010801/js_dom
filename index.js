

class SANGPHAM{
  constructor(ten,soLuong,thongTinh,gia,hinh)
  {
      this.ten = ten;
      this.soLuong = soLuong;
      this.thongTinh = thongTinh;
      this.gia = gia;
      this.hinh = hinh;
  }
}

let arr = [
  new SANGPHAM(' xiao lẻ',500,'acc chưa user chưa sinh nhật','50k','https://shopgenshin.com/files/3/images/genshin-acc-vip/IMG_20220207_152801-YQtfY.webp'),
  new SANGPHAM(' yelan lẻ',300,'acc  chưa user chưa sinh nhật còn 15 vé quây thường','40k','https://shopgenshin.com/files/3/images/genshin-acc-vip/IMG_20220706_165757-H1B0d.webp'),
  
  new SANGPHAM(' Diluc trấn DCCS',150,'acc c chưa user chưa sinh nhật','350k','https://shopgenshin.com/files/3/images/genshin-acc-vip/0008-spbja.webp'),
  new SANGPHAM(' Yelan/DIluc',500,'acc  chưa user chưa sinh nhật','450k','https://shopgenshin.com/files/3/images/genshin-acc-vip/IMG_20220716_025129-qYiVm.webp'),
  new SANGPHAM(' yae miko lẻ',210,'acc  chưa user chưa sinh nhật','50k','https://shopgenshin.com/files/3/images/genshin-acc-vip/2-fN1rP.webp'),
  new SANGPHAM(' kazuha/zhongli',50,'Kazuha C1 + Zhongli + Qiqi + Heizo C3 ( Qtk). Đã lệch','500k','https://shopgenshin.com/files/3/images/genshin-acc-vip/IMG_20220724_081537-xnfNB.webp'),
  new SANGPHAM(' acc waifu',1,'ACC WAIFU - Chưa sinh nhật : AYAKA, SHENHE, YELAN, GANYU, KOKOMI, YAE và DILUC trấn ( ĐCCS )','800k','https://shopgenshin.com/files/3/images/genshin-acc-vip/18-FnTv9.webp'),
  new SANGPHAM(' xiao/zhongli',20,'AR THẤP BỘ THƯƠNG DPS + SP : Xiao + Zhongli + XingqiuCM3 + NoelleCM3','500k','https://shopgenshin.com/files/3/images/genshin-acc-vip/758-kFBfH.webp'),
  new SANGPHAM(' acc vip',1,'14 char 5 sao - 7 char limited : Baal cung mệnh 3 trấn ( Đoạn thảo ), Zhongli trấn ( Hộ ma ), Klee trấn ( Điển tích ), Eula trấn ( Tiếng gió ), Kazuha trấn dame ( ASĐSM ), Keqing trấn ( ASĐSM ), Yelan ( Sấm sét ), Kokomi - Die FB Khách cọc 3m5 ngày 10/8 thanh toán nốt','50m','https://shopgenshin.com/files/3/images/genshin-acc-vip/7F22F1B8-C767-49DE-AD2D-A710F3AC9C07-VGZeZ.webp'),
  new SANGPHAM('acc vip',1,'3 THẦN GENSHIN + VENTI TRẤN + XIAO TRẤN + NING CM6 ĐIỂN TÍCH X3 + XIAO TRẤN + ZONGLI HOMA + DILUC MÔ CÔNG + EULA CM1 TKKN +GAYDU + TEAM SIÊU ĐẸP VÀ NHỮNG NGƯỜI BẠN NHIỀU TÀI NGUYÊN BUILD ĐẸP CHO ANH EM + BENNET CM5 SIÊU HIẾM (die lk tw)','5m','https://shopgenshin.com/files/3/images/genshin-acc-vip/492-ItVYR.webp'),
  new SANGPHAM('acc vip',1,'Con Hàng Khủng Cực Chiến _ Ar58 Klee CM4 Trấn Dttp + Ganyu CM1 Trấn Cung Amos + Baal CM2 HPD tl2 + Eula CM2 Tkkn + Hutao CM1 Trấn Hộ Ma + Zhongli + Venti CM2 Trấn Ctk tl2 + Diluc CM2 Kiếm Li Cốt Tl5 + Qiqi CM4 + Kequing + Jean Puk Baner thường 12 trang Sắp Nổ + Dư 4k6 nt cho ae Tích Roll lấy Trấn ( Acc đã Build Cực Đẹp Cho Ae )','5m','https://shopgenshin.com/files/3/images/genshin-acc-vip/IMG_20220207_152801-YQtfY.webp'),
];


for (let i = 0; i < arr.length; i++)
{

  document.getElementById('divCha').innerHTML += ` 
  
  <div class="blog-wrapper">
  <div class="blog-card">
      <div class="card-img"><img
              src="${arr[i].hinh}">
          <h1>${arr[i].ten}</h1>
      </div>
      <div class="card-details"><span><i class="fa fa-calendar"></i> Giá ${arr[i].gia}</span><span><i
                  class="fa fa-heart"></i>${arr[i].soLuong}</span></div>
      <div class="card-text">
          <p>${arr[i].thongTinh}</p>
      </div>
      <div class="read-more">Mua sản phẩm</div>
  </div>
  </div>`
}
