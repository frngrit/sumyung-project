import NoodlePic from '../images/sumyung-noodles-pack.jpg'
import BaconPic from '../images/smoked_bacon.jpg'
import CheeseballPic from '../images/cheeseball.jpeg'

const menus = [
    {
      name: 'Sumyung (ซัมยังเผ็ดธรรมดา)',
      price: 55,
      source: NoodlePic,
      code: 'samyung',
      description: 'เลือกจำนวนซัมยังที่ต้องการต่อหนึ่งจาน (50 บาทต่อห่อ)'
    },

    {
      name: 'Bacon (เบค่อน)',
      price: 25,
      source: BaconPic,
      code: 'bacon',
      description: 'เลือกจำนวนเบค่อน (1 serve ได้ 50 กรัม) ที่ต้องการต่อหนึ่งจาน (25 บาทต่อ 50 กรัม)'
    },

    {
      name: 'Cheese fish ball (ลูกชิ้นปลาชีส)',
      price: 20,
      source: CheeseballPic,
      code: 'cheeseball',
      description: 'เลือกจำนวนลูกชิ้นปลาชีส (1 serve ได้ 2 ลูก) ที่ต้องการต่อหนึ่งจาน (20 บาทต่อ 3 ลูก)'
    },
  ]

const data = {
  menus
}

export default data