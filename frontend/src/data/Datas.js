import NoodlePic from '../images/sumyung-noodles-pack.jpg'
import BaconPic from '../images/smoked_bacon.jpg'
import CheeseballPic from '../images/cheeseball.jpeg'
import Promotion from '../images/promotion.png'

const menus = [
    {
      name: 'Sumyung (ซัมยังเผ็ดธรรมดา)',
      price: 55,
      source: NoodlePic,
      code: 'samyung',
      description: 'เลือกจำนวนซัมยังที่ต้องการต่อหนึ่งจาน (55 บาทต่อห่อ)'
    },

    {
      name: 'Bacon (เบค่อน)',
      price: 25,
      source: BaconPic,
      code: 'bacon',
      description: 'เลือกจำนวนเบค่อนที่ต้องการต่อหนึ่งจาน (25 บาทต่อ 50 กรัม)'
    },

    {
      name: 'Cheese fish ball (ลูกชิ้นปลาชีส)',
      price: 20,
      source: CheeseballPic,
      code: 'cheeseball',
      description: 'เลือกจำนวนลูกชิ้นปลาชีสที่ต้องการต่อหนึ่งจาน (20 บาทต่อ 3 ลูก)'
    },
  ]


const data = {
  menus,
  Promotion
}

export default data
