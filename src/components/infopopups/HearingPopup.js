import React, { Component } from 'react';
import InfoPopupWrapper from "./common/InfoPopupWrapper";

class HearingPopup extends Component {

    constructor(props) {
        super(props);

        let content = [
            {
                URLName: "How do I prepare for my hearing?",
                URL: `https://www.courtofappealbc.ca/${this.props.type}-guidebook/${this.props.link1}`,
            },
            {
                URLName: "What will happen at my hearing?",
                URL: `https://www.courtofappealbc.ca/${this.props.type}-guidebook/${this.props.link2}`
            },
            {
                URLName: "What can I expect after my hearing?",
                URL: `https://www.courtofappealbc.ca/${this.props.type}-guidebook/${this.props.link3}`
            }
        ];

        this.sections = [{
            expandable: false,
            expanded: true,
            sectionHeading: "For more information about the hearing process, click the topics below: ",
            iconSrc: "/icons/icon-hearing.svg",
            iconClass: "info-modal-icon",
            lineHeight: null,
            content: content
        }]
    }

    render () {
        return  (
            <InfoPopupWrapper
                title="Your Hearing"
                helpType={this.props.type}
                close={this.props.close}
            >
                {this.props.getSections(this.sections)}
            </InfoPopupWrapper>
        );
    }

} export default HearingPopup;