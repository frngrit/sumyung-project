import NoodlePic from '../images/sumyung-noodles-pack.jpg'
import BaconPic from '../images/smoked_bacon.jpg'
import CheeseballPic from '../images/cheeseball.jpeg'

const menus = [
    {
      name: 'Sumyung (ซัมยังเผ็ดธรรมดา)',
      price: 50,
      unit: 'ห่อ',
      amount_calculation: 1,
      source: NoodlePic,
      code: 'sumyung',
      min: 1,
      description: 'เลือกจำนวนซัมยังที่ต้องการต่อหนึ่งจาน'
    },

    {
      name: 'Bacon (เบค่อน)',
      price: 20,
      unit: 'กรัม',
      amount_calculation: 40,
      source: BaconPic,
      code: 'bacon',
      min: 0,
      description: 'เลือกจำนวนเบค่อน (1 serve ได้ 50 กรัม) ที่ต้องการต่อหนึ่งจาน'
    },

    {
      name: 'Cheese fish ball (ลูกชิ้นปลาชีส)',
      price: 20,
      unit: 'ลูก',
      amount_calculation: 3,
      source: CheeseballPic,
      code: 'cheeseball',
      min: 0,
      description: 'เลือกจำนวนลูกชิ้นปลาชีส (1 serve ได้ 2 ลูก) ที่ต้องการต่อหนึ่งจาน'
    },
  ]

export default menus
