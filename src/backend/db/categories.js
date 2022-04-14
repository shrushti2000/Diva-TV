import { v4 as uuid } from "uuid";
import Makeup from '../../assets/images/3.png'
import Skincare from '../../assets/images/4.png'
import Haircare from '../../assets/images/5.png'
import menstrualHygiene from '../../assets/images/7.png'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Makeup",
    description:
      "All women are pretty without makeup but right makeup can be pretty powerful.",
      img:Makeup
  },
  {
    _id: uuid(),
    categoryName: "Fashion",
    description:
      "Menstruation is not the problem. Poor menstrual hygiene is!",
      img:menstrualHygiene
  },
 
  {
    _id: uuid(),
    categoryName: "Haircare",
    description:
      "Hair doesn’t make the woman, but good hair definitely helps.Invest in your hair as it is the crown you never take off",
      img:Haircare
  },
  {
    _id: uuid(),
    categoryName: "Skincare",
    description:
      "Good skin is the best foundation for your makeup. Take time to make your skin happy!",
      img:Skincare
  },
  
];
