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
      "Know what's the makeup routine of Katrina kaif and Janhavi Kapoor",
    img: Makeup
  },
  {
    _id: uuid(),
    categoryName: "Fashion",
    description:
      "Get some awesome fashion tips from our celebrity stylists!",
    img: menstrualHygiene
  },

  {
    _id: uuid(),
    categoryName: "Haircare",
    description:
      "Know more about maintaining curly hair from Mithila and deepika's hair care routine",
    img: Haircare
  },
  {
    _id: uuid(),
    categoryName: "Skincare",
    description:
      "Get to know skincare routines of your favourite celebs",
    img: Skincare
  },

];
