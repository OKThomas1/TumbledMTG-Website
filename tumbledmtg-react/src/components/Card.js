import React from "react"
import queryString from "query-string"
import axios from "axios"

class Card extends React.Component {
    
    state = {
        card: null
    }

    componentDidMount(){
        axios.get("/cards").then(res => {
            const search = queryString.parse(this.props.location.pathname)['/card']
            var card = res.data.find(card => card.name === search)
            if(!(card === undefined)){
                card['url'] = `https://firebasestorage.googleapis.com/v0/b/tumbledmtg-website.appspot.com/o/${encodeURI(card.name)}.jpg?alt=media`
                this.setState({card: card})
            }
            else{
                this.setState({card: true})
            }

        })
    }

    render(){
    return (
        <div className="container">
            <div className="single-card">
            {
            this.state.card === null ? 
            <div className='form-center'>
            <p>Loading</p>
            </div>: this.state.card === true ? <div>
                <h2 style={{textAlign: "center"}}>Card is either banned or does not exist.</h2>
            </div> :
            <div>
<div className='cardtext'>
<img src={this.state.card.url} className='bigimage' alt="" />

{this.state.card.tags ? (
    <div style={{display: "inline-block"}}>
    <span style={{display: "inline-block"}}>
    <h4 style={{display: "inline-block", paddingRight: 10}}>Tags: </h4>
{this.state.card.tags.split(" ").map(word => {
return(
    <a href={`/search=is:${word}&pg=1`} style={{display: "inline-block", paddingRight: 3}}><h4><span class="badge badge-secondary">{word}</span></h4></a>
)
})}
</span>
</div>
) : null}
<br/>
<a href={`/decklists=${this.state.card.name}&pg=1`}><h4>See all decklists that include this card.</h4></a>
<br/>

<h3>{this.state.card.name}</h3>
<h4>{this.state.card.type}</h4>
<h5>{this.state.card.text}</h5>
<h1>{this.state.card.pt}</h1>
</div>

            </div>
            }
        </div>
        </div>

    )
}
}


export default Card