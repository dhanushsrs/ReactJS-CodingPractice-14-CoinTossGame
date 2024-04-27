// Write your code here
import {Component} from 'react'

import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImg,
    headCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const {headCount, tailCount} = this.state

    let tossImage = ''
    let updatedHeadCount = headCount
    let updatedTailCount = tailCount

    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      tossImage = headImg
      updatedHeadCount += 1
    } else {
      tossImage = tailImg
      updatedTailCount += 1
    }

    this.setState({
      headCount: updatedHeadCount,
      tailCount: updatedTailCount,
      tossResultImage: tossImage,
    })
  }

  render() {
    const {tossResultImage, headCount, tailCount} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="coin-image" />
          <button className="coin-btn" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {headCount + tailCount} </p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
