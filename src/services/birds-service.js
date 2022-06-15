import {birdsDataWithRightAnswers} from '../assets/data/birds'

export default class BirdsService {
  constructor(data) {
    this.data = birdsDataWithRightAnswers;
  }
  
  async getBirds() {
    try {
      const birds = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.data)
        }, 2000)
      })
      
      return await birds
    } catch {
      throw new Error("Something went wrong while fetching the data.")
    }
  }
}