import card from "../resources/Chandra.png"
import card2 from "../resources/Seal.png"

const DuplexRules = () => {
  return (
    <div className="container">
      <h2>Duplex Rules</h2>
      <div style={{fontSize: 20, marginTop: 20}}>
        <p>‘Duplex’ is a multiplayer variant of TumbledMTG, similar to captain. Meant to be played with 3+ players.</p>
        <h4>Deck Construction:</h4>
        <ul>
          <li>
            <p>No sideboards</p>
          </li>
          <li>
            <p>One to three captains (can be any legendary creature that isn't an Eldrazi). For each captain beyond the first, that player begins the game with one fewer command seal (pictured below)</p>
          </li>
          <li>
            <p>Minimum 120 card deck size (instead of 60) (in addition to the captains)</p>
          </li>
          <li>
            <p>Maximum two copies of any given card (instead of four)</p>
          </li>
          <li>
            <p>Maximum one copy of any given legendary card</p>
          </li>
          <li>
            <p>Players may choose to color-restrict themselves. If mana of a restricted color would be added to a player's mana pool, that player adds a colorless mana instead. Color restrictions should be chosen during deck construction. Players receive bonuses based on how many colors they choose to have restricted:</p>
            <ul>
              <li>
                <p>2+ Restricted Colors: Player may mulligan one time without penalty.</p>
              </li>
              <li>
                <p>3+ Restricted Colors: After mulligans are completed, player may scry 1.</p>
              </li>
              <li>
                <p>4+ Restricted Colors: Player begins the game with an additional Command Seal.</p>
              </li>
            </ul>
          </li>
        </ul>
        <img src={card} className="bigimage" alt="" />
        <div style={{marginBottom: 30}}>
          <h4>Gameplay Rules:</h4>
          <ul>
            <li>
              <p>Captains begin the game in the ‘command zone’</p>
            </li>
            <li>
              <p>Players may exile a card from their hand to put one of their captains from the command zone into their hand. They may do this during any of their main phases while the stack is empty (ie nonflash speed)</p>
            </li>
            <li>
              <p>If a captain would be put into its owner's library from anywhere other than their hand, its owner may choose to put that card into exile instead.</p>
            </li>
            <li>
              <p>Unlike EDH, there is no rule that returns captains to the command zone when they leave play. However, each player begins the game with up to three Command Seal emblems, depending on how many captains they choose:</p>
            </li>
          </ul>
        </div>
        <img src={card2} className="bigimage" alt="" />
      </div>
    </div>
  )
}

export default DuplexRules
