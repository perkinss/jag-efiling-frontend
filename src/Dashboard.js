import React, {Component} from 'react';
import SelectForm from './forms/SelectForm.js';
import Top5 from './forms/top.5.js';
import ActiveFormList from './components/ActiveFormList.js';
import NeedHelp from './need.help.js';
import './dashboard.css';

class Dashboard extends Component {

    render() {
        return (
            <div id="topicTemplate" className="template container gov-container form">
                <div className="row">
                    <div role="main" className="col-sm-12">
                        <div className="col-sm-12">
                            <ActiveFormList />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div role="main" className="col-sm-12">
                        <div className="col-sm-8">
                            <SelectForm/>
                        </div>
                        <div className="col-sm-4">
                            <Top5/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div role="main" className="col-sm-12">
                        <div className="col-sm-12">
                            <NeedHelp/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
