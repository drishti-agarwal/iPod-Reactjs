import React, { Component } from 'react'
import LeftScreen from '../leftScreen/LeftScreen'
import './SettingsScreen.css'
import '../ipod.css'


class SettingsScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isClicked: false,
            ipodClicked: false
        }
    //     this.getbackground =this.getbackground.bind(this)
    //     this.getipod = this.getipod.bind(this)
    }

    getipod(st){
        this.setState({
            ipodClicked: st
        })
    }

    getbackground(st){
        this.setState({
            isClicked: st
        })
    }
    
    render() {
        
        let cssProperties = {}
        if (this.state.isClicked) {
         cssProperties['--bgcolor'] = 'white'
        }
        if (this.state.ipodClicked) {
            cssProperties['--ipodcolor'] = 'linear-gradient(to bottom, #787678 0%, #353536 100%)'
            cssProperties['--wheelbutton'] = '#4d4c4e'
            cssProperties['--wheelcolor'] = '#2f2f2f'
        }

        return (
            <div className="setting-ls">
              <LeftScreen act={this.props.act} click={this.props.click} mainmenu={this.props.settingsmenu} />
              {/* <button onClick={() => { this.setState({ isClicked: !this.state.isClicked }); this.props.thm(cssProperties) }}>Change Background</button>
            <button onClick={() => { this.setState({ ipodClicked: !this.state.ipodClicked }); this.props.thm(cssProperties) }}>Change Ipod Colour</button>
                 */}
            </div>
        )
    }
}

export default SettingsScreen
