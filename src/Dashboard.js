import React, {Component} from 'react';
import Journey from './components/Journey.js';
import Top5 from './forms/Top5.js';
import ActiveFormList from './components/ActiveFormList.js';
import NeedHelp from './NeedHelp.js';
import './dashboard.css';
import ReactTooltip from 'react-tooltip';

class Dashboard extends Component {

    render() {
        return (
            <div id="topicTemplate" className="template container gov-container form">
                <div className="row">
                    <div role="main" className="col col-sm-12">
                        <ActiveFormList fetch={this.props.fetch} />
                    </div>
                </div>
                <div className="row">
                    <div role="main" className="center-main col col-lg-8" >
                        <Journey/>
                    </div>
                    <div role="main" className="right-nav-main col col-lg-4"  >
                        <div className="row">
                            <div className="col col-lg-12">
                                <Top5/>
                            </div>
                        </div>
                        <div className="row">
                            <div role="main" className="col col-lg-12">
                                <NeedHelp/>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactTooltip
                    multiline={true}
                    html={true}
                    effect="solid"
                    delayHide={1000}
                    className="right-to-appeal-tooltip"
                    wrapper="div"
                />
            </div>
        );
    }
}

export default Dashboard;
